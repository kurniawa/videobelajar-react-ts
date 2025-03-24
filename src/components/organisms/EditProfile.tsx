import ButtonDashboard from "../atoms/ButtonDashboard";

interface EditProfileProps {
    type: string,   
}

const EditProfile = ({type}: EditProfileProps) => {
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
    return (
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
                <div className="flex flex-col gap-[24px] p-[24px] border border-[#3A35411F] rounded-[10px] bg-white">

                </div>
            </div>
        </div>
    );
}

export default EditProfile;