"use client";
import { getToken } from "@/app/token/getToken";
import Image from "next/image";
import {
  GetTokenMetadataJSONResponse,
  GetTokenTransfersJSONResponse,
} from "@moralisweb3/common-evm-utils";
import { useEffect, useState } from "react";
import Moralis from "moralis";
import { getTokenTransaction } from "@/app/token/getTokenTransactions";
import TokenTransfersSection from "@/app/token/TokenTransfersSection";

export default function TokenPage({ params }: { params: { token: string } }) {
  const [tokenData, setTokenData] = useState<
    GetTokenMetadataJSONResponse | undefined
  >();

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const token = await getToken({
          addressHash: params.token.toLowerCase(),
        });
        setTokenData(token);
      } catch (error) {
        console.error("Error getting tokens", error);
      }
    };

    fetchTokenData();
  }, [params]);

  return (
    <div className="rounded rounded-xl font-light text-gray-300 bg-[#0A0A0A] border w-[85%] mt-10 m-auto border-[#2c2d2d]">
      <div className="p-16 gap-4 flex flex-col">
        {tokenData && tokenData.length > 0 ? (
          tokenData.map((token, i) => (
            <>
              <div className="gap-4 flex flex-col" key={i}>
                <h1 className="text-2xl font-normal text-gray-200">
                  {token.address_label}
                </h1>
                <Image
                  width={50}
                  height={50}
                  src={token.thumbnail || ""}
                  alt={`Logo of ${token?.symbol}`}
                />
                <div className="font-medium">{token.name}</div>
                <div>Address: {token.address}</div>
                <div>Decimals: {token.decimals}</div>
              </div>
              <TokenTransfersSection address={token.address} />
            </>
          ))
        ) : (
          <div>No token data available.</div>
        )}
      </div>
    </div>
  );
}
