import cookie from "cookie-parser";
import jwt from "jsonwebtoken";
import { secretKey } from "../config/token";

export const generateToken =  async userId => {
    try {
        const token = await jwt.sign({
            iss: "abhishek",
            sub: userId,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        }, secretKey);
        return token;
    } catch(err) {
        next(err);
    };
};


export const tokenExtract = req => (!!req && !!req.cookie) ? req.cookies.token : null;