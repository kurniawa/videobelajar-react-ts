export default function ButtonGreen200({label}:{label:string}) {
    return (
        <button className="rounded-[10px] w-full h-[34px] bg-[#E2FCD9CC]">
            <span className="font-dm-sans font-[700] text-[14px] xl:text-[16px] text-[#3ECF4C]">{label}</span>
        </button>
    )
}