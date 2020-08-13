import { check, validationResult } from "express-validator";
import errorHandler from "../../utils/errorClass";
import simplyfyErr from "../../utils/simpleValidationErr";


export const signinChecker = [
    check('email')
        .exists().withMessage("Please provide email")
        .isEmail().withMessage("Please provide correct email."),
    
    check('password')
        .exists().withMessage("Please provide password.")
        .trim()
        .isLength({min: 8}).withMessage("Password must be atleast 8 char long."),

    check('address')
        .exists().withMessage("Please provide address.")
        .trim()
        .isLength({min: 8}).withMessage("Address must be atleast 8 char long."),

    check('city')
        .exists().withMessage("Please provide city.")
        .trim()
        .isLength({min: 2}).withMessage("city must be atleast 2 char long."),

    check('state')
        .exists().withMessage("Please provide state.")
        .trim()
        .isLength({min: 4}).withMessage("state must be atleast 4 char long."),

    check('zip')
        .exists().withMessage("Please provide zip.")
        .isNumeric().withMessage("zip must be in number")
        .trim()
        .isLength({min: 6, max: 6}).withMessage("zip must be 6 char long only.")
];


export const signinError = (req, res, next) => {
    try{
        validationResult(req).throw();
        next()
    } catch(err){
        const singleKeyError = simplyfyErr(err.array());
        const errors =  singleKeyError.map(e => e.msg);
        const message = errors.join(",");
        next(new errorHandler(message, 400));
    }
};