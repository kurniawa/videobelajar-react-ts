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
            const response = await fetch("http://localhost:9000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login berhasil!");
                localStorage.setItem("token", data.token); // ✅ Simpan token JWT
                navigate("/dashboard"); // ✅ Redirect ke halaman setelah login sukses
            } else {
                setError(data.error || "Login gagal. Periksa kembali email dan password Anda.");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Terjadi kesalahan saat menghubungi server.");
        } finally {
            setLoading(false);
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
                <InputPassword type="password" id="kata-sandi" name="Kata Sandi" required={true} ref={passwordRef} />

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