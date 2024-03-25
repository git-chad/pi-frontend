import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lightweight",
  description: "The greatest benefits for our greatest customers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      </body>
    </html>
  );
}
