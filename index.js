import express  from "express"; //Initiling express and importing express for node to fetch express jS
import routes from './src/routes/crmRoutes'; //Importing routes

const app = express();
const PORT = 4000;

routes(app);

app.get('/', (req, res)=>
    res.send(`Node and Express Server is running on port ${PORT}`)
);
app.listen(PORT, ()=>
console.log(`Server is running on port ${PORT}`)
);

