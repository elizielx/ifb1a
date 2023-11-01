"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import KetuaKelas from "@/components/ketua-kelas";
import Header from "@/components/header";
import AnggotaKelas from "@/components/anggota-kelas";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <div className="py-14 relative inset-0 bg-black border-t-2 border-t-slate-700"></div>
      <KetuaKelas />
      <div className="py-14 relative inset-0 bg-black border-b-2 border-b-slate-700"></div>
      <AnggotaKelas />
      <Footer />
    </>
  );
}
