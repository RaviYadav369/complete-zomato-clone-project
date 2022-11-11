import googleOAuth from 'passport-google-oauth2'

import { UserModel } from '../dataBase/AllModels'

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: `${process.env.REACT_APP_FRONTEND_URL}auth/google/callback`
            },
            async (accessToken, refreshToken, profile, done) => {
                const newUser = {
                    fullname: profile.displayName,
                    email: profile.emails[0].value,

                };
                try {
                    const user = await UserModel.findOne({ email: newUser.email })
                    if (user) {
                        const token = user.generateJwtToken();
                        done(null, { user, token })
                    }
                    else {
                        const user = await UserModel.create(newUser);
                        const token = user.generateJwtToken();
                        done(null, { user, token })
                    }
                } catch (error) {
                    done(error, null)
                }

            }
        )
    );
    passport.serializeUser((userData,done) => done(null,{ ...userData}));
    passport.deserializeUser((id,done) => done(null,id));
}