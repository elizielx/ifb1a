import React from "react";
import Image from "next/image";

interface KetuaKelasProps {}

const imageSources = [
  "/Untitled.jpg",
  "https://cdn.discordapp.com/attachments/1133031696560816161/1167339478931734588/20231025_084753.jpg?ex=654dc49b&is=653b4f9b&hm=59572b28395c48c916a82bb5f8714e6e5125fa6d72f489cf6d1413494a4626dd&",
];

const KetuaKelas: React.FC<KetuaKelasProps> = () => {
  return (
    <div className="inset-0 text-white font-sans bg-black">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="z-0 hidden lg:block ml-40 absolute rotate-90 pattern-dots pattern-gray-600 pattern-bg-transparent pattern-size-4 pattern-opacity-20 w-48 h-[80vh] left-0"></div>
        <div className="z-10 md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="mt-5 mb-5 sm:mt-10 lg:mt-0 lg:mb-0">
            <div className="space-y-6 sm:space-y-8">
              <div data-aos="fade-in" className="space-y-2 md:space-y-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-200 via-slate-300 to-purple-300 inline-block text-transparent bg-clip-text">
                  Ketua Kelas
                </h2>
                <p className="text-base text-gray-300 tracking-tight">
                  Kelas Informatika A atau IFB1A diketuai oleh seorang pemimpin
                  yang kuat dan adil bernama Dzaki. Seorang pribadi yang
                  mendidikasi diri untuk memimpin kelasnya dengan baik dan
                  bertanggung jawab. Dzaki juga merupakan seorang yang sangat
                  baik dan ramah kepada semua orang.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-in" className="grid grid-cols-2 gap-2">
            <Image
              src={"/Untitled.jpg"}
              className="ml-auto"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "300px", height: "350px" }}
              alt="avatar"
            />

            <Image
              src={
                "https://cdn.discordapp.com/attachments/1133031696560816161/1167339478931734588/20231025_084753.jpg?ex=654dc49b&is=653b4f9b&hm=59572b28395c48c916a82bb5f8714e6e5125fa6d72f489cf6d1413494a4626dd&"
              }
              className="ml-auto"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "300px", height: "350px" }}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KetuaKelas;
