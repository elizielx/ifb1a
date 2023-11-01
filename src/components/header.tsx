import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="font-sans dark">
      <div
        className="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black dark:text-white transition-bg"
        style={{
          backgroundImage: `url('https://pmb.universitasmulia.ac.id/wp-content/uploads/2021/09/gedung.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="z-10 hidden lg:block absolute bottom-0 pattern-dots pattern-gray-600 pattern-bg-transparent pattern-size-4 pattern-opacity-20 w-48 h-[80vh] left-0"></div>
        <div data-aos="fade-in" className="z-10 flex justify-center">
          <a
            className="inline-flex text-base items-center gap-x2 bg-white border border-gray-200 text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-slate-950 dark:border-slate-700 dark:hover:border-slate-600 dark:text-gray-200"
            href="https://universitasmulia.ac.id/"
          >
            Universitas Mulia
          </a>
        </div>
        <div
          data-aos="fade-in"
          className="z-10 mt-5 max-w-xl text-center mx-auto"
        >
          <h1
            data-aos="fade-in"
            className="font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-200 via-slate-300 to-purple-300 inline-block text-transparent bg-clip-text"
          >
            Informatika A
            <span className="ml-4 bg-white rounded-xl bg-current p-2 text-[0.4em] leading-none align-middle">
              <span className="text-white dark:text-black">IFB1A</span>
            </span>
          </h1>
        </div>
        <div
          data-aos="fade-in"
          className="z-10 mt-5 max-w-3xl text-center mx-auto"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Kelas Informatika A (IFB1A) adalah kelas angkatan 2023 yang berada
            di jurusan Informatika Fakultas Teknik Komputer di Universitas
            Mulia.
          </p>
        </div>
        <div className="z-10 hidden lg:block absolute top-0 pattern-dots pattern-gray-600 pattern-bg-transparent pattern-size-4 pattern-opacity-20 w-48 h-[80vh] right-0"></div>
        <div
          className="absolute z-0 inset-0 bg-gradient-to-r from-slate-950 via-black to-slate-950"
          style={{ opacity: 0.98 }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
