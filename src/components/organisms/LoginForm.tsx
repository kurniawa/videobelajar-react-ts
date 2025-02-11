import InputWithLabel from "../atoms/InputWithLabel"
import InputPassword from "../atoms/InputPassword"

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

            <div className="mt-[20px] xl:mt-[24px]">
                <button className="rounded-[10px] w-full h-[34px] bg-[#3ECF4C]">
                    <span className="font-dm-sans font-[700] text-[14px] text-white xl:text-[16px]">Masuk</span>
                </button>
            </div>

            <div className="mt-[16px]">
                <button className="rounded-[10px] w-full h-[34px] bg-[#E2FCD9CC]">
                    <span className="font-dm-sans font-[700] text-[14px] xl:text-[16px] text-[#3ECF4C]">Daftar</span>
                </button>
            </div>

            <div className="mt-[20px] xl:mt-[24px]">
                <div className="flex justify-center items-center gap-[10px]">
                    <div className="flex-grow-1 h-[1px] bg-[#F1F1F1]"></div>
                    <span className="font-dm-sans font-[400] text-[14px] xl:text-[16px] text-[#4A505C]">atau</span>
                    <div className="flex-grow-1 h-[1px] bg-[#F1F1F1]"></div>
                </div>
            </div>
    
            <div className="mt-[20px] xl:mt-[24px]">
                <button className="w-full rounded-[10px] px-[26px] py-[8px] border border-[#F1F1F1]">
                    <div className="flex items-center justify-center gap-[8px]">
                        <div>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9905 10.426C19.9905 9.58738 19.9224 8.97543 19.7752 8.34082H10.1992V12.1258H15.8201C15.7068 13.0664 15.0948 14.483 13.7349 15.4349L13.7159 15.5616L16.7436 17.9071L16.9534 17.9281C18.8798 16.1489 19.9905 13.5311 19.9905 10.426Z" fill="#4285F4"/>
                                <path d="M10.1992 20.3983C12.953 20.3983 15.2648 19.4917 16.9534 17.9279L13.7349 15.4347C12.8737 16.0353 11.7177 16.4546 10.1992 16.4546C7.50211 16.4546 5.21297 14.6754 4.39695 12.2163L4.27734 12.2265L1.12906 14.6629L1.08789 14.7774C2.76508 18.1091 6.21016 20.3983 10.1992 20.3983Z" fill="#34A853"/>
                                <path d="M4.39695 12.2164C4.18164 11.5818 4.05703 10.9018 4.05703 10.1993C4.05703 9.4966 4.18164 8.81668 4.38562 8.18207L4.37992 8.04691L1.19219 5.57129L1.08789 5.6209C0.396641 7.00348 0 8.55605 0 10.1993C0 11.8425 0.396641 13.395 1.08789 14.7775L4.39695 12.2164Z" fill="#FBBC05"/>
                                <path d="M10.1992 3.94367C12.1144 3.94367 13.4063 4.77094 14.1429 5.46227L17.0213 2.6518C15.2535 1.00859 12.953 0 10.1992 0C6.21016 0 2.76508 2.28914 1.08789 5.62086L4.38563 8.18203C5.21297 5.72289 7.50211 3.94367 10.1992 3.94367Z" fill="#EB4335"/>
                            </svg>
                        </div>
                        <span className="font-dm-sans font-[700] text-[14px] xl:text-[16px] text-[#4A505C;]">
                            Masuk dengan Google
                        </span>
                    </div>
                </button>
            </div>
        </form>
    )
}