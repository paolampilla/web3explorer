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
    <div className="relative shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)] border-t-slate-700 max-h-[100vh] bg-[#182234] w-full overflow-scroll text-slate-400 p-7 pt-2">
      <div className="mt-2">
        {tokenList?.map((token, i) => (
          <div key={i} className="mb-4">
            <TopTokensRow topToken={token} />
          </div>
        ))}
      </div>
    </div>
  );
};
