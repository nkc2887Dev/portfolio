import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Nav from "@/modules/root/layouts/Nav";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio | Nareshh Chudasama",
  description: "Portfolio | Nareshh Chudasama",
  icons: {
    icon: "/assets/images/nc.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${publicSans.variable}`}
      >
        <main className="md:flex md:w-full">
          <Nav />
          <div className="flex-1 overflow-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
