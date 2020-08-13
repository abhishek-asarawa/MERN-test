// importing error class
import errorHandler from "./errorClass";

// simplifying mongoose errors
// 1. Cast Error
const handleCastError = err => 
    new errorHandler(`Invalid value (${err.value}) for ${err.path}`, 400);


// 2. Duplicate Field Error
const handleDuplicateFieldError = err =>{
    let value = "";
    if (err.errmsg) value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
    if (err.keyValue) value = err.keyValue;
    const message = `Duplicate field value: ${JSON.stringify(value)}. Please use another value.`;
    return new errorHandler(message, 400)
};


// 3. Validation Error
const handleValidationError = err => {
    const errors = Object.values(err.errors).map(e => e.message);
    // console.log("ERRORS ===> ", errors);
    const message = `Invalid input data. ${errors.join('. ')}`;
    // console.log("MESSAGE==>", message);
    return new errorHandler(message, 400);
};



// production error response
const sendErrorProd = (err, res) => {
    // if error is trusted
    if(err.isOperational){
        res.status(err.statusCode || 400).json({
            data: null,
            error: err.message,
            message: err.status
        });
    } else {
        // log error
        console.log(err);

        // sending response to client
        res.status(500).json({
            data: null,
            error: "OOPS!! Something went wrong. Please hold on.",
            message: "error"
        });
    }
};


const sendErrorDev = (err, res) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
        data: null,
        error: err.message,
        message: err.message,
        stack: err.stack
    });
};


// handling erros response
const sendError = (err, res) => {
    if (process.env.NODE_ENV == "production"){
        // console.log("actual error===>",err);
        let error = { ...err };
        // console.log("After transfer ===>",error, "\n name: ", error.name);

        // handling mongoose errors
        // 1.CastErrors
        if (error.name === "CastError") {
            error = handleCastError(error);
        }
        // Duplicate Field Error
        if (error.code === 11000) {
            error = handleDuplicateFieldError(error);
        }
        // Validation Error
        if (error.name === "ValidationError" || error._message === "user validation failed") {
            error = handleValidationError(error);
        }

        // console.log(error);

        sendErrorProd(error, res)
    } else {
        sendErrorDev(err, res);
    }
};


export const response = (res, data, error, status = 500, message = null) => {
    if (error) {
        sendError(error, res);
    } else {
        res.status(status).json({
            data,
            error,
            message: message
        });
    }
} ;