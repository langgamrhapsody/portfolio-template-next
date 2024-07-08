import { Montserrat, Raleway } from "next/font/google";

export const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
