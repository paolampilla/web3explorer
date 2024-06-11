import Image from "next/image";
import { GetTokenTransfersJSONResponse } from "@moralisweb3/common-evm-utils";
import Link from "next/link";
import { Link2Icon } from "@radix-ui/react-icons";
import { formatUnits } from "viem";

export const TokenTransfersRow = ({
  txItem,
}: {
  txItem: GetTokenTransfersJSONResponse["result"][0];
}) => {
  return (
    <div className="flex items-center grid gap-4 grid-cols-10 p-3 ring ring-1 bg-[#0A0A0A] ring-[#2c2d2d] rounded rounded-lg text-gray-300">
      <Image
        width={30}
        height={30}
        src={txItem.token_logo ?? ""}
        alt={"token logo"}
      />
      <Link
        className="flex col-span-2 items-center gap-2 flex-row"
        href={`/transaction/${txItem.transaction_hash}`}
      >
        <Link2Icon />
        <div className="hover:underline">
          {txItem.transaction_hash.slice(0, 10) + "..."}
        </div>
      </Link>
      <div className="col-span-2">
        {txItem.from_address.slice(0, 10) + "..."}
      </div>
      <div className="col-span-2">{txItem.to_address.slice(0, 10) + "..."}</div>
      <div className="col-span-2">
        {Number(
          formatUnits(BigInt(txItem.value), Number(txItem.token_decimals)),
        ).toFixed(2)}
      </div>
    </div>
  );
};
