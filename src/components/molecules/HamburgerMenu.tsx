import { useState } from "react";
import { Link } from "react-router-dom";

interface HamburgerMenuProps {
    className: string,
    options: {label:string, path:string}[]
}

export default function HamburgerMenu({className, options}:HamburgerMenuProps) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <button className={className} onClick={() => setMenuOpen(!menuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-16 right-4 bg-white shadow-lg w-40 flex flex-col border border-[#3A35411F]">
                {options.map((option, index) => (
                    <Link
                    key={index}
                    to={option.path}
                    className={`px-[12px] py-[16px] text-gray-700 border-[#3A35411F] hover:bg-gray-100 ${(index == options.length - 1) ? '' : 'border-b'}`}
                    onClick={() => setMenuOpen(false)}
                    >
                    {option.label}
                    </Link>
                ))}
                </div>
            )}
        </>
    )
} 