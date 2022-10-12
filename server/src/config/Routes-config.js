import passport from "passport";
import JwtPassport from "passport-jwt"

import { UserModel } from "../dataBase/User"

const JwtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZOMATOAPP"
}

export default (passport) => {
    passport.use(
        new JwtStrategy(option, async (jwt_payload, done) => {
            try {
                const doesUserExist = await UserModel.findById(jwt_payload.user)
                if (!doesUserExist) {
                    return done(null, false)
                }
                return done(null, doesUserExist)

            } catch (error) {
                throw new Error(error)
            }

        })
    )
}