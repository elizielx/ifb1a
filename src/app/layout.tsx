import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "Universitas Mulia Kelas IFB1A",
  description:
    "Kelas Informatika A (IFB1A) adalah kelas angkatan 2023 yang berada di jurusan Informatika Fakultas Teknik Komputer di Universitas Mulia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
