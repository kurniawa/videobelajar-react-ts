import InputWithLabel from "../atoms/InputWithLabel"
import InputPassword from "../atoms/InputPassword"
import LineHorizontalWithLabel from "../atoms/LineHorizontalWithLabel"
import ButtonGoogle from "../atoms/ButtonGoogle"
import ButtonLime500 from "../atoms/ButtonLime500"
import ButtonGreen200 from "../atoms/ButtonGreen200"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import LoadingSpinner from "../molecules/LoadingSpinner"
import ValidationFeedback from "../atoms/ValidationFeedback"
import axios from "axios"

export default function LoginForm() {

    const navigate = useNavigate(); // ✅ Untuk redirect setelah login sukses
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!email || !password) {
            setError("Email dan password wajib diisi!");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(`https://67c565bec4649b9551b67dc8.mockapi.io/api/v1/users?email=${email}`);

            if (response.data.length === 0) {
                throw new Error("User tidak ditemukan. Periksa kembali email Anda.");
            }
    
            const user = response.data[0];
    
            // Cek apakah password cocok (Sementara ini password dicek di frontend)
            if (user.password !== password) {
                throw new Error("Password salah. Coba lagi.");
            }
    
            // Simpan informasi user di localStorage (Mock JWT)
            const login_user = (({password, ...obj}) => obj)(user);

            // console.log("Login User:", login_user);

            // throw new Error("Cek password berhasil!");

            localStorage.setItem("login_user", JSON.stringify(login_user));
            
            setSuccess("Login berhasil!");

        } catch (err:any) {
            setError(err.message || "Terjadi kesalahan saat login.");
        } finally {
            setTimeout(() => {
                setLoading(false);
                navigate("/dashboard");
            }, 1500);
        }
    };

    return (
        <form onSubmit={handleLogin} className="rounded-sm bg-white p-[20px] xl:w-[590px] border border-[#F1F1F1]">
            {loading && <LoadingSpinner />}

            <div className="text-center">
                <h1 className="font-poppins text-[24px] font-[600] text-[#222325] xl:text-[32px]">Masuk ke Akun</h1>
                <p className="mt-[10px] font-dm-sans text-[14px] font-[400] text-[#333333AD] xl:text-[16px]">Yuk, lanjutin belanjamu di videobelajar!</p>
            </div>

            <div className="mt-[20px] flex flex-col gap-[12px]">
                <InputWithLabel type="email" id="email" name="E-Mail" required={true} ref={emailRef} />
                <InputPassword id="kata-sandi" name="Kata Sandi" required={true} ref={passwordRef} />

                <div className="flex justify-end">
                    <span className="font-dm-sans font-[500] text-[14px] text-[#333333AD] xl:text-[16px]">Lupa Password?</span>
                </div>
            </div>

            {error && <ValidationFeedback type="error" message={error} />}
            {success && <ValidationFeedback type="success" message={success} />}

            <div className="mt-[20px] xl:mt-[24px] space-y-[16px]">
                <ButtonLime500 type="submit" label="Masuk" to={null} />
                <ButtonGreen200 type="button" label="Daftar" to='/register' />
            </div>

            <div className="mt-[20px] xl:mt-[24px]">
                <LineHorizontalWithLabel label="atau" />
            </div>
    
            <div className="mt-[20px] xl:mt-[24px]">
                <ButtonGoogle type="button" label="Masuk dengan Google" />
            </div>
            
        </form>
    )
}