import Moralis from "moralis";

export async function getBlockTransactions(blockNumber: string) {
  try {
    const block = await Moralis.EvmApi.block.getBlock({
      chain: "0x1",
      blockNumberOrHash: blockNumber,
    });
    return block?.toJSON();
  } catch (e) {
    console.log(e);
  }
}
