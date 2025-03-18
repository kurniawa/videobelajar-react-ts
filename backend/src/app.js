import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
// import videoRoutes from "./routes/videoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
// app.use("/api/videos", videoRoutes);

export default app;
