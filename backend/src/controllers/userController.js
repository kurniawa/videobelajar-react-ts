import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect(); // Pastikan koneksi sebelum query
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { fullName, email, gender, countryCode, phoneNumber, password } = req.body;

    // Validasi: fullName, email, dan password harus diisi
    if (!fullName || !email || !password) {
        return res.status(400).json({ error: "Nama lengkap, email, dan password wajib diisi!" });
    }

    // Cek apakah email sudah digunakan
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        return res.status(400).json({ error: "Email sudah terdaftar!" });
    }

    // Cek apakah nomor telepon sudah digunakan
    let phoneNumberFull = null;
    let phoneNumberTrimmedFrontZero = null
    if (countryCode && phoneNumber) {
        // Hilangkan angka 0 di depan nomor telepon
        phoneNumberTrimmedFrontZero = phoneNumber.replace(/^0+/, "");

        phoneNumberFull = `${countryCode}${phoneNumberTrimmedFrontZero}`;
        const existingPhoneNumber = await prisma.user.findFirst({
            where: { phoneNumberFull },
        });
        if (existingPhoneNumber) {
            return res.status(400).json({ error: "Nomor telepon sudah terdaftar!" });
        }
    }

    // Enkripsi password sebelum disimpan
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Simpan user ke database
    const newUser = await prisma.user.create({
        data: {
            fullName,
            email,
            password: hashedPassword, // Password sudah terenkripsi
            gender: gender || null, // Jika tidak diisi, simpan sebagai null
            countryCode: countryCode || null,
            phoneNumber: phoneNumberTrimmedFrontZero || null,
            phoneNumberFull: phoneNumberFull || null,
        },
    });

    res.status(201).json({
        message: "Pendaftaran berhasil!",
        user: {
            id: newUser.id,
            fullName: newUser.fullName,
            email: newUser.email,
            gender: newUser.gender,
            countryCode: newUser.countryCode,
            phoneNumber: newUser.phoneNumber,
            phoneNumberFull: newUser.phoneNumber,
            createdAt: newUser.createdAt,
        },
    });
  } catch (error) {
      console.error("Error saat registrasi:", error);
      res.status(500).json({ error: "Terjadi kesalahan saat mendaftar" });
  }
};