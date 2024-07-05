import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "TheTabTech | Pioneering Technology Solutions for Enhanced Business Performance",
  description:
    "Explore TheTabTech for cutting-edge technology solutions tailored to drive success in your business. From cloud computing and digital health to expert advisory services, we're committed to innovation, collaboration, and excellence. Join us in shaping the future of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <NextUIProvider> */}
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
      {/* </NextUIProvider> */}
    </html>
  );
}
