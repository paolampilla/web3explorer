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
    <button className="cursor-pointer h-full pr-10 bg-neutral-800 bg-opacity-30" onClick={handleClick}>
      <MagnifyingGlassIcon width={30} height={30} className="opacity-60" />
    </button>
  );
};
