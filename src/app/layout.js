import { Inter } from "next/font/google";
import { DarkThemeToggle, ThemeModeScript, Footer } from "flowbite-react";
import {  BsFacebook, BsInstagram, BsTwitterX , BsYoutube } from "react-icons/bs";
import { FaTripadvisor  } from "react-icons/fa";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Service Concierge",
  description: "Concierge for Your Household Needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} bg-slate-100 dark:bg-slate-900`}>
        {children}
        <DarkThemeToggle className="absolute bottom-auto right-4 opacity-15 transition hover:opacity-100 z-10" />
      </body>
      <Footer container className="fixed inset-x-0 bottom-0">
      <div className="w-full sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright by="Service Concierge" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-gray-600 hover:text-gray-300" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-gray-600 hover:text-gray-300" />
            <Footer.Icon href="#" icon={BsTwitterX} className="text-gray-600 hover:text-gray-300" />
            <Footer.Icon href="#" icon={BsYoutube} className="text-gray-600 hover:text-gray-300" />
            <Footer.Icon href="#" icon={FaTripadvisor} className="text-gray-600 hover:text-gray-300" />
          </div>
        </div>
      </Footer>
    </html>
  );
}
