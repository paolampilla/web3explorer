"use client";
import Image from "next/image";
import { useEffect } from "react";
import Moralis from "moralis";
import { getTopTokens } from "@/utils/getTopTokens";
import { TopTokensList } from "@/app/components/TopTokensList";
import { SearchSection } from "@/app/components/SearchSection";
import { TopTokensSection } from "@/app/components/TopTokensSection";

export default function Home() {
  useEffect(() => {
    (async () => {
      try {
        await Moralis.start({
          apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
        });
        console.log(await getTopTokens());
      } catch (error) {
        console.error("Error initializing Moralis", error);
      }
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-[100vw] gap-8 items-center flex-col justify-between font-mono text-sm lg:flex">
        <div className="grid-cols-2 flex align-middle justify-center items-center grid">
          <TopTokensSection />
          <TopTokensSection />
        </div>
      </div>
    </main>
  );
}
