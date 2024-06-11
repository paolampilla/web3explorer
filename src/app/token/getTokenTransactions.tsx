import Moralis from "moralis";

export const getTokenTransaction = async ({
  addressHash,
}: {
  addressHash: string;
}) => {
  console.log("address hash", addressHash);
  try {
    const r = await Moralis.EvmApi.token.getTokenTransfers({
      chain: "0x1",
      limit: 20,
      order: "DESC",
      address: addressHash.toLowerCase(),
    });
    const data = r.raw;
    console.log("data", data);
    return data;
  } catch (e) {
    console.log("error");
    console.error(e);
  }
};
