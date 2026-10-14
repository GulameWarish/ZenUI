
import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    // Check whether the token cookie exists
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please log in.",
      });
    }

    // Check JWT secret configuration
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing in environment variables");

      return res.status(500).json({
        success: false,
        message: "Server authentication configuration error.",
      });
    }

    // Verify token
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    // Check user ID inside token
    if (!verifyToken || !verifyToken.userId) {
      return res.status(401).json({
        success: false,
        message: "Invalid authentication token. Please log in again.",
      });
    }

    // Set authenticated user's ID
    req.userId = verifyToken.userId;

    return next();
  } catch (error) {
    console.error("Authentication error:", error.message);

    if (
      error.name === "TokenExpiredError" ||
      error.name === "JsonWebTokenError" ||
      error.name === "NotBeforeError"
    ) {
      return res.status(401).json({
        success: false,
        message: "Your session is invalid or expired. Please log in again.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal authentication error.",
    });
  }
};

export default isAuth;
