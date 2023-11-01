/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import AnggotaKelasCard from "./anggota-kelas.card";

const anggota = [
  {
    nama: "Yehezkiel Dio Sinolungan",
    foto: "/anggota_kelas/Yehezkiel_Dio.jpg",
    deskripsi: "Programmer Handal.",
    isSpan: false,
  },
  {
    nama: "Dimas Prayudha",
    foto: "/anggota_kelas/Dimas_WeiShen.png",
    deskripsi: "Wei Shen.",
    isSpan: false,
  },
  {
    nama: "Said Samman A.H",
    foto: "/anggota_kelas/Said.jpg",
    deskripsi: "Pendukung Palestina. 🇵🇸",
    isSpan: false,
  },
  {
    nama: "Muhammad Dzaki Darussalam",
    foto: "/anggota_kelas/Dzaki.jpg",
    deskripsi: "Ketua Kelas.",
    isSpan: false,
  },
  {
    nama: "Rafih Sanjaya",
    foto: "/anggota_kelas/RafihSanjaya.jpg",
    deskripsi: "Terobsesi dengan Gundam dan selalu bersama ketua kelas.",
    isSpan: true,
  },
  {
    nama: "Muhammad Asmaul Adam",
    foto: "/anggota_kelas/Adam.jpg",
    deskripsi: "Pengambar Handal.",
    isSpan: false,
  },
];

interface AnggotaKelasProps {}

const AnggotaKelas: React.FC<AnggotaKelasProps> = () => {
  return (
    <div className="py-14 font-sans inset-0 bg-gradient-to-r from-slate-950 via-black to-slate-950">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div
          data-aos="fade-in"
          className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold bg-gradient-to-r from-slate-200 via-slate-300 to-purple-300 inline-block text-transparent bg-clip-text">
            Anggota Kelas
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Kelas IFB1A terdiri dari 40 orang mahasiswa.
          </p>
        </div>
        <div
          data-aos="fade-in"
          className="grid gap-4 mb-6 lg:mb-16 md:grid-cols-3"
        >
          {anggota.map((anggota) => (
            <AnggotaKelasCard
              nama={anggota.nama}
              foto={anggota.foto}
              deskripsi={anggota.deskripsi}
              isSpan={anggota.isSpan}
              key={anggota.nama}
            />
          ))}
        </div>
        <p
          data-aos="fade-in"
          className="text-center font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-300"
        >
          Tidak ada nama mu? Silahkan hubungi dio untuk menambahkan nama mu.
        </p>
      </div>
    </div>
  );
};

export default AnggotaKelas;
