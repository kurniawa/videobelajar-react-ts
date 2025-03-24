import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
// import videoRoutes from "./routes/videoRoutes.js";

const app = express();

// app.use(cors({ origin: "https://videobelajar-react-ts.vercel.app" }));
// app.use(cors({
//     origin: ["https://videobelajar-react-ts.vercel.app", "http://localhost:3000"], // Tambahkan localhost jika sedang test dari local
//     credentials: true,
// }));

// app.use(cors({
//     origin: ["http://localhost:5173", "https://videobelajar-react-ts.vercel.app"], 
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type,Authorization"
// }));

app.use(cors({origin: "*"}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend berjalan di Vercel!");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/login", authRoutes);
// app.use("/api/videos", videoRoutes);

// module.exports = app;
export default app;
