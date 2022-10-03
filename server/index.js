import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
//private route authorization config
import privateRoutesConfig from "./config/Routes-config";

// Database connection
import ConnectDB from "./dataBase/Connection";

import Auth from "./api/auth";
import Food from "./api/Food";
import Restaurant from "./api/Restaurant"
import User from "./api/User"

dotenv.config();

const zomato = express();

//adding additonal passport configuration
privateRoutesConfig(passport);

zomato.use(express.json());
zomato.use(session({secret: "ZOMATOAPP"}));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

// /auth/signup
zomato.use("/auth", Auth);
//Food route
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", passport.authenticate("jwt", { session: false }), User);

const PORT = 4000;

zomato.listen(PORT, () => {
  ConnectDB()
    .catch((error) => {
      console.log("Server is running, but database connection failed...");
      console.log(error);
    });

  console.log("Server is running !!!");
});