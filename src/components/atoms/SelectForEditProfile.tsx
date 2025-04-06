import { forwardRef } from "react"

interface SelectForEditProfileProps {
    label: string,
    options: {value:string, label:string}[]
}

// enum Gender {
//     male, female
// }

const SelectForEditProfile = forwardRef<HTMLSelectElement, SelectForEditProfileProps>(({label, options}, ref) => {
    return (
        <div className="relative group">
            <label className="absolute font-dm-sans font-[500] text-[14px] bg-white -top-3 left-2 px-1 text-[#333333AD] group-focus-within:text-[#3ECF4C]">{label}</label>
            <label className="flex justify-between items-center rounded-[10px] border border-[#3A35411F] group-focus-within:border-[#3ECF4C] after:pointer-events-none after:content-around">
                <select ref={ref} className="p-[12px] font-open-sans font-[400] text-[#222325] text-[16px] focus:outline-none focus:ring-0 w-full select-custom-arrow">
                    {options.map((option, index) => (<option value={option.value} key={index}>{option.label}</option>))}
                </select>
            </label>
        </div>
    )
})

export default SelectForEditProfile;