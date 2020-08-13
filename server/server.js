// import packages
import express from "express";
import morgan from "morgan";
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";

// importing error handler class
import errorHandler from "./utils/errorClass";


dotenv.config();
__dirname = path.resolve();


// connecting to databse
import "./database/mongodb.js";

// importing response util
import { response } from "./utils/response";

// importing routes
import userRoute from "./routes/user.route";


// init
const app = express();
const publicPath = path.join(__dirname, "client", "build");
const port = process.env.PORT || 3000;


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.static(publicPath));
// enabling cross origin
app.use(cors({
    origin: "http://localhost:3001"
}));


// routing
app.use("/api/users", userRoute);


app.use("/api/*", (req, res, next) => {
    const err = new errorHandler(`Can not find ${req.originalUrl} on this server.`, 404);
    next(err);
});


app.get('/*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


app.use((err, req, res, next) => {
    if(err.statusCode == 404){
        return response(res, null, err, err.statusCode, err.status);
    };
    response(res, null, err, err.statusCode);
});


app.listen(port, console.log(`Server is runnning on ${port}`));


// Unhandled Rejection Handler AKA Safety Net
process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION! Shutting down...');
    process.exit(1);
  });