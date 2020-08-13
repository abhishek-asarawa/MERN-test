import { Strategy, ExtractJwt } from "passport-jwt";
import userModel from "../../models/user.model";
import { tokenExtract } from "../../misc/token";
import { secretKey } from "../../config/token";

// assigning token
ExtractJwt.token = tokenExtract;


// cofig passport jwt
const options = {
    jwtFromRequest: ExtractJwt.fromHeader("autherization"),
    secretOrKey: secretKey
};


// making strategy
const strategy = new Strategy(options, async(payload, done) => {
    try {
        const user = await userModel.findById(payload.sub);

        // if user not found
        if (!user) return done(null, false);

        done(null, user);
    } catch (err) {
        done(err, false);
    }
});


const jwtStrategy = passport => passport.use(strategy);


export default jwtStrategy;