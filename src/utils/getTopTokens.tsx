import Moralis from "moralis";

export async function getTopTokens() {
  const topTokens =
    await Moralis.EvmApi.marketData.getTopERC20TokensByMarketCap();
  return topTokens.toJSON();
}
