// import packages
import express from "express";
import morgan from "morgan";
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const __dirname = path.resolve();


// connecting to databse
import "./database/mongodb.js";


// importing routing file


// init
const app = express();


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// view engine


// routing
if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, "./client/build")));
}


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', "index.html"))
});


// 404 error
app.use((req, res, next) => {
    next(new Error("Path is not defined"));
});


// error handler
app.use((err, req, res, next) => {
    if(err.message == 'Path is not defined') return res.status(404).send(err);
    res.status(500).send(err);
});


// listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server is runnning on ${PORT}...`)); 
