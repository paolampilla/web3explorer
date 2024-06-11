import Moralis from "moralis";

export async function getBlockByDate(date: string) {
  try {
    const block = await Moralis.EvmApi.block.getDateToBlock({
      chain: "0x1",
      date: date,
    });
    return block.raw;
  } catch (e) {
    console.error("Unable to get block");
    return undefined;
  }
}
