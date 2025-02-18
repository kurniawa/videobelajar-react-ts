import CardCourseAll from "./components/organisms/CardCourseAll"
import Footer from "./components/organisms/Footer"
import Newsletter from "./components/organisms/Newsletter"
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <MainLayout>
      <main className="px-[20px] py-[28px] xl:px[120px] xl:py-[64px]">
        <section className="px-[20px] py-[64px] bg-black rounded-[10px] xl:pt-[82px] pb-[64px] xl:px-[140px]">
            <div className="text-center">
                <p className="text-white font-poppins font-[700] text-[24px] xl:text-[48px]">
                    Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                </p>
            </div>
            <div className="mt-[12px] text-center">
                <p className="text-white font-dm-sans font-[500] text-[14px] xl:text-[16px]">
                    Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
                    Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan
                    pemahaman Anda.
                </p>
            </div>
            <div className="mt-[24px] text-center">
                <button
                    className="w-full rounded-[10px] bg-[#3ECF4C] py-[10px] text-white font-dm-sans font-[400] text-[14px] max-w-[369px]">
                    Temukan Video Course untuk Dipelajari!
                </button>
            </div>
        </section>

        <section className="mt-[24px]">
            <div>
                <h2 className="font-poppins font-color-222325 font-[600] text-[24px] xl:text-[32px]">Koleksi Video Pembelajaran Unggulan
                </h2>
                <p className="font-dm-sans font-color-333333AD font-[500] text-[14px] mt-[10px] xl:text-[16px]">Jelajahi Dunia Pengetahuan
                    Melalui Pilihan Kami!</p>
            </div>

            <div className="mt-[24px]">
                <ul className="flex font-dm-sans text-[14px] font-[500] overflow-x-hidden whitespace-nowrap">
                    <li className="py-[12px] pr-[36px] h-[60px] flex flex-col justify-between">
                        <div className="font-dm-sans text-[14px] font-[500] font-color-F64920 xl:text-[16px]">Semua Kelas</div>
                        <div className="underline"></div>
                    </li>
                    <li className="font-dm-sans text-[14px] font-[500] font-color-333333AD py-[12px] pr-[36px] h-[60px] xl:text-[16px]">Pemasaran</li>
                    <li className="font-dm-sans text-[14px] font-[500] font-color-333333AD py-[12px] pr-[36px] h-[60px] xl:text-[16px]">Desain</li>
                    <li className="font-dm-sans text-[14px] font-[500] font-color-333333AD py-[12px] pr-[36px] h-[60px] xl:text-[16px]">Pengembangan Diri</li>
                    <li className="font-dm-sans text-[14px] font-[500] font-color-333333AD py-[12px] pr-[36px] h-[60px] xl:text-[16px]">Bisnis</li>
                </ul>
            </div>

            <div className="flex flex-col gap-[20px] mt-[24px] xl:grid xl:grid-cols-3 xl:gap-[24px]">
              <CardCourseAll />
            </div>
        </section>

        <section id="newsletter" className="mt-[52px] flex justify-center items-center">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </MainLayout>
  )
}

export default App

// <div>
//   <a href="https://vite.dev" target="_blank">
//     <img src={viteLogo} classNameName="logo" alt="Vite logo" />
//   </a>
//   <a href="https://react.dev" target="_blank">
//     <img src={reactLogo} classNameName="logo react" alt="React logo" />
//   </a>
// </div>
// <h1>Vite + React</h1>
// <div classNameName="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.tsx</code> and save to test HMR
//   </p>
// </div>
// <p classNameName="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>