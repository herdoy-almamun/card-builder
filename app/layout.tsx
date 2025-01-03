import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Nav from "./nav";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Business Card Builder",
  description:
    " Design, Customize, and Download Your Perfect Business Card Totally Free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppin.variable}>
        <Theme>
          <Nav />
          <main>{children}</main>
        </Theme>
        <ToastContainer />
      </body>
    </html>
  );
}
