import { Inter } from "next/font/google";
import {
  DarkThemeToggle,
  ThemeModeScript,
  Footer,
} from "flowbite-react";

import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

import ContactForm from "@/components/contactForm";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Only @",
  description: "Concierge for Your Household Needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} bg-slate-100 dark:bg-slate-800`}>
        {children}
        <DarkThemeToggle className="fixed bottom-32 right-4 opacity-15 transition hover:opacity-100 z-10" />

        <Footer container className="bg-gray-300 dark:bg-slate-900 flex-col">
          <section>
            <ContactForm />
          </section>

          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="Only @" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://facebook.com/"
                icon={BsFacebook}
                className="text-gray-600 hover:text-gray-300"
              />
              <Footer.Icon
                href="https://instagram.com"
                icon={BsInstagram}
                className="text-gray-600 hover:text-gray-300"
              />
              <Footer.Icon
                href="https://twitter.com"
                icon={BsTwitterX}
                className="text-gray-600 hover:text-gray-300"
              />
              <Footer.Icon
                href="https://youtube.com"
                icon={BsYoutube}
                className="text-gray-600 hover:text-gray-300"
              />
              <Footer.Icon
                href="https://tripadvisor.com.sg"
                icon={FaTripadvisor}
                className="text-gray-600 hover:text-gray-300"
              />
            </div>
          </div>
        </Footer>
      </body>
    </html>
  );
}
