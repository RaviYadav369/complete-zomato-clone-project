import express from "express";
import dotenv from "dotenv";

// Database connection
import ConnectDB from "./dataBase/Connection";

import Auth from "./api/auth";
import Food from "./api/Food";

dotenv.config();

const zomato = express();

zomato.use(express.json());

zomato.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

// /auth/signup
zomato.use("/auth", Auth);
//Food route
zomato.use("/food", Food);

const PORT = 4000;

zomato.listen(PORT, () => {
  ConnectDB()
    .then(() => {
      console.log("Server is running !!!");
    })
    .catch((error) => {
      console.log("Server is running, but database connection failed...");
      console.log(error);
    });

  console.log("Server is running !!!");
});