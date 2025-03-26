import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";

interface NavbarMenuProps {
    options: {label:string, path:string, className:string}[]
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({options}) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

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
        </>
    );
}

export default NavbarMenu;