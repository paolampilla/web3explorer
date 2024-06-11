import { SearchInput } from "@/app/components/SearchInput";

export const SearchSection = () => {
  return (
    <div className="flex gap-14 px-12 py-16 bg-neutral-800 bg-opacity-30 mt-40 rounded rounded-xl backdrop-blur-lg shadow-[0px_0px_0px_1px_rgba(255,255,255,0.10)]  items-center text-[#EDEDED] text-[1.5rem] font-semibold tracking-tight flex-col w-full">
      <h2>Search Transaction / Address</h2>
      <SearchInput />
    </div>
  );
};
