import { TokenTransfersList } from "@/app/token/TokenTransfersList";

export default function TokenTransfersSection({
  address,
}: {
  address: string;
}) {
  return (
    <div className="flex mt-10 bg-[#0A0A0A] w-full backdrop-blur-lg relative rounded rounded-xl shadow-[0px_0px_0px_1px_rgba(255,255,255,0.20)] mx-auto flex-col">
      <div className="backdrop-blur-lg backdrop-blur-lg  p-7 rounded rounded-xl">
        <h2 className="font-medium text-[1rem] text-white">
          Last 20 Token Transfers
        </h2>
      </div>
      <div className="grid text-sm grid-cols-10 flex px-10 py-3 text-neutral-400 backdrop-blur-lg border-y border-y-[#2c2d2d]  gap-4 bg-[#000] items-center shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)]">
        <h3>Logo</h3>
        <h3 className="col-span-2">Tx Hash</h3>
        <h3 className="col-span-2">From Address</h3>
        <h3 className="col-span-2">To Address</h3>
        <h3 className="col-span-2">Value</h3>
      </div>
      <TokenTransfersList addressHash={address} />
    </div>
  );
}
