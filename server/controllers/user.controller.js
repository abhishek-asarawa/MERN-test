import model from '../models/user.model';
import {response} from "../utils/response";
// catching errors
import catchError from "../utils/catchError";
import errorHandler from '../utils/errorClass';
import { generateToken } from '../misc/token';
import cookieConfig from '../config/cookie';


const controller = {};

//  user signin control
controller.signin = catchError(async (req, res, next) => {
        const user = new model(req.body);
        const data = await user.save();
        response(res, data, null, 200, "user added succesfully");
});


// user login control
controller.login = catchError( async (req, res, next) => {
        const user = await model.findOne({email: req.body.email});

        // checking if user found
        if (!user) 
                throw new errorHandler(`No user found by this email id, ${req.body.email}`, 404);


        // checking password
        if (user.password != req.body.password)
                throw new errorHandler(`Invalid password`, 401);

        // creating token
        const token = await generateToken(user);
        // storing it in response
        res.cookie("token", token, cookieConfig);

        const data = {token, ...user._doc};
        response(res, data, null, 200, "user loggedin successfully.");
});


// controller.profile = catchError( async(req, res, next) => {
//         const user = 
// })

export default controller;