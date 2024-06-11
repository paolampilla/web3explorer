"use client";
import { getTransaction } from "@/app/transaction/getTransaction";
import { GetTransactionVerboseJSONResponse } from "@moralisweb3/common-evm-utils";
import { useEffect, useState } from "react";

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
    <div className="rounded rounded-xl font-light text-gray-300 bg-[#0A0A0A] border w-[85%] mt-10 m-auto border-[#2c2d2d]">
      <div className="p-16 gap-4 flex flex-col">
        {!transactionData ? (
          <div>No transaction data available.</div>
        ) : (
          <div className="gap-4 flex flex-col">
            <h1 className="text-2xl font-normal text-gray-200">
              Transaction Details
            </h1>
            <div>
              <span className="text-neutral-400 font-medium">
                Transaction Signature:
              </span>{" "}
              {transactionData?.decoded_call?.signature}
            </div>
            <div>
              <span className="text-neutral-400 font-medium">
                From Address:
              </span>{" "}
              {transactionData?.from_address}{" "}
              {transactionData?.from_address_label}
            </div>
            <div>
              <span className="text-neutral-400 font-medium">To Address: </span>
              {transactionData?.to_address} {transactionData?.to_address_label}
            </div>
            <div>
              <span className="text-neutral-400 font-medium">Time:</span>{" "}
              {transactionData?.block_timestamp}
            </div>
            <div>
              <span className="text-neutral-400 font-medium">
                Transaction Hash:
              </span>{" "}
              {transactionData?.hash}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
