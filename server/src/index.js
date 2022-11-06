import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import fileUpload from "express-fileupload";
import path from "path";
import cors from 'cors'
import helmet from 'helmet'
//private route authorization config
import privateRoutesConfig from "./config/Routes-config";
import GoogleConfig from "./config/Google-Config";

// Database connection
import ConnectDB from "./dataBase/Connection";

import Auth from "./api/auth";
import Food from "./api/Food";
import Restaurant from "./api/Restaurant"
import User from "./api/User"
import Menu from "./api/Menu"
import Order from "./api/Order"
import Review from "./api/Review"
import Images from "./api/Images"

dotenv.config();

const zomato = express();

//adding additonal passport configuration
privateRoutesConfig(passport);
GoogleConfig(passport)

zomato.use(cors({origin:"http://localhost:3000"}));
zomato.use(helmet());
zomato.use(express.json());
zomato.use(session({secret: "ZOMATOAPP"}));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

zomato.use(fileUpload({
  useTempFiles: true
}))
// /auth/signup
zomato.use("/auth", Auth);
//Food route
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/images", Images);

const PORT = 4000;

zomato.listen(PORT, () => {
  ConnectDB()
    .catch((error) => {
      console.log("Server is running, but database connection failed...");
      console.log(error);
    });

  console.log("Server is running !!!");
});