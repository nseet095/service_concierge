import { Inter } from "next/font/google";
import {
  DarkThemeToggle,
  ThemeModeScript,
  Footer,
  Button,
  Label,
  TextInput,
  Textarea
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
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
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Have an enquiry? Want to find out more? Fill out the form below
                and someone will be in touch with you very soon.
              </p>
              {/* TODO: POST to endpoint */}
              <form action="#" className="space-y-8">
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1">
                    <Label
                      htmlFor="email"
                      className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      value="Email Address"
                    />
                    <TextInput
                      type="email"
                      id="email"
                      className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                      placeholder="name@website.com"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <Label
                      htmlFor="phoneNo"
                      className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      value="Phone Number"
                    >
                    </Label>
                    <TextInput
                      type="tel"
                      id="phoneNo"
                      className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                      placeholder="12345678"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1">
                    <Label
                      htmlFor="firstName"
                      className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      value="First Name"
                    />
                    <TextInput
                      type="text"
                      id="firstName"
                      className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <Label
                      htmlFor="lastName"
                      className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      value="Last Name"
                    />
                    <TextInput
                      type="text"
                      id="lastName"
                      className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                      placeholder="Smith"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="subject"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </Label>
                  <TextInput
                    type="text"
                    id="subject"
                    className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </Label>
                  <Textarea
                    id="message"
                    type="text"
                    sizing="lg"
                    rows={4}
                    required
                    className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light resize-none"
                    placeholder="Leave a comment..."
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
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
