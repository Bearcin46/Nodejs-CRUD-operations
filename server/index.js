import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { Product } from "./models/product.model.js";
import { router as productRoute } from "./routes/product.route.js";
import dotenv from "dotenv";

const server = express();
const SERVER_PORT = 1772;
dotenv.config();
//middleware

server.use(express.json());
//if you need to send data in form format instead of json
server.use(express.urlencoded({ extended: false }));

//routes
server.use("/api/products", productRoute);

server.get("/", (req, res) => {
  return res.json({
    success: true,
    reason: "Jesus my dad",
  });
});

server.get("*", (req, res) => {
  res.send("page not available");
});
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to db");
    server.listen(SERVER_PORT, () => {
      console.log(`server is on http://localhost:${SERVER_PORT}`);
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
