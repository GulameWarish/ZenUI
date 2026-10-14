
import { genToken } from "../configs/token.js";
import User from "../models/user.model.js";

const isProduction = process.env.NODE_ENV === "production";

const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const googleSignup = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required.",
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email });
    }

    const token = await genToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.error("googleSignup error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to sign in. Please try again.",
    });
  }
};

export const logOut = async (req, res) => {
  try {
    const { maxAge, ...clearOptions } = cookieOptions;

    res.clearCookie("token", clearOptions);

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("logout error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to log out.",
    });
  }
};
