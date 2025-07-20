import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
<link rel="icon" href="/favicon.ico" sizes="any" />

export const metadata: Metadata = {
  title: "Alife",
  description: "Alife",
};

const font = Nunito({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
