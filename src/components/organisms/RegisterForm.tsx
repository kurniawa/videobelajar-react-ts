import { Link } from "react-router-dom";
import InputPhoneNumber from "../atoms/InputPhoneNumber";
import InputPassword from "../atoms/InputPassword";
import InputWithLabel from "../atoms/InputWithLabel";
import SelectWithLabel from "../atoms/SelectWithLabel";
import ButtonGoogle from "../atoms/ButtonGoogle";
import ButtonLime500 from "../atoms/ButtonLime500";
import ButtonGreen200 from "../atoms/ButtonGreen200";
import LineHorizontalWithLabel from "../atoms/LineHorizontalWithLabel";
import { PrismaClient, Gender } from "@prisma/client";
import { useRef, useState } from "react";
import bcrypt from "bcryptjs";

export default function RegisterForm() {
    
    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const countryCodeRef = useRef<HTMLSelectElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);

    const [gender, setGender] = useState<Gender | null>(null);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Full Name:", fullNameRef.current?.value);
        console.log("Email:", emailRef.current?.value);
        console.log("Gender:", gender);
        console.log("Country Code:", countryCodeRef.current?.value);
        console.log("Phone Number:", phoneNumberRef.current?.value);
        console.log("Password:", passwordRef.current?.value);
        console.log("Password Confirmation:", passwordConfirmationRef.current?.value);

        // Validation
        const fullName = fullNameRef.current?.value;
        if (!fullName || fullName === "") {
            alert("Nama Lengkap tidak boleh kosong");
            return;
        }

        const email = emailRef.current?.value;
        if (!email || email === "") {
            alert("Email tidak boleh kosong");
            return;
        }

        console.log(gender);
        if (!gender) {
            alert("Gender tidak boleh kosong");
            return;
        }

        const password = passwordRef.current?.value;
        if (!password || password === "") {
            alert("Password tidak boleh kosong");
            return;
        } else {
            const passwordConfirmation = passwordConfirmationRef.current?.value;
            if (!passwordConfirmation || passwordConfirmation === "") {
                alert("Konfirmasi Password tidak boleh kosong");
                return;
            } else if (password !== passwordConfirmation) {
                alert("Password dan Konfirmasi Password tidak sama");
                return;
            }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const countryCode = countryCodeRef.current?.value;
        if (!countryCode || countryCode === "") {
            alert("Country Code tidak boleh kosong");
            return;
        }

        
        const prisma = new PrismaClient();
        // Register new user
        try {
            const user = await prisma.user.create(
                {data: {
                    fullName: fullName,
                    gender: gender,
                    email: email,
                    password: hashedPassword,
                    countryCode: countryCode,
                    phoneNumber: phoneNumberRef.current?.value,
                }}
            );

            console.log(user);
            
        } catch (error) {
            console.log(error);
        }
        
    };


    const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(event.target.value as Gender);
    };

    return (
        <form onSubmit={handleRegister} className="rounded-sm bg-white p-[20px] xl:w-[590px] border border-[#F1F1F1]">
            <div className="text-center">
                <h1 className="font-poppins text-[24px] font-[600] text-[#222325] xl:text-[32px]">Pendaftaran Akun</h1>
                <p className="mt-[10px] font-dm-sans text-[14px] font-[400] text-[#333333AD] xl:text-[16px]">Yuk, daftarkan akunmu sekarang juga!</p>
            </div>

            <div className="mt-[20px] flex flex-col gap-[12px]">
                <InputWithLabel type="text" id="nama-lengkap" name="Nama Lengkap" required={true} ref={fullNameRef} />
                <InputWithLabel type="email" id="e-mail" name="E-Mail" required={true} ref={emailRef} />
                {/* <SelectWithLabel type="select" id="jenis-kelamin" name="Jenis Kelamin" options={[{value:Gender.female, label:"Wanita"}, {value:Gender.male, label:"Pria"}]} required={true} ref={genderRef} /> */}

                <select id="gender" value={gender ?? ""} onChange={handleGenderChange}>
                    <option value={Gender.male}>Male</option>
                    <option value={Gender.female}>Female</option>                           
                </select>
                <InputPhoneNumber label="No. HP" required={true} countryCodeRef={countryCodeRef} phoneNumberRef={phoneNumberRef} />
                <InputPassword type="password" id="kata-sandi" name="Kata Sandi" required={true} ref={passwordRef} />
                <InputPassword type="password" id="konfirmasi-kata-sandi" name="Konfirmasi Kata Sandi" required={true} ref={passwordConfirmationRef} />

                <div className="flex justify-end">
                    <Link to={'#'} className="font-dm-sans font-[400] text-[14px] text-[#333333AD] xl:text-[16px]">Lupa Password?</Link>
                </div>
            </div>

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