import { TopTokensList } from "@/app/components/TopTokensList";

export const TopTokensSection = () => {
  return (
    <div className="flex bg-[#0A0A0A] w-full backdrop-blur-lg relative rounded rounded-xl shadow-[0px_0px_0px_1px_rgba(255,255,255,0.20)] mx-auto flex-col">
      <div className="backdrop-blur-lg backdrop-blur-lg  p-7 rounded rounded-xl">
        <h2 className="font-medium text-[1rem] text-white">
          Top Tokens by Market Cap
        </h2>
      </div>
      <div className="grid text-sm grid-cols-6 flex px-10 py-3 text-neutral-400 backdrop-blur-lg border-y border-y-[#2c2d2d]  gap-4 bg-[#000] items-center shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)]">
        <h3>Logo</h3>
        <h3>Symbol</h3>
        <h3 className="col-start-3 col-end-5">Name</h3>
        <h3>Price</h3>
        <h3>24hr Change</h3>
      </div>
      <TopTokensList />
    </div>
  );
};
