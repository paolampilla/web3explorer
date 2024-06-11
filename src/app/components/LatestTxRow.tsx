import { GetBlockJSONResponse } from "@moralisweb3/common-evm-utils";
import Image from "next/image";
import Link from "next/link";
import { Transaction } from "viem";
import { Link2Icon } from "@radix-ui/react-icons";

export const LatestTxRow = ({ tx }: { tx: `0x${string}` | Transaction }) => {
  return (
    <div className="flex flex-row hover:bg-neutral-800 duration-150 transition items-center gap-4 p-3  ring-1 bg-[#0A0A0A] ring-[#2c2d2d]  rounded-lg text-gray-300">
      <Link2Icon width={15} height={15} />
      <Link
        className="hover:bg-neutral-800 duration-150 transition"
        href={`/transaction/${tx}`}
      >
        {tx.toString()}
      </Link>
    </div>
  );
};
