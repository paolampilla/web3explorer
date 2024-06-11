import Moralis from "moralis";

export const getToken = async ({ addressHash }: { addressHash: string }) => {
  console.log("address hash", addressHash);
  try {
    const r = await Moralis.EvmApi.token.getTokenMetadata({
      chain: "0x1",
      addresses: [addressHash.toLowerCase()],
    });
    const data = r?.toJSON();
    console.log("data", data);
    return data;
  } catch (e) {
    console.log("error");
    console.error(e);
  }
};
