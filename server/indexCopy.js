// import express, { urlencoded } from "express";
// import mongoose from "mongoose";
// import { Product } from "./models/product.model.js";

// const server = express();

// server.use(express.json());
// //if you need to send data in form format instead of json
// server.use(express.urlencoded({ extended: false }));
// const SERVER_PORT = 1772;

// server.get("/", (req, res) => {
//   return res.json({
//     success: true,
//     reason: "Jesus my dad",
//   });
// });

// //updating a product
// server.put("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     //if no product available
//     if (!product) {
//       return res.status(404).json({ message: "Product Not Found" });
//     }

//     //if product is available then give the updated one
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {}
// });

// //getting all products
// server.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //getting specific using id

// server.get("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //adding products
// server.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //delete the product

// server.delete("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     //if there is no product
//     if (!product) {
//       return res.status(404).json({ message: "Product Not Found" });
//     }
//     res.status(200).json({ message: "Product is deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// server.get("*", (req, res) => {
//   res.send("page not available");
// });
// mongoose
//   .connect(
//     "mongodb+srv://imsweety33:1WoRhFJnSiBFY9d8@sample.txvvcef.mongodb.net/sample?retryWrites=true&w=majority&appName=sample"
//   )
//   .then(() => {
//     console.log("connected to db");
//     server.listen(SERVER_PORT, () => {
//       console.log(`server is on http://localhost:${SERVER_PORT}`);
//     });
//   })
//   .catch(() => {
//     console.log("connection failed");
//   });
