/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import FooterCard from "./anggota-kelas.card";

const anggota = [
  {
    nama: "Yehezkiel Dio Sinolungan",
    foto: "/anggota_kelas/Yehezkiel_Dio.jpg",
    deskripsi: "Programmer Handal.",
  },
  {
    nama: "Dimas Prayudha",
    foto: "/anggota_kelas/image.png",
    deskripsi: "Wei Shen.",
  },
  {
    nama: "Muhammad Dzaki",
    foto: "/anggota_kelas/Dzaki.jpg",
    deskripsi: "Ketua Kelas.",
  },
];

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="font-sans inset-0 bg-gradient-to-r from-slate-950 via-black to-slate-950 mt-auto w-full  py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">
        <div>
          <a
            className="flex-none text-xl font-semibold text-black dark:text-white"
            href="#"
            aria-label="Brand"
          >
            IFB1A
          </a>
        </div>
        <div className="mt-3">
          <p className="text-gray-500">© elizielx 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
