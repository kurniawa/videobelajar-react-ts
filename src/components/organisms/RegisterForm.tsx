import { Link } from "react-router-dom";
import InputContactNumber from "../atoms/InputContactNumber";
import InputPassword from "../atoms/InputPassword";
import InputWithLabel from "../atoms/InputWithLabel";
import SelectWithLabel from "../atoms/SelectWithLabel";
import ButtonGoogle from "../atoms/ButtonGoogle";
import ButtonLime500 from "../atoms/ButtonLime500";
import ButtonGreen200 from "../atoms/ButtonGreen200";
import LineHorizontalWithLabel from "../atoms/LineHorizontalWithLabel";

export default function RegisterForm() {
    return (
        <form className="rounded-sm bg-white p-[20px] xl:w-[590px] border border-[#F1F1F1]">
            <div className="text-center">
                <h1 className="font-poppins text-[24px] font-[600] text-[#222325] xl:text-[32px]">Pendaftaran Akun</h1>
                <p className="mt-[10px] font-dm-sans text-[14px] font-[400] text-[#333333AD] xl:text-[16px]">Yuk, daftarkan akunmu sekarang juga!</p>
            </div>

            <div className="mt-[20px] flex flex-col gap-[12px]">
                <InputWithLabel type="text" id="nama-lengkap" name="Nama Lengkap" required={true} />
                <InputWithLabel type="email" id="e-mail" name="E-Mail" required={true} />
                <SelectWithLabel type="select" id="jenis-kelamin" name="Jenis Kelamin" options={[{value:"wanita", label:"Wanita"}, {value:"pria", label:"Pria"}]} required={true} />
                <InputContactNumber label="No. HP" required={true} />
                <InputPassword type="password" id="kata-sandi" name="Kata Sandi" required={true} />
                <InputPassword type="password" id="konfirmasi-kata-sandi" name="Konfirmasi Kata Sandi" required={true} />

                <div className="flex justify-end">
                    <Link to={'#'} className="font-dm-sans font-[400] text-[14px] text-[#333333AD] xl:text-[16px]">Lupa Password?</Link>
                </div>
            </div>

            <div className="space-y-[16px] mt-[20px] xl:mt-[24px]">
                <ButtonLime500 label="Daftar" to={null} />
                <ButtonGreen200 label="Masuk" to='/login' />
            </div>

            <div className="mt-[20px] xl:mt-[24px]">
                <LineHorizontalWithLabel label="atau" />
            </div>
    
            <div className="mt-[20px] xl:mt-[24px]">
                <ButtonGoogle label="Daftar dengan Google" />
            </div>

        </form>
    )
}