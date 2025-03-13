import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
    const { fullName, email, gender, countryCode, phoneNumber, password } = req.body;

    if (!fullName || !email || !gender || !countryCode || !phoneNumber || !password) {
        return res.status(400).json({ message: "Semua field harus diisi!" });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await prisma.user.create({
            data: {
                fullName,
                gender,
                email,
                password: hashedPassword,
                countryCode,
                phoneNumber,
            },
        });

        res.status(201).json({ message: "User berhasil dibuat", user });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan", error });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
