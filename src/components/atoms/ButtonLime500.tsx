export default function ButtonLime500({label}:{label:string}) {
    return (
        <button className="rounded-[10px] w-full h-[34px] bg-[#3ECF4C]">
            <span className="font-dm-sans font-[700] text-[14px] text-white xl:text-[16px]">{label}</span>
        </button>
    )
}