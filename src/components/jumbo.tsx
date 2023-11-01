"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {}

const Jumbo: React.FC<Props> = () => {
  return (
    <main className="font-sans dark">
      <div className="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
        <h1 className="relative flex items-center text-5xl font-bold text-gray-800 dark:text-white dark:opacity-80 transition-colors">
          ifb1a
        </h1>
        <p className="relative items-center text-4xl text-gray-800 dark:text-white dark:opacity-80 transition-colors">
          Universitas Mulia
        </p>
      </div>
    </main>
  );
};

export default Jumbo;
