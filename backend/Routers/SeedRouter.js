import express from "express";
import data from "../data.js";
import Product from "../Models/productModal.js";
import User from "../Models/UserModal.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);

  await User.remove({});
  const createdUser = await User.insertMany(data.users);
  res.send({ createdProducts, createdUser });
});

export default seedRouter;
