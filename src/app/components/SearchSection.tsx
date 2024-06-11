import { SearchInput } from "@/app/components/SearchInput";

export const SearchSection = () => {
  return (
    <div className="flex gap-14 px-12 py-16 bg-[#0A0A0A] mt-20 rounded-xl backdrop-blur-lg border border-[#2c2d2d] items-center text-[1.5rem] font-normal text-white tracking-tight flex-col w-full">
      <h2>Search Transaction / Address</h2>
      <SearchInput />
    </div>
  );
};
