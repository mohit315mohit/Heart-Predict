const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(name)
  // return res.status(200).json({ message: res.body });
  try {
    const userExist = await User.findOne({ email });

    if (userExist)
      return res.status(400).json({ message: "User already exists" });

    // const userExist1 =await User.findOne({ name });

    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword)
    const user = await User.create({ name, email, password: hashedPassword });
    const token = createToken(user);

    res.cookie("token", token, { httpOnly: true, secure: false });
    res.status(201).json({ message: "Signup successful", user });
  } catch (err) {
    res.status(500).json({ message: "Signup error", error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email,password);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = createToken(user);
    res.cookie("token", token, { httpOnly: true, secure: false });
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
};

exports.getMe = async (req, res) => {
  res.status(200).json({ message: "User profile info", user: req.user });
};

exports.meid = async (req, res) => {
  res.status(200).send({ message: "User id" ,user: req.user._id});
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false, // true in production
      sameSite: "strict",
      path: "/",
    });
    res.json({ message: "Logged out successfully" });
  } catch (e) {
    res.json({ message: "Logged out failed" });
  }
};
