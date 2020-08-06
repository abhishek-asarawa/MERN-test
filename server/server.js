// import packages
import express from "express";
import morgan from "morgan";
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const __dirname = path.resolve();


// connecting to databse
import "./database/mongodb.js";


// init
const app = express();
const publicPath = path.join(__dirname, "client", "build");
const port = process.env.PORT || 3000;


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(publicPath));



app.get('/*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });


app.listen(port, console.log(`Server is runnning on ${port}`)); 
