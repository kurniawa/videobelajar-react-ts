import { Link } from "react-router-dom";
// import profile_picture from "../assets/images/profile-picture.png"
// import { useState } from "react";
import HamburgerMenu from "../molecules/HamburgerMenu";
import LogoVideobelajar from "../atoms/LogoVideobelajar";


export default function Navbar() {
    return (
      <nav className="flex bg-white h-[74px] py-[16px] px-[24px] justify-between items-center xl:gap-[36px] border-t border-b border-[#F1F1F1] shadow-lg shadow-[rgba(62,67,74,0.15)]">
        <div className="flex flex-grow-1 justify-between items-center">
            <LogoVideobelajar className="w-[145px] h-[23px] xl:w-[194px] xl:h-[31px]" />
        </div>

        <div className="hidden xl:flex xl:gap-[16px]">
          <Link to={"/"} className="font-dm-sans font-[500] text-[16px] px-[26px] py-[10px] font-color-333333AD">Kategori</Link>
          <Link to={"/login"} className="font-dm-sans font-[500] text-[16px] px-[26px] py-[10px] rounded-[10px] bg-[#3ECF4C] text-white">Login</Link>
          <Link to={"/register"} className="font-dm-sans font-[500] text-[16px] px-[26px] py-[10px] rounded-[10px] border border-[#3ECF4C] text-[#3ECF4C]">Register</Link>
        </div>
        
        {/* Hamburger Menu untuk layar kecil */}

        <div className="xl:hidden">
          <HamburgerMenu className="w-[24px] h-[24px] text-[#4A505C]"
            options={[
              { label: "Kategori", path: "/" },
              { label: "Login", path: "/login" },
              { label: "Register", path: "/register" },
            ]}>

          </HamburgerMenu>
        </div>
        {/* <div className="w-[24px] h-[24px] xl:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div> */}
    </nav>
    );
  }
  