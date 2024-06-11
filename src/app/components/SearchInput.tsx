"use client";
import { SearchButton } from "@/app/components/SearchButton";
import { useState } from "react";

export const SearchInput = () => {
  const [searchHash, setSearchHash] = useState("");

  return (
    <div className="flex rounded rounded-xl shadow-[0px_0px_0px_2px_rgba(255,255,255,0.30)] flex-row bg-neutral-950 items-center text-[#EDEDED] text-[1.5rem] font-semibold tracking-tight w-[90%]">
      <input
        type="text"
        value={searchHash}
        onChange={(e) => setSearchHash(e.target.value)}
        placeholder="Search by Txn Hash / Address"
        className="px-10 font-light bg-neutral-800 bg-opacity-30 w-full h-20 text-[#EDEDED] p-4 rounded rounded-xl"
      />
      <SearchButton searchHash={searchHash} />
    </div>
  );
};
