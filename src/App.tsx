import CardCourseAll from "./components/organisms/CardCourseAll"
import CourseCategories from "./components/organisms/CourseCategories"
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
                <h2 className="font-poppins text-[#222325] font-[600] text-[24px] xl:text-[32px]">Koleksi Video Pembelajaran Unggulan
                </h2>
                <p className="font-dm-sans text-[#333333AD] font-[500] text-[14px] mt-[10px] xl:text-[16px]">Jelajahi Dunia Pengetahuan
                    Melalui Pilihan Kami!</p>
            </div>

            <section className="mt-[24px]">
              <CourseCategories />
            </section>

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