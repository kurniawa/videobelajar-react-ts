import { Link } from "react-router-dom"

interface ButtonGreen200Props {
    type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    label: string,
    to: string | null
}

export default function ButtonGreen200({type, label, to}:ButtonGreen200Props) {
    return (
        <>
            {to ? (
                <Link to={to} className="rounded-[10px] w-full h-[34px] bg-[#E2FCD9CC] flex items-center justify-center">
                    <span className="font-dm-sans font-[700] text-[14px] xl:text-[16px] text-[#3ECF4C]">{label}</span>
                </Link>
            ) : (
                <button type={type} className="rounded-[10px] w-full h-[34px] bg-[#E2FCD9CC] hover:cursor-pointer">
                    <span className="font-dm-sans font-[700] text-[14px] xl:text-[16px] text-[#3ECF4C]">{label}</span>
                </button>
            )}
        </>
    )
}