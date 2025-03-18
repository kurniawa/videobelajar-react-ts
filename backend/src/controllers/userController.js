import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
            phoneNumber: phoneNumber || null,
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
            createdAt: newUser.createdAt,
        },
    });
  } catch (error) {
      console.error("Error saat registrasi:", error);
      res.status(500).json({ error: "Terjadi kesalahan saat mendaftar" });
  }
};