
import jwt from "jsonwebtoken";

export const genToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing from environment variables");
  }

  if (!userId) {
    throw new Error("User ID is required to generate a token");
  }

  return jwt.sign(
    { userId: userId.toString() },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};
