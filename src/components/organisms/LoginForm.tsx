import InputWithLabel from "../atoms/InputWithLabel"
import InputPassword from "../atoms/InputPassword"
import LineHorizontalWithLabel from "../atoms/LineHorizontalWithLabel"
import ButtonGoogle from "../atoms/ButtonGoogle"
import ButtonLime500 from "../atoms/ButtonLime500"
import ButtonGreen200 from "../atoms/ButtonGreen200"

export default function LoginForm() {
    return (
        <form className="rounded-sm bg-white p-[20px] xl:w-[590px] border border-[#F1F1F1]">
            <div className="text-center">
                <h1 className="font-poppins text-[24px] font-[600] text-[#222325] xl:text-[32px]">Masuk ke Akun</h1>
                <p className="mt-[10px] font-dm-sans text-[14px] font-[400] text-[#333333AD] xl:text-[16px]">Yuk, lanjutin belanjamu di videobelajar!</p>
            </div>

            <div className="mt-[20px] flex flex-col gap-[12px]">
                <InputWithLabel type="email" id="email" name="E-Mail" required={true} />
                <InputPassword type="password" id="kata-sandi" name="Kata Sandi" required={true} />

                <div className="flex justify-end">
                    <span className="font-dm-sans font-[500] text-[14px] text-[#333333AD] xl:text-[16px]">Lupa Password?</span>
                </div>
            </div>

            <div className="mt-[20px] xl:mt-[24px] space-y-[16px]">
                <ButtonLime500 label="Masuk" to={null} />
                <ButtonGreen200 label="Daftar" to='/register' />
            </div>

            <div className="mt-[20px] xl:mt-[24px]">
                <LineHorizontalWithLabel label="atau" />
            </div>
    
            <div className="mt-[20px] xl:mt-[24px]">
                <ButtonGoogle label="Masuk dengan Google" />
            </div>
            
        </form>
    )
}