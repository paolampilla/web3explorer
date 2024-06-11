import { useRouter } from "next/navigation";
import { getHashType } from "@/utils/getHashType";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const SearchButton = ({ searchHash }: { searchHash: string }) => {
  const router = useRouter();
  const hashType = getHashType({ hashInput: searchHash });

  function handleClick() {
    hashType === "transaction"
      ? router.push(`/transaction/${searchHash}`)
      : hashType === "address"
        ? router.push(`/token/${searchHash}`)
        : router.push(`/error`);
  }

  return (
    <button className="cursor-pointer" onClick={handleClick}>
      <MagnifyingGlassIcon />
    </button>
  );
};
