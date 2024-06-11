import { TopTokensList } from "@/app/components/TopTokensList";

export const TopTokensSection = () => {
  return (
    <div className="flex bg-opacity-0 w-fit backdrop-blur-lg max-w-[88%] relative border-b-0 rounded rounded-xl mx-auto flex-col">
      <div className="bg-slate-800/50 backdrop-contrast-200 backdrop-blur-lg bg-opacity-0 shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)] shadow backdrop-blur-lg  p-8 rounded rounded-t-xl">
        <h2 className="font-medium text-[1rem] text-white">
          Top Tokens by Market Cap
        </h2>
      </div>
      <div className="grid bg-[#1e293b] bg-opacity-85 font-semibold grid-cols-5 flex px-10 py-3 backdrop-blur-lg gap-4 items-center shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)]">
        <h3></h3>
        <h3 className="">Symbol</h3>
        <h3>Name</h3>
        <h3>Price</h3>
        <h3>24hr Change</h3>
      </div>
      <TopTokensList />
    </div>
  );
};
