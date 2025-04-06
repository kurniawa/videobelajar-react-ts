import { forwardRef } from "react";

interface InputForEditProfileProps {
    label: string,
    ref: React.RefObject<HTMLInputElement> | undefined
}

const InputForEditProfile = forwardRef<HTMLInputElement, InputForEditProfileProps>(({label}, ref) => {
  return (
    <div className="relative group">
        <label htmlFor="" className="absolute font-dm-sans font-[500] text-[14px] bg-white -top-3 left-2 px-1 text-[#333333AD] group-focus-within:text-[#3ECF4C]">{label}</label>
        <input type="text" ref={ref} className="rounded-[10px] border border-[#3A35411F] p-[12px] font-open-sans font-[400] text-[#222325] text-[16px] focus:border-[#3ECF4C] focus:outline-none focus:ring-0 w-full" />
    </div>
  )
})

export default InputForEditProfile;