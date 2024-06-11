type HashType = "transaction" | "address" | undefined;

export function getHashType({ hashInput }: { hashInput: string }): HashType {
  const isTxHashRgx = /^0x([A-Fa-f0-9]{64})$/.test(hashInput);
  const isAddressRgx = /^0x([A-Fa-f0-9]{40})$/.test(hashInput);

  if (isTxHashRgx) {
    return "transaction";
  } else if (isAddressRgx) {
    return "address";
  } else {
    return undefined;
  }
}
