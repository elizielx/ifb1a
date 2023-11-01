import React from "react";
import Image from "next/image";

interface AnggotaKelasCardProps {
  nama: string;
  foto: string;
  deskripsi: string;
  isSpan?: boolean;
}

const AnggotaKelasCard: React.FC<AnggotaKelasCardProps> = ({
  nama,
  foto,
  deskripsi,
  isSpan,
}) => {
  console.log(`${nama} - ${isSpan}`);
  return (
    <div
      className={`${
        isSpan ? "lg:col-span-2" : ""
      } border border-slate-700 items-center bg-transparent rounded-lg shadow sm:flex dark:bg-slate-950 dark:border-gray-700`}
    >
      <a href="#">
        <Image
          src={foto}
          className="w-full lg:w-40 object-fill h-52 rounded-lg sm:rounded-none sm:rounded-l-lg"
          width={0}
          height={0}
          sizes="100vw"
          alt={nama}
        />
      </a>
      <div className="p-5">
        <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">{nama}</a>
        </h3>
        <p className="mt-3 mb-4 text-xs font-light text-gray-500 dark:text-gray-400">
          {deskripsi}
        </p>
      </div>
    </div>
  );
};

export default AnggotaKelasCard;
