import mongoose from "mongoose";
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name of the product"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", ProductSchema);
