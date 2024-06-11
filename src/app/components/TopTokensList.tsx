import { useEffect, useState } from "react";
import { getTopTokens } from "@/utils/getTopTokens";
import { GetTopERC20TokensByMarketCapOperationResponseJSON } from "@moralisweb3/common-evm-utils";
import { TopTokensRow } from "@/app/components/TopTokensRow";

export const TopTokensList = () => {
  const [tokenList, setTokenList] = useState<
    GetTopERC20TokensByMarketCapOperationResponseJSON | undefined
  >();

  useEffect(() => {
    (async () => {
      try {
        const topTokens = await getTopTokens();
        setTokenList(topTokens);
      } catch (error) {
        console.error("Error getting top tokens", error);
      }
    })();
  }, []);

  return (
    <div className="relative max-h-[100vh] w-full overflow-scroll text-slate-400 px-7 py-2">
      <div className="mt-5">
        {tokenList ? tokenList.map((token, i) => (
          <div key={i} className="mb-5">
            <TopTokensRow topToken={token} />
          </div>
        )) : <div className="my-6 text-neutral-400">No data found</div>}
      </div>
    </div>
  );
};
