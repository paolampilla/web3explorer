import Moralis from "moralis";

export const getTransaction = async ({
  transactionHash,
}: {
  transactionHash: string;
}) => {
  try {
    const r = await Moralis.EvmApi.transaction.getTransactionVerbose({
      chain: "0x1",
      transactionHash: transactionHash.toLowerCase(),
    });
    const data = r?.toJSON();
    return data;
  } catch (e) {
    console.error(e);
  }
};
