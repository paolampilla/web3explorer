import { EvmMarketDataERC20TokenItemJSON } from "@moralisweb3/common-evm-utils";
import Image from "next/image";
import Link from "next/link";

export const TopTokensRow = ({
  topToken,
}: {
  topToken: EvmMarketDataERC20TokenItemJSON;
}) => {
  return (
    <Link href={`/token/${topToken.contract_address}`}>
      <div className="flex items-center grid gap-4 grid-cols-6 p-3 hover:bg-neutral-800 duration-150 transition ring ring-1 bg-[#0A0A0A] ring-[#2c2d2d] rounded rounded-lg text-gray-300">
        <Image
          width={30}
          height={30}
          src={topToken.token_logo}
          alt={"token logo"}
          className=""
        />
        <div>{topToken.token_symbol}</div>
        <div className="col-start-3 col-end-5">{topToken.token_name}</div>
        <div>${Number(topToken.price_usd).toFixed(2)}</div>
        <div>{Number(topToken.price_24h_percent_change).toFixed(2)} %</div>
      </div>
    </Link>
  );
};
