import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";

import "./globals.css";
import AOSWrapper from "./aos";

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
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
