import { RefObject } from "react";
import InputForEditProfile from "./InputForEditProfile";

interface InputPhoneNumberEPProps {
    label: string,
    countryCodeRef: RefObject<HTMLSelectElement | null>,
    phoneNumberRef: RefObject<HTMLInputElement | null>,
}

const InputPhoneNumberEP: React.FC<InputPhoneNumberEPProps> = ({label, countryCodeRef, phoneNumberRef}) => {
    return (
        <div>
            <div className="flex gap-[12px]">
                <div className="flex rounded-md border border-[#3A35411F]">
                    <div className="flex items-center align-center px-[10px] py-[4px] bg-[#F4F5FA]">
                        <div className="flex flex-col w-[24px] h-[24px]">
                            <div className="w-full h-1/2 bg-[#E70011]"></div>
                            <div className="w-full h-1/2 bg-white"></div>
                        </div>
                    </div>
                    <select name="country-code" id="country-code" ref={countryCodeRef} className="rounded-r-md px-[10px] py-[4px] min-w-[70px] h-[48px] text-[#222325]">
                        <option value="62">+62</option>
                    </select>
                </div>
                <InputForEditProfile label={label} ref={phoneNumberRef} />
            </div>
        </div>
    )
}

export default InputPhoneNumberEP;