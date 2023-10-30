"use client";
export default function Home() {
  return (
    <main className="font-sans dark">
      <div className="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
        <h1 className="relative flex items-center text-5xl font-bold text-gray-800 dark:text-white dark:opacity-80 transition-colors">
          ifb1a
        </h1>
      </div>
    </main>
  );
}
