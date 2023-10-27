import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import AOSWrapper from "./aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Universitas Mulia IFB1A",
  description: "Universitas Mulia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
