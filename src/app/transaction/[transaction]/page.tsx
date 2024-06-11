"use client";
import { getTransaction } from "@/app/transaction/getTransaction";
import Image from "next/image";
import {
  GetTokenMetadataJSONResponse,
  GetTransactionVerboseJSONResponse,
} from "@moralisweb3/common-evm-utils";
import { useEffect, useState } from "react";
import Moralis from "moralis";

export default function TransactionPage({
  params,
}: {
  params: { transaction: string };
}) {
  const [transactionData, setTransactionData] = useState<
    GetTransactionVerboseJSONResponse | undefined
  >();

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        await Moralis.start({
          apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
        });
        const token = await getTransaction({
          transactionHash: params.transaction,
        });
        setTransactionData(token);
      } catch (error) {
        console.error("Error getting tokens", error);
      }
    };

    fetchTransactionData();
  }, [params]);

  return (
    <div>
      <h1>Transaction Details:</h1>
      <div>{transactionData?.decoded_call?.signature}</div>
      <div>
        From Address: {transactionData?.from_address}{" "}
        {transactionData?.from_address_label}
      </div>
      <div>
        To Address: {transactionData?.to_address}{" "}
        {transactionData?.to_address_label}
      </div>
      <div>From Address: {transactionData?.block_timestamp}</div>
      <div>Transaction Hash: {transactionData?.hash}</div>
      <div>Block Hash: {transactionData?.block_number}</div>
      <div>Gas: {transactionData?.receipt_gas_used}</div>
      <div>Gas Price: {transactionData?.gas_price}</div>
    </div>
  );
}
