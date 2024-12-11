import express  from "express";


const app = express();
const PORT = 3000;

app.get('/', (req, res)=>
    res.send(`Node and Express Server is running on port ${PORT}`)
);
app.listen(PORT, ()=>
console.log(`Server is running on port ${PORT}`)
);