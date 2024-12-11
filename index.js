import express  from "express"; //Initiling express and importing express for node to fetch express jS
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from './src/routes/crmRoutes'; //Importing routes
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

// Loading env variable like port and DBURL

dotenv.config({path:".env"});
//const PORT = process.env.PORT;
const dbURI = process.env.DATABASE_URL;

//mongoose connection 
mongoose.Promise = global.Promise;
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Error handling for MongoDB connection
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

//bodyparser setup

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res)=>
    res.send(`Node and Express Server is running on port ${PORT}`)
);
app.listen(PORT, ()=>
console.log(`Server is running on port ${PORT}`)
);

