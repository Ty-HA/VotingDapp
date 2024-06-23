"use client";
import { useEffect } from "react"; // Ensure useEffect is imported
import { Button } from "flowbite-react"; // Removed unused import 'Card'
import { useReadContract } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

function WinningProposal() {
  const { data: winningProposalID, refetch } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'winningProposalID',
  });

  useEffect(() => {
    refetch();
    console.log(winningProposalID);
  }, [refetch]);

  // Function to handle button click for refetching the winning proposal ID
  const handleRefetch = () => {
    refetch();
  };

  return (
    <section className="flex flex-col justify-center items-center w-full bg-blue-950 pt-6 pb-6">
      <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose text-center mb-6">
        3. Winning Proposal
      </h2>
      <Button gradientMonochrome="purple" onClick={handleRefetch}>
        Show Winning Proposal
      </Button>
      <p className='text-white text-3xl mt-4'>Winning Proposal : {(winningProposalID ?? 'Loading...').toString()}</p>
      
    </section>
  );
};

export default WinningProposal;