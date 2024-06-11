import { EvmMarketDataERC20TokenItemJSON } from "@moralisweb3/common-evm-utils";
import Image from "next/image";

export const TopTokensRow = ({
  topToken,
}: {
  topToken: EvmMarketDataERC20TokenItemJSON;
}) => {
  return (
    <div className="flex items-center grid gap-4 grid-cols-5 p-3 bg-slate-700 shadow-[inset_0px_1px_0px_0_rgba(255,255,255,0.10)] rounded rounded-lg text-gray-300">
      <Image
        width={30}
        height={30}
        src={topToken.token_logo}
        alt={"token logo"}
        className=""
      />
      <div>{topToken.token_symbol}</div>
      <div>{topToken.token_name}</div>
      <div>${topToken.price_usd}</div>
      <div>{topToken.price_24h_percent_change} %</div>
    </div>
  );
};
