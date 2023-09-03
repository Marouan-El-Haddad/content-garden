import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Menu } from "./Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Content Garden",
  description: "My beautiful content garden",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <nav className="flex items-center space-x-6 p-6 py-4 border-t-4 border-t-sky-500 bg-gray-100">
          <h1 className="font-semibold tracking-tighter text-gray-700">
            Content Garden
          </h1>
          <Menu />
        </nav>
        {children}
      </body>
    </html>
  );
}
