import Moralis from "moralis";

export const getTokenTransaction = async ({
  addressHash,
}: {
  addressHash: string;
}) => {
  try {
    const r = await Moralis.EvmApi.token.getTokenTransfers({
      chain: "0x1",
      limit: 20,
      order: "DESC",
      address: addressHash.toLowerCase(),
    });
    const data = r.raw;
    return data;
  } catch (e) {
    console.error(e);
  }
};
