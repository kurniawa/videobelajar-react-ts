interface InputPasswordProps {
    type: string,
    id: string,
    name: string,
    required: boolean,
    ref: React.RefObject<HTMLInputElement | null>
}

export default function InputPassword({type, id, name, required, ref}:InputPasswordProps) {
    return (
        <div>
            <label htmlFor={id}>
                <span className="font-dm-sans font-[400] text-[14px] font-color-333333AD xl:text-[16px]">{name}</span>
                {required && <span className="ml-[4px] text-[#FF5C2B]">*</span>}
            </label>
            <div className="relative">
                <input type={type} id={id} ref={ref} className="rounded-md px-[10px] py-[4px] w-full h-[48px] border border-[#3A35411F]" />
                <div className="size-[24px] text-slate-300 absolute right-3 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </div>
            </div>
        </div>
    )
}