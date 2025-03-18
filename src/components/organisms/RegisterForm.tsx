import { Link } from "react-router-dom";
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

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        console.log("Full Name:", fullNameRef.current?.value);
        console.log("Email:", emailRef.current?.value);
        console.log("Gender:", genderRef.current?.value);
        console.log("Country Code:", countryCodeRef.current?.value);
        console.log("Phone Number:", phoneNumberRef.current?.value);
        console.log("Password:", passwordRef.current?.value);
        console.log("Password Confirmation:", passwordConfirmationRef.current?.value);

        // Mengambil data dari input
        const fullName = fullNameRef.current?.value;
        const email = emailRef.current?.value;
        const gender = genderRef.current?.value;
        const countryCode = countryCodeRef.current?.value;
        const phoneNumber = phoneNumberRef.current?.value;
        const password = passwordRef.current?.value;
        const passwordConfirmation = passwordConfirmationRef.current?.value;

        // Validation
        if (!fullName || !email || !gender || !countryCode || !phoneNumber || !password || !passwordConfirmation) {
            setError("Semua kolom wajib diisi!");
            setLoading(false);
            return;
        }
        
        if (password !== passwordConfirmation) {
            setError("Password dan Konfirmasi Password tidak sama");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("http://localhost:9000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    gender,
                    countryCode,
                    phoneNumber,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Terjadi kesalahan saat mendaftar");
            }

            setSuccess("Pendaftaran berhasil! Silakan login.");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
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
                <InputPassword type="password" id="kata-sandi" name="Kata Sandi" required={true} ref={passwordRef} />
                <InputPassword type="password" id="konfirmasi-kata-sandi" name="Konfirmasi Kata Sandi" required={true} ref={passwordConfirmationRef} />

                <div className="flex justify-end">
                    <Link to={'#'} className="font-dm-sans font-[400] text-[14px] text-[#333333AD] xl:text-[16px]">Lupa Password?</Link>
                </div>
            </div>

            {error && <ValidationFeedback type="error" message={error} />}
            {success && <ValidationFeedback type="success" message={success} />}

            <div className="space-y-[16px] mt-[20px] xl:mt-[24px]">
                <ButtonLime500 type="submit" label="Daftar" to={null} />
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
Database sudah jalan untuk fitur registrasi dan Login. Menggunakan bantuan Prisma supaya bisa menggunakan ORM. Databasenya menggunakan bantuan Neon yang sudah terdapat pada Vercel.
Untuk fitur CRUD saya aplikasikan pada fitur registrasi dan login. Fitur registrasi dan login, serta edit profile user.
Untuk sisi interaktif: terdapat dropdown menu pada tampilan mobile, terdapat loading spinner (animasi loading ketika sedang memproses sesuatu), terdapat validasi dari feedback (apabila request error ataupun request succeed)

 */