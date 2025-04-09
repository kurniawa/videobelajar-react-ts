import { Link, useNavigate } from "react-router-dom";
import InputPhoneNumber from "../atoms/InputPhoneNumber";
import InputPassword from "../atoms/InputPassword";
import InputWithLabel from "../atoms/InputWithLabel";
import SelectWithLabel from "../atoms/SelectWithLabel";
import ButtonGoogle from "../atoms/ButtonGoogle";
import ButtonLime500 from "../atoms/ButtonLime500";
import ButtonGreen200 from "../atoms/ButtonGreen200";
import LineHorizontalWithLabel from "../atoms/LineHorizontalWithLabel";
import { useRef, useState } from "react";
import LoadingSpinner from "../molecules/LoadingSpinner";
import ValidationFeedback from "../atoms/ValidationFeedback";
import axios from "axios";

export default function RegisterForm() {
    
    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const countryCodeRef = useRef<HTMLSelectElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // console.log("Full Name:", fullNameRef.current?.value);
        // console.log("Email:", emailRef.current?.value);
        // console.log("Gender:", genderRef.current?.value);
        // console.log("Country Code:", countryCodeRef.current?.value);
        // console.log("Phone Number:", phoneNumberRef.current?.value);
        // console.log("Password:", passwordRef.current?.value);
        // console.log("Password Confirmation:", passwordConfirmationRef.current?.value);

        // Mengambil data dari input
        const fullName = fullNameRef.current?.value?.trim() || "";
        const email = emailRef.current?.value?.trim() || "";
        const gender = genderRef.current?.value?.trim() || "";
        const countryCode = countryCodeRef.current?.value?.trim() || "";
        const phoneNumber = phoneNumberRef.current?.value?.trim() || "";
        const password = passwordRef.current?.value; // Jangan trim password
        const passwordConfirmation = passwordConfirmationRef.current?.value; // Jangan trim password
        let phoneNumberFull = "";

        // console.log(password?.length);
        // return;
        // Validation
        if (!fullName || !email || !gender || !countryCode || !phoneNumber || !password || !passwordConfirmation) {
            setError("Semua kolom wajib diisi!");
            setLoading(false);
            return;
        }
        
        if (password?.length < 8) {
            setError("Password minimal 8 karakter");
            setLoading(false);
            return;
        }

        if (password !== passwordConfirmation) {
            setError("Password dan Konfirmasi Password tidak sama");
            setLoading(false);
            return;
        }

        // Validasi email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Format email tidak valid");
            setLoading(false);
            return;
        }

        try {
            const {data: similarEmails} = await axios.get(
                `https://67c565bec4649b9551b67dc8.mockapi.io/api/v1/users?email=${email}`
            );
        
            // console.log(similarEmails);
            if (similarEmails.length !== 0) {
                // Lakukan pencocokan eksak di frontend
                const exactMatchEmail = similarEmails.find((user:any) => user.email === email);
                if (exactMatchEmail) {
                    setError("Email sudah terdaftar");
                    setLoading(false);
                    return;
                }
            }

            // throw new Error("existingEmail Test");

        } catch (err: any) {
            if (err.response?.status !== 404) { // Abaikan error 404 karena berarti email belum ada
                setError("Terjadi kesalahan saat memeriksa email");
                setLoading(false);
                return;
            }
        }

        // Validasi nomor telepon
        let phoneNumberTrimmedFrontZero = "";
        // Hilangkan angka 0 di depan nomor telepon
        phoneNumberTrimmedFrontZero = phoneNumber.replace(/^0+/, "");

        phoneNumberFull = `${countryCode}${phoneNumberTrimmedFrontZero}`;
        // console.log("Phone Number Full:", phoneNumberFull);
        try {
            // const similarPhoneNumberFull = await axios.get(`https://67c565bec4649b9551b67dc8.mockapi.io/api/v1/users?phoneNumberFull=${phoneNumberFull}`);
            const { data: similarPhoneNumberFull } = await axios.get(
                `https://67c565bec4649b9551b67dc8.mockapi.io/api/v1/users?phoneNumberFull=${phoneNumberFull}`
            );

            // console.log(similarPhoneNumberFull);
            // throw new Error("similarPhoneNumberFull Test");
            if (similarPhoneNumberFull.length !== 0) {
                // Lakukan pencocokan eksak di frontend
                const exactMatchPhoneNumberFull = similarPhoneNumberFull.find((user:any) => user.phoneNumberFull === phoneNumberFull);
                if (exactMatchPhoneNumberFull) {
                    setError("Nomor telepon sudah terdaftar");
                    setLoading(false);
                    return;
                }
            }
        } catch (error: any) {
            if (error.response?.status !== 404) { // Abaikan error 404 karena berarti phoneNumberFull belum ada
                setError("Terjadi kesalahan saat memeriksa phoneNumberFull");
                setLoading(false);
                return;
            }
        }
        
        const profilePicturePath = "";

        try {
            const response = await fetch("https://67c565bec4649b9551b67dc8.mockapi.io/api/v1/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    gender,
                    countryCode,
                    phoneNumber: phoneNumberTrimmedFrontZero,
                    phoneNumberFull,
                    password,
                    role: "USER",
                    profilePicturePath
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Terjadi kesalahan saat mendaftar");
            } else {
                setSuccess("Pendaftaran berhasil! Silakan login.");
                
                setTimeout(() => {
                    navigate("/login"); // ✅ Redirect ke halaman login
                    setLoading(false);
                }, 1500);
            }

        } catch (err: any) {
            setError(err.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
                
            }, 1500);
        }

    };



    return (
        <form onSubmit={handleRegister} className="relative rounded-sm bg-white p-[20px] xl:w-[590px] border border-[#F1F1F1]">
            {loading && <LoadingSpinner />}
            <div className="text-center">
                <h1 className="font-poppins text-[24px] font-[600] text-[#222325] xl:text-[32px]">Pendaftaran Akun</h1>
                <p className="mt-[10px] font-dm-sans text-[14px] font-[400] text-[#333333AD] xl:text-[16px]">Yuk, daftarkan akunmu sekarang juga!</p>
            </div>

            

            <div className="mt-[20px] flex flex-col gap-[12px]">
                <InputWithLabel type="text" id="nama-lengkap" name="Nama Lengkap" required={true} ref={fullNameRef} />
                <InputWithLabel type="email" id="e-mail" name="E-Mail" required={true} ref={emailRef} />
                <SelectWithLabel type="select" id="jenis-kelamin" name="Jenis Kelamin" options={[{value:"Female", label:"Wanita"}, {value:"Male", label:"Pria"}]} required={true} ref={genderRef} />
                <InputPhoneNumber label="No. HP" required={true} countryCodeRef={countryCodeRef} phoneNumberRef={phoneNumberRef} />
                <InputPassword id="kata-sandi" name="Kata Sandi" required={true} ref={passwordRef} />
                <InputPassword id="konfirmasi-kata-sandi" name="Konfirmasi Kata Sandi" required={true} ref={passwordConfirmationRef} />

                <div className="flex justify-end">
                    <Link to={'#'} className="font-dm-sans font-[400] text-[14px] text-[#333333AD] xl:text-[16px]">Lupa Password?</Link>
                </div>
            </div>

            {error && <ValidationFeedback type="error" message={error} />}
            {success && <ValidationFeedback type="success" message={success} />}

            <div className="space-y-[16px] mt-[20px] xl:mt-[24px]">
                <ButtonLime500 type="submit" label="Daftar" to={null} className="h-[34px] xl:h-[42px]" />
                <ButtonGreen200 type="button" label="Masuk" to='/login' />
            </div>

            <div className="mt-[20px] xl:mt-[24px]">
                <LineHorizontalWithLabel label="atau" />
            </div>
    
            <div className="mt-[20px] xl:mt-[24px]">
                <ButtonGoogle type="button" label="Daftar dengan Google" />
            </div>

        </form>
    )
}

/**
 *
CRUD diimplementasikan dengan bantuan MockAPI (mockapi.io).
CRUD diimplementasikan pada fitur/halaman:
Register, dimana user dapat melakukan registrasi akun baru. Lalu User dapat login sesuai dengan email dan password yang telah diinputkan pada saat registrasi.
Dashboard, dimana user dapat mengubah data diri, seperti nama, email, jenis kelamin, nomor telepon, dan password. User juga dapat menambahkan serta mengubah profile picture.
Fitur Profile Picture menggunakan API dari Cloudinary (cloudinary.com).

Untuk sisi interaktif: 
Dropdown menu pada tampilan mobile
Loading spinner (animasi loading ketika sedang memproses sesuatu)
Validasi dari feedback (apabila request error ataupun request succeed)
Password visibility (user dapat melihat password yang diinputkan)

 */