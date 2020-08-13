import { check, validationResult } from "express-validator";
import simplyfyErr from "../../utils/simpleValidationErr"
import errorHandler from "../../utils/errorClass";


export const loginChecker = [
    check("email")
        .exists().withMessage("Please provide email id.")
        .isEmail().withMessage("Please give a valid email."),

    check("password")
        .exists().withMessage("Please provide password.")
        .trim()
        .isLength({min: 1}).withMessage("Please provide password")
]


export const loginError = (req, res, next) => {
    try {
        validationResult(req).throw();
        next();
    } catch(err) {
        const singleKeyError = simplyfyErr(err.array());
        const errors =  singleKeyError.map(e => e.msg);
        const message = errors.join(",");
        next(new errorHandler(message, 400));
    }
};