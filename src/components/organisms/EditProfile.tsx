import { useEffect, useRef, useState } from "react";
import ButtonDashboard from "../atoms/ButtonDashboard";
import InputForEditProfile from "../atoms/InputForEditProfile";
import InputPhoneNumberEP from "../atoms/InputPhoneNumberEP";
import LineHorizontal from "../atoms/LineHorizontal";
import SelectForEditProfile from "../atoms/SelectForEditProfile";
import ButtonLime500 from "../atoms/ButtonLime500";
import Footer from "./Footer";
import InputPasswordEP from "../atoms/InputPasswordEP";
import { v4 as uuidv4 } from "uuid"; // Install dulu: npm install uuid

interface EditProfileProps {
    type: string,
    loginUser: {id:string, fullName: string, email: string, phoneNumberFull: string, gender: string, role: string, profilePicture: string|null},   
}

const EditProfile = ({type, loginUser}: EditProfileProps) => {
    let arrayButtonDashboard = [
        {
            active: type === "PROFILE" ? true : false,
            label: "Profil Saya"
        },
        {
            active: type === "MY-CLASS" ? true : false,
            label: "Kelas Saya"
        },
        {
            active: type === "MY-ORDER" ? true : false,
            label: "Pesanan Saya"
        }
    ]

    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const countryCodeRef = useRef<HTMLSelectElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    
    const profilePictureRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (fullNameRef.current) {
          fullNameRef.current.value = loginUser.fullName; // Set nilai input
        }
    }, [loginUser]); // Jalankan setiap kali loginUser berubah

    const [profilePicture, setProfilePicture] = useState(loginUser.profilePicture || "default-avatar.jpg");

    useEffect(() => {
        // Load data dari localStorage jika ada
        const storedUser = localStorage.getItem("login_user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setProfilePicture(parsedUser.profilePicture || "default-avatar.jpg");
        }
    }, []);

    const handleEditProfile = () => {}

    const handleEditProfilePicture = async () => {
        if (!profilePictureRef.current?.files?.[0]) {
            alert("Pilih gambar terlebih dahulu!");
            return;
        }

        const file = profilePictureRef.current.files[0];
        const formData = new FormData();

        // Buat nama unik dengan timestamp + UUID
        const uniqueFilename = `profile_${Date.now()}_${uuidv4()}`;

        formData.append("file", file);
        formData.append("upload_preset", "your_upload_preset");
        formData.append("public_id", uniqueFilename); // Set nama unik

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/devktt8mf/image/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            console.log("URL Gambar Baru:", data.secure_url);

            // Update profile picture di state
            setProfilePicture(data.secure_url);

            // Update localStorage
            const updatedUser = { ...loginUser, profilePicture: data.secure_url };
            localStorage.setItem("login_user", JSON.stringify(updatedUser));

            // Update MockAPI
            await fetch(`https://67c565bec4649b9551b67dc8.mockapi.io/api/v1/users/${loginUser.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ profilePicture: data.secure_url }),
            });

            alert("Foto profil berhasil diperbarui!");
        } catch (error) {
            console.error("Upload gagal:", error);
            alert("Gagal mengunggah gambar!");
        }
    };

// Tampilkan gambar:




    return (
        <div className="flex flex-col gap-[24px]">
            <form onSubmit={handleEditProfile} className="flex flex-col gap-[24px] px-[20px] py-[28px] xl:py-[64px] xl:px-[120px]">
                <div className="w-full">
                    <div>
                        <h1 className="font-poppins font-[600] text-[20px]">Ubah Profil</h1>
                        <h2 className="font-dm-sans font-[400] text-[16px] mt-[10px]">Ubah data diri Anda</h2>
                    </div>
                    <div className="mt-[24px] border border-[#3A35411F] rounded-[10px] p-[20px] bg-white xl:p-[24px]">
                        <div className="flex flex-col gap-[8px]">
                            {arrayButtonDashboard.map((item, index) => (
                                <ButtonDashboard key={index} active={item.active} label={item.label} />
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="border border-[#3A35411F] rounded-[10px] bg-white p-[24px] flex flex-col gap-[24px]">
                    <div className="flex gap-[14px]">
                        {/* Foto Profil */}
                        <div>
                            {profilePicture && <img src={profilePicture} alt="Profile" className="w-20 h-20 rounded-full" />}
                        </div>

                        <div>
                            <div className="font-poppins font-[600] text-[16px] text-[#222325]">{loginUser.fullName}</div>
                            <div className="font-dm-sans font-[400] text-[16px] text-[#222325]">{loginUser.email}</div>
                            <label htmlFor="change-profile-picture" className="font-poppins font-[700] text-[14px] text-[#F64920] hover:cursor-pointer">
                                Ganti Foto Profil
                            </label>
                            <input type="file" name="" id="change-profile-picture" className="hidden" ref={profilePictureRef} onChange={handleEditProfilePicture} />
                        </div>
                    </div>

                    <LineHorizontal />

                    <div className="flex flex-col gap-[16px] mt-2">
                        <InputForEditProfile label="Nama Lengkap" ref={fullNameRef} />
                        <InputForEditProfile label="E-Mail" ref={emailRef} />
                        <SelectForEditProfile label="Jenis Kelamin" ref={genderRef} options={[{value: "Female", label: "Wanita"}, {value: "Male", label: "Pria"}]} />
                        <InputPhoneNumberEP label="No. Hp" countryCodeRef={countryCodeRef} phoneNumberRef={phoneNumberRef} />
                        <InputPasswordEP label="Password" ref={passwordRef} />
                        <InputPasswordEP label="Konfirmasi Password" ref={passwordConfirmationRef} />
                    </div>
                    <ButtonLime500 label="Simpan" type="submit" to={null} />
                </div>

            </form>

            <Footer />
        </div>
    );
}

export default EditProfile;