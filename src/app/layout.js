import { Inter } from "next/font/google";
import { DarkThemeToggle, ThemeModeScript } from "flowbite-react";
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
      <body className={`${inter.className} bg-white dark:bg-slate-900`}>
        {children}
        <DarkThemeToggle className="fixed bottom-4 right-4 opacity-15 transition hover:opacity-100"/>
      </body>
    </html>
  );
}