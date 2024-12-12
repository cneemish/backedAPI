import express  from "express"; //Initiling express and importing express for node to fetch express jS
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from './src/routes/crmRoutes'; //Importing routes
import dotenv from "dotenv";
import multer from 'multer';
import path from 'path';


const app = express();
const PORT = 3000;

// Loading env variable like port and DBURL

dotenv.config({path:".env"});
//const PORT = process.env.PORT;
const dbURI = process.env.DATABASE_URL;

//mongoose connection with mogodb

mongoose.Promise = global.Promise;
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Error handling for MongoDB connection
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// multer 

//const upload = multer({ dest: 'public/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    },
  });
  
  const upload = multer({ storage });

// serving static file 
app.use(express.static('public'));

//bodyparser setup

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res)=>
    res.send(`Node and Express Server is running on port ${PORT}`)
);
app.post('/api/upload',upload.single('file') ,(req,res)=>{
    res.json(req.file);
});
app.listen(PORT, ()=>
console.log(`Server is running on port ${PORT}`)
);

