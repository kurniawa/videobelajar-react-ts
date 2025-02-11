interface InputWithLabelProps {
    type: string,
    id: string,
    name: string,
    required: boolean,
}

export default function InputWithLabel({type, id, name, required}:InputWithLabelProps) {
    return (
        <div>
            <label htmlFor={id}>
                <span className="font-dm-sans font-[400] text-[14px] font-color-333333AD xl:text-[16px]">{name}</span>
                {required ?? '<span className="ml-[4px] text-[#FF5C2B;]">*</span>'}
            </label>
            <input type={type} id={id} className="rounded-md px-[10px] py-[4px] w-full h-[48px] border border-[#3A35411F]" />
        </div>
    )
}