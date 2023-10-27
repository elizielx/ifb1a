/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="mb-24">
        <div
          className="w-full bg-center bg-cover bg-opacity-50 "
          style={{
            backgroundAttachment: "fixed",
            backgroundImage:
              "url('https://pmb.universitasmulia.ac.id/wp-content/uploads/2021/09/gedung.jpg')",
          }}
        >
          <div className="flex items-center pb-24 justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
            <div className="text-center">
              <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center mt-28">
                  <span className="text-gray-200 font-semibold uppercase tracking-widest">
                    Universitas Mulia
                  </span>
                  <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-extrabold tracking-tight leading-none  text-gray-100">
                    IFB1A
                  </h2>
                  <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                    Mempersembahkan kelas IFB1A, dari program studi Informatika
                    di Universitas Mulia. Ini website yang dibuat untuk
                    memperlihatkan informasi tentang kelas IFB1A.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-white dark:bg-slate-950" data-aos="fade-left">
        <div className="grid max-w-screen-xl px-4 pt-8 pb-10 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:pb-20 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Ketua Kelas
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Ketua kelas yang bertanggung jawab atas kelas IFB1A, seorang
              pribadi yang berdedikasi dan berkomitmen untuk memajukan kelas
              IFB1A, dan juga seorang yang berjiwa pemimpin yang baik.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="https://media.discordapp.net/attachments/1133031696560816161/1167339478931734588/20231025_084753.jpg?ex=654dc49b&is=653b4f9b&hm=59572b28395c48c916a82bb5f8714e6e5125fa6d72f489cf6d1413494a4626dd&=&width=500&height=457"
              width={500}
              height={350}
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900" data-aos="fade-up">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Anggota Kelas
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-500">
              Anggota kelas IFB1A yang berdedikasi dan berkomitmen untuk maju
              bersama kelas IFB1A untuk menjadi kelas yang terbaik.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Orang 1</a>
              </h3>
              <p>Ketua Kelas</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="Helene Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Orang 2</a>
              </h3>
              <p>Programmer Handal</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="Jese Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Orang 3</a>
              </h3>
              <p>Anggota Kelas</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="Jese Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Orang 4</a>
              </h3>
              <p>Matematikawan Handal</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
