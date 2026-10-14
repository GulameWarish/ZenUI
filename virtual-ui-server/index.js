
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./configs/connectDB.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import componentRouter from "./routes/component.route.js";
import paymentRouter from "./routes/payment.route.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://zenuia.netlify.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());

// Health check: does not require a database connection.
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ZenUI Backend Running 🚀",
  });
});

// Connect to MongoDB before handling API requests.
let dbConnectionPromise;

app.use("/api", async (req, res, next) => {
  try {
    if (!dbConnectionPromise) {
      dbConnectionPromise = connectDB().catch((error) => {
        dbConnectionPromise = null;
        throw error;
      });
    }

    await dbConnectionPromise;
    next();
  } catch (error) {
    console.error("Database connection failed:", error.message);

    return res.status(503).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

// API routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/component", componentRouter);
app.use("/api/payment", paymentRouter);

// Local development only
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app; 
