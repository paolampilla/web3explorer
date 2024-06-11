"use client";
import { SearchButton } from "@/app/components/SearchButton";
import { useState } from "react";

export const SearchInput = () => {
  const [searchHash, setSearchHash] = useState("");

  return (
    <div className="flex rounded-xl shadow-[0px_0px_0px_1px_rgba(255,255,255,0.14)] flex-row bg-[#0A0A0A] items-center text-[#EDEDED] text-[1.5rem] font-semibold tracking-tight w-[90%]">
      <input
        type="text"
        value={searchHash}
        onChange={(e) => setSearchHash(e.target.value)}
        placeholder="Search by Txn Hash / Address"
        className="px-10 focus:outline-none font-light  bg-[#0A0A0A] bg-opacity-30 w-full h-20 text-neutral-400 p-4 rounded rounded-xl"
      />
      <SearchButton searchHash={searchHash} />
    </div>
  );
};
