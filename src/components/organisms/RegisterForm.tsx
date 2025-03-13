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
import bcrypt from "bcryptjs";

export default function RegisterForm() {
    
    const fullNameRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const countryCodeRef = useRef<HTMLSelectElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

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

        const gender = genderRef.current?.value;
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

        
        // Register new user
        try {
            const new_user = {
                fullName: fullName,
                gender: gender,
                email: email,
                password: hashedPassword,
                countryCode: countryCode,
                phoneNumber: phoneNumberRef.current?.value,
            }

            const users = localStorage.getItem("users");
            if (users) {
                const usersArray = JSON.parse(users);
                const isEmailExist = usersArray.find((user:any) => user.email === new_user.email);
                if (isEmailExist) {
                    alert("Email sudah terdaftar");
                    return;
                }
                const usersWithSameCountryCode = usersArray.filter((user:any) => user.countryCode === new_user.countryCode);
                console.log(usersWithSameCountryCode);
                if (usersWithSameCountryCode && usersWithSameCountryCode.length > 0) {
                    const isPhoneNumberExist = usersWithSameCountryCode.find((user:any) => user.phoneNumber === new_user.phoneNumber);
                    if (isPhoneNumberExist) {
                        alert("Nomor HP sudah terdaftar");
                        return;
                    }
                }
                usersArray.push(new_user);
                localStorage.setItem("users", JSON.stringify(usersArray));
            } else {
                localStorage.setItem("users", JSON.stringify([new_user]));
            }

        } catch (error) {
            console.log(error);
        }
        
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
                <SelectWithLabel type="select" id="jenis-kelamin" name="Jenis Kelamin" options={[{value:"female", label:"Wanita"}, {value:"male", label:"Pria"}]} required={true} ref={genderRef} />
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