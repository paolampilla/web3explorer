import { SearchInput } from "@/app/components/SearchInput";

export const SearchSection = () => {
  return (
    <div className="flex gap-14 items-center text-[#EDEDED] text-[1.5rem] font-semibold tracking-tight flex-col w-full">
      <h2>Search Transaction / Address</h2>
      <SearchInput />
    </div>
  );
};
