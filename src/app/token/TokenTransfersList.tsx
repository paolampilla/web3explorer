import { useEffect, useState } from "react";
import { GetTokenTransfersJSONResponse } from "@moralisweb3/common-evm-utils";
import { TopTokensRow } from "@/app/components/TopTokensRow";
import { getTokenTransaction } from "@/app/token/getTokenTransactions";
import { PaginatedJSONResponse } from "@moralisweb3/common-core";
import { TokenTransfersRow } from "@/app/token/TokenTransfersRow";

export const TokenTransfersList = ({
  addressHash,
}: {
  addressHash: string;
}) => {
  const [txList, setTxList] = useState<
    GetTokenTransfersJSONResponse["result"] | undefined
  >();

  useEffect(() => {
    (async () => {
      try {
        const txResponse = await getTokenTransaction({ addressHash });
        setTxList(txResponse?.result);
      } catch (error) {
        console.error("Error getting top tokens", error);
      }
    })();
  }, []);

  return (
    <div className="relative max-h-[100vh] w-full overflow-scroll text-slate-400 px-7 py-2">
      <div className="mt-5">
        {txList ? (
          txList.map((token, i) => (
            <div key={i} className="mb-5">
              <TokenTransfersRow txItem={token} />
            </div>
          ))
        ) : (
          <div className="my-6 text-neutral-400">No data found</div>
        )}
      </div>
    </div>
  );
};
