import { Link } from 'react-router-dom';

interface ButtonLime500Props {
    label: string,
    to: string | null
}

export default function ButtonLime500({label, to}:ButtonLime500Props) {
    return (
        <>
            {to ? (
                <Link to={to} className="rounded-[10px] w-full h-[34px] bg-[#3ECF4C] flex items-center justify-center">
                    <span className="font-dm-sans font-[700] text-[14px] text-white xl:text-[16px]">{label}</span>
                </Link>
            ) : (
                <button className="rounded-[10px] w-full h-[34px] bg-[#3ECF4C] hover:cursor-pointer">
                    <span className="font-dm-sans font-[700] text-[14px] text-white xl:text-[16px]">{label}</span>
                </button>
            )}
        </>
    )
}