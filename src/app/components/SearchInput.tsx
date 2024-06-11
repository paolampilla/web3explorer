"use client";
import { SearchButton } from "@/app/components/SearchButton";
import { useState } from "react";

export const SearchInput = () => {
  const [searchHash, setSearchHash] = useState("");

  return (
    <div className="flex flex-row gap-14 items-center text-[#EDEDED] text-[1.5rem] font-semibold tracking-tight w-full">
      <input
        type="text"
        value={searchHash}
        onChange={(e) => setSearchHash(e.target.value)}
        placeholder="Search by Txn Hash / Address"
        className="shadow px-10 shadow-[0px_0px_0px_2px_rgba(255,255,255,0.30)] font-light focus:ring1 focus:ring-white focus:shadow-[0px_0px_0px_3px_rgba(255,255,255,0.30)] w-full h-20 text-[#EDEDED] p-4 rounded rounded-xl bg-[#0A0A0A]"
      />
      <SearchButton searchHash={searchHash} />
    </div>
  );
};
