import LogoVideobelajar from "../atoms/LogoVideobelajar";
import SiteMap from "./SiteMap";

export default function Footer() {
    
    return (
        <footer className="mt-[28px] border-t border-[#3A35411F] p-[20px] xl:py-[60px] xl:px-[120px] bg-white">
            <div className="flex flex-col gap-[16px] xl:flex-row xl:justify-between xl:gap-[0px]">
                {/* Alamat dan Kontak */}
                <section>
                    <LogoVideobelajar className="w-[170px] h-[36px] xl:w-[204px] xl:h-[56px]" />

                    <div className="mt-[16px]">
                        {/* Karena perbedaan font pada saat layar xl dengan layar mobile, jadi salah satu di hide */}
                        <p className="font-open-sans font-[700] text-[14px] xl:hidden">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                        <p className="hidden font-dm-sans font-[700] text-[18px] xl:block">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                        <p className="mt-[8px] font-open-sans font-[400] text-[14px] xl:hidden">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                        <p className="mt-[12px] font-dm-sans font-[400] text-[16px] hidden xl:block">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                        <p className="mt-[8px] font-open-sans font-[400] text-[14px] xl:hidden">+62-877-7123-1234</p>
                        <p className="mt-[12px] font-dm-sans font-[400] text-[16px] hidden xl:block">+62-877-7123-1234</p>
                    </div>
                </section>

                {/* Informasi Halaman */}
                <SiteMap />
                {/* <section>
                    <ul className="flex flex-col gap-[12px] xl:flex-row xl:gap-[48px]">
                        <li className="flex justify-between xl:grid xl:grid-cols-1 xl:gap-[15px]">
                            <div className="font-open-sans text-[#222325] font-[700] text-[16px]">Kategori</div>
                            <ul className="hidden font-dm-sans font-[500] text-[#333333AD] text-[16px] xl:grid xl:grid-cols-1 xl:gap-[15px]">
                                <li>Digital & Teknologi</li>
                                <li>Pemasaran</li>
                                <li>Manajemen Bisnis</li>
                                <li>Pengembangan Diri</li>
                                <li>Desain</li>
                            </ul>
                            <div className="xl:hidden">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                                        fill="#3A3541" fillOpacity="0.54" />
                                </svg>
                            </div>
                        </li>

                        <li className="flex justify-between xl:grid xl:grid-cols-1 xl:gap-[15px]">
                            <div className="font-open-sans text-[#222325] font-[700] text-[16px]">Perusahaan</div>
                            <ul className="hidden font-dm-sans font-[500] text-[#333333AD] text-[16px] xl:grid xl:grid-cols-1 xl:gap-[15px] xl:justify-start">
                                <li>Tentang Kami</li>
                                <li>FAQ</li>
                                <li>Kebijakan Privasi</li>
                                <li>Ketentuan Layanan</li>
                                <li>Bantuan</li>
                            </ul>
                            <div className="xl:hidden">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                                        fill="#3A3541" fillOpacity="0.54" />
                                </svg>
                            </div>
                        </li>

                        <li className="flex justify-between xl:grid xl:grid-cols-1 xl:gap-[15px] xl:content-start">
                            <div className="font-open-sans text-[#222325] font-[700] text-[16px]">Komunitas</div>
                            <ul className="hidden font-dm-sans font-[500] text-[#333333AD] text-[16px] xl:grid xl:grid-cols-1 xl:gap-[15px]">
                                <li>Tips Sukses</li>
                                <li>Blog</li>
                            </ul>
                            <div className="xl:hidden">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                                        fill="#3A3541" fillOpacity="0.54" />
                                </svg>
                            </div>
                        </li>

                    </ul>

                </section> */}
            </div>

            <div className="mt-[16px] w-full h-[1px] border border-[#3A35411F] xl:mt-[63px]"></div>

            {/* Media Sosial */}
            <section className="mt-[16px] flex flex-col gap-[12px] xl:flex-row xl:justify-between xl:items-center">
                <div className="flex gap-[15px] xl:order-2">
                    <svg width="35" height="35" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.35" fillRule="evenodd" clipRule="evenodd"
                            d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                            stroke="#222325" strokeWidth="1.5" />
                        <path
                            d="M22.334 14.6665C23.6601 14.6665 24.9318 15.1933 25.8695 16.131C26.8072 17.0687 27.334 18.3404 27.334 19.6665V25.4998H24.0007V19.6665C24.0007 19.2245 23.8251 18.8006 23.5125 18.488C23.1999 18.1754 22.776 17.9998 22.334 17.9998C21.892 17.9998 21.468 18.1754 21.1555 18.488C20.8429 18.8006 20.6673 19.2245 20.6673 19.6665V25.4998H17.334V19.6665C17.334 18.3404 17.8608 17.0687 18.7985 16.131C19.7361 15.1933 21.0079 14.6665 22.334 14.6665Z"
                            fill="#222325" />
                        <path d="M13.9993 15.5H10.666V25.5H13.9993V15.5Z" fill="#222325" />
                        <path
                            d="M12.3327 12.9998C13.2532 12.9998 13.9993 12.2536 13.9993 11.3332C13.9993 10.4127 13.2532 9.6665 12.3327 9.6665C11.4122 9.6665 10.666 10.4127 10.666 11.3332C10.666 12.2536 11.4122 12.9998 12.3327 12.9998Z"
                            fill="#222325" />
                    </svg>

                    <svg width="35" height="35" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.35" fillRule="evenodd" clipRule="evenodd"
                            d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                            stroke="#222325" strokeWidth="1.5" />
                        <path
                            d="M24.0007 9.6665H21.5007C20.3956 9.6665 19.3358 10.1055 18.5544 10.8869C17.773 11.6683 17.334 12.7281 17.334 13.8332V16.3332H14.834V19.6665H17.334V26.3332H20.6673V19.6665H23.1673L24.0007 16.3332H20.6673V13.8332C20.6673 13.6122 20.7551 13.4002 20.9114 13.2439C21.0677 13.0876 21.2796 12.9998 21.5007 12.9998H24.0007V9.6665Z"
                            fill="#222325" />
                    </svg>

                    <svg width="35" height="35" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.35" fillRule="evenodd" clipRule="evenodd"
                            d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                            stroke="#222325" strokeWidth="1.5" />
                        <path
                            d="M24.0007 9.6665H21.5007C20.3956 9.6665 19.3358 10.1055 18.5544 10.8869C17.773 11.6683 17.334 12.7281 17.334 13.8332V16.3332H14.834V19.6665H17.334V26.3332H20.6673V19.6665H23.1673L24.0007 16.3332H20.6673V13.8332C20.6673 13.6122 20.7551 13.4002 20.9114 13.2439C21.0677 13.0876 21.2796 12.9998 21.5007 12.9998H24.0007V9.6665Z"
                            fill="#222325" />
                    </svg>

                    <svg width="35" height="35" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.35" fillRule="evenodd" clipRule="evenodd"
                            d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                            stroke="#222325" strokeWidth="1.5" />
                        <g clipPath="url(#clip0_11289_348)">
                            <path
                                d="M28.1654 11.5001C27.3674 12.063 26.4838 12.4935 25.5487 12.7751C25.0468 12.198 24.3798 11.789 23.6379 11.6034C22.896 11.4177 22.1149 11.4644 21.4004 11.7371C20.6859 12.0098 20.0724 12.4954 19.6429 13.1282C19.2133 13.7609 18.9884 14.5104 18.9987 15.2751V16.1084C17.5342 16.1464 16.0831 15.8216 14.7745 15.163C13.466 14.5043 12.3406 13.5323 11.4987 12.3334C11.4987 12.3334 8.16536 19.8334 15.6654 23.1667C13.9491 24.3317 11.9047 24.9159 9.83203 24.8334C17.332 29.0001 26.4987 24.8334 26.4987 15.2501C26.4979 15.018 26.4756 14.7864 26.432 14.5584C27.2825 13.7197 27.8827 12.6607 28.1654 11.5001V11.5001Z"
                                stroke="#222325" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_11289_348">
                                <rect width="20" height="20" fill="white" transform="translate(9 9)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="font-dm-sans font-[500] text-[16px] text-[#333333AD] xl:order-1">@2023 Gerobak Sayur All Rights
                    Reserved.</div>
            </section>
        </footer>
    )
}