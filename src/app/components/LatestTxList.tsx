import { useEffect, useState } from "react";
import { LatestTxRow } from "@/app/components/LatestTxRow";
import { Block, createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

export const LatestTxList = () => {
  const [blockEvents, setBlockEvents] = useState<Block | undefined>();

  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  useEffect(() => {
    (async () => {
      try {
        const block: Block = await publicClient.getBlock();
        setBlockEvents(block);
      } catch (error) {
        console.error("Error getting block", error);
      }
    })();
  }, []);

  return (
    <div className="relative max-h-[100vh] w-full overflow-scroll text-slate-400 px-7 py-2">
      <div className="mt-5">
        {blockEvents && blockEvents?.transactions?.length > 0 ? (
          blockEvents.transactions?.map((tx, i) =>
            i < 100 ? (
              <div key={i} className="mb-5">
                <LatestTxRow tx={tx} />
              </div>
            ) : (
              <></>
            ),
          )
        ) : (
          <div className="my-6 text-neutral-400">No data found</div>
        )}
      </div>
    </div>
  );
};
