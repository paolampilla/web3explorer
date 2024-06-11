import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { SearchSection } from "@/app/components/SearchSection";

export const metadata: Metadata = {
  title: "Web3 Blockexplorer",
  description: "blockchain block explorer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gradient-to-br from-neutral-900 to-neutral-950">
        <div className="flex flex-col align-middle justify-center w-[85%] mx-auto h-64">
          <SearchSection />
        </div>
        {children}
      </body>
    </html>
  );
}
