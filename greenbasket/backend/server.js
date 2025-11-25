const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/grocerydb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const secretkey = "mysecretkey";

const productSchema = new mongoose.Schema({
  name: String,
  pricePerKg: Number,
  category: String,
  description: String
});
const Product = mongoose.model("Product", productSchema);

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


const Userschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
const User = mongoose.model("User", Userschema);

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userexists = await User.findOne({ email })
  if (userexists) {
    return res.json({ message: "User already exists" })
  }

  const hashedpassword = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashedpassword })

  res.json({ message: "Registration successfull" })
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "user not found" });

  const ismatch = await bcrypt.compare(password, user.password);
  if (!ismatch) return res.json({ message: "Incorrect password" });

  const token = jwt.sign({ id: user._id }, secretkey, { expiresIn: "1d" });
  res.json({
    message: "Login successfull",
    token,
    user: { id: user._id, email: user.email }
  })


})


app.listen(5000, () => console.log("Server running on port 5000"));