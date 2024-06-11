"use client";
import { getToken } from "@/app/token/getToken";
import Image from "next/image";
import { GetTokenMetadataJSONResponse } from "@moralisweb3/common-evm-utils";
import { useEffect, useState } from "react";
import Moralis from "moralis";

export default function TokenPage({ params }: { params: { token: string } }) {
  const [tokenData, setTokenData] = useState<
    GetTokenMetadataJSONResponse | undefined
  >();

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        await Moralis.start({
          apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
        });
        const token = await getToken({ addressHash: params.token });
        setTokenData(token);
      } catch (error) {
        console.error("Error getting tokens", error);
      }
    };

    fetchTokenData();
  }, [params]);

  return (
    <div>
      <h1>Token Details:</h1>
      {tokenData && tokenData.length > 0 ? (
        tokenData.map((token, i) => (
          <div key={i}>
            <Image
              width={100}
              height={100}
              src={token.thumbnail || ""}
              alt={`Logo of ${token?.symbol}`}
            />
            <div>Token Name: {token.name}</div>
            <div>Decimals: {token.decimals}</div>
            <div>Verified: {token.verified_contract}</div>
          </div>
        ))
      ) : (
        <div>No token data available.</div>
      )}
    </div>
  );
}
