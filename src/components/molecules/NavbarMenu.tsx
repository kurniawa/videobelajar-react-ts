import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";

interface NavbarMenuProps {
    options: {label:string, path:string, className:string}[]
    loginUser: {id:string, fullName: string, email: string, countryCode: string, phoneNumber:string,  phoneNumberFull: string, gender: string, role: string, profilePicturePath: string|null} | null,
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({options, loginUser}) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("login_user");
        setLoading(true);
        setTimeout(() => {
            navigate("/");
        }, 1500);
    }

    return (
        <>
            {loading && <LoadingSpinner />}

            {(!loginUser || (loginUser && !loginUser.profilePicturePath)) && (
                <div className="hidden xl:flex xl:gap-[16px]">
                    {options.map((option, index) => {
                        if (option.label === 'Log out') {
                            return (
                                <button type="button" key={index} onClick={handleLogout} className={`font-dm-sans font-[500] text-[16px] px-[26px] py-[10px] rounded-[10px] hover:cursor-pointer ${option.className}`} >{option.label}</button>
                            )
                        } else {
                            return (
                                <Link to={option.path} key={index} className={`font-dm-sans font-[500] text-[16px] px-[26px] py-[10px] rounded-[10px] ${option.className}`} >{option.label}</Link>
                            )
                        }
                    })}
                </div>
            )}

            {(loginUser && loginUser.profilePicturePath) && (
                <div className="hidden xl:flex gap-[16px]">
                    <Link to="/" className="font-dm-sans font-[500] text-[16px] px-[26px] py-[10px] rounded-[10px] font-color-333333AD">Kategori</Link>
                    <div className="flex items-center">
                        <button className="w-[44px] h-[44px] hover:cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                            <img src={loginUser.profilePicturePath} alt="profile-picture" className="w-full h-full rounded-[10px]" />
                        </button>

                        {/* Dropdown Menu */}
                        {menuOpen && (
                            <div className="absolute top-16 right-4 bg-white shadow-lg w-40 flex flex-col border border-[#3A35411F] z-10">
                            {options.map((option, index) => {
                                if (index > 0) {
                                    if (option.label === "Log out") {
                                        return (
                                            <button key={index} onClick={handleLogout}
                                                className={`px-[12px] py-[16px] text-gray-700 border-[#3A35411F] hover:bg-gray-100 text-left hover:cursor-pointer${(index == options.length - 1) ? '' : ' border-b'}`}>
                                                {option.label}
                                            </button>
                                        )
                                    }
                                    return (
                                        <Link
                                        key={index}
                                        to={option.path}
                                        className={`px-[12px] py-[16px] text-gray-700 border-[#3A35411F] hover:bg-gray-100${(index == options.length - 1) ? '' : ' border-b'}`}
                                        onClick={() => setMenuOpen(false)}
                                        >
                                        {option.label}
                                        </Link>
                                    )
                                }
                            })}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default NavbarMenu;