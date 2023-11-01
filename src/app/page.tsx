"use client";

import Jumbo from "@/components/jumbo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Jumbo />
      <section className="font-sans dark">
        <div className="relative flex flex-col h-[100vh] items-start px-20 justify-center bg-white dark:bg-black transition-bg">
          <div className="flex flex-row">
            <div className="px-4 lg:mr-20 max-w-xl">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                Ketua Kelas
              </h1>
              <p className="text-base text-gray-800 max-w-lg tracking-tight leading-6 dark:text-white dark:opacity-80 transition-colors">
                Kelas Informatika A atau IFB1A diketuai oleh seorang pemimpin
                yang kuat dan adil bernama Dzaki. Seorang pribadi yang
                mendidikasi diri untuk memimpin kelasnya dengan baik dan
                bertanggung jawab. Dzaki juga merupakan seorang yang sangat baik
                dan ramah kepada semua orang.
              </p>
            </div>
            <div className="px-4">
              <div className="grid grid-cols-2 gap-2">
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
      </section>
    </>
  );
}
