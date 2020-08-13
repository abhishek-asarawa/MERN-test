import express from 'express';
import userController from "../controllers/user.controller";
import { signinChecker, signinError } from '../middlewares/validators/signin.validator';
import { loginChecker, loginError } from "../middlewares/validators/login.validator";

// route
const userRoute = express.Router();


userRoute.post(
    '/signin', 
    signinChecker,
    signinError,
    userController.signin
);


userRoute.post(
    "/login",
    loginChecker,
    loginError,
    userController.login
);


// userRoute.get(
//     "/profile",
//     userController.profile
// )

export default userRoute;