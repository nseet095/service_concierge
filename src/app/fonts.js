import { Jura } from "next/font/google";
import { Lato } from "next/font/google";

export const jura = Jura({
  subsets: ["latin"],
  display: "swap"
});

export const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '300', '400', '700', '900']
});