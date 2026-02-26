import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { DM_Sans } from 'next/font/google';
const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'], // optional but recommended
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golden cup",
  description: "Goldencup jewellery",
  icons: {
    icon: "/logoo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} font-sans`}>
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
</style>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  
        
        `}
      > 
        {children}
        <div className="absolute bottom-10 right-10 py-3 WhatsApp-Icon z-10">
              <Link
                href="https://wa.me/917736206117?text=I%20would%20like%20to%20know%20more%20about%20Products"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center bg-[#00D299] rounded-[50%] h-[60px] md:h-[65px] xl:h-[70px] w-[60px] md:w-[65px] xl:w-[70px] custom-shadow hover:scale-105 transform transition-all duration-300 cursor-pointer">
                  <IoLogoWhatsapp className="text-[40px] md:text-[45px] xl:text-[50px] text-white" />
                </div>
              </Link>
            </div>
      </body>
    </html>
  );
}
