import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dragon Hacks 2024",
  description: "Powered by Drexel IEEE Student Chapter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta http-equiv="refresh" content="0;URL='https://dragonhacks.org/'" />   
      <body className={inter.className}>{children}</body>
    </html>
  );
}
