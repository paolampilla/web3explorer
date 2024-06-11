import Moralis from "moralis";

export const getToken = async ({ addressHash }: { addressHash: string }) => {
  try {
    const r = await Moralis.EvmApi.token.getTokenMetadata({
      chain: "0x1",
      addresses: [addressHash.toLowerCase()],
    });
    const data = r?.toJSON();
    return data;
  } catch (e) {
    console.error(e);
  }
};
