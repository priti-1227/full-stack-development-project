import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

const app = express();

// Middleware
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));

// Health check
app.get("/api/health", (_, res) => res.json({ ok: true }));

// Connect MongoDB + start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("Mongo error ❌", err);
    process.exit(1);
  });
