const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token; // safer access using optional chaining

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password"); // exclude password

    if (!user) {
      return res.status(402).json({ message: "Unauthorized: User not found" });
    }

    req.user = user; // Attach user object to request
    next(); // continue to next middleware or controller
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res
      .status(403)
      .json({ message: "Unauthorized: Invalid or expired token" });
  }
};

module.exports = authMiddleware;
