import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/navbar";
import Footer from "@/components/Home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeevan Cure",
  description: "Health app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
