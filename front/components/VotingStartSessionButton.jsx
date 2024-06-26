"use client";
import { useState } from "react";
import { Card, Button } from "flowbite-react";
import { useWriteContract } from "wagmi";
import { useWatchContractEvent } from "wagmi";
import { contractAbi, contractAddress } from "@/constants";

const VotingStartSessionButton = () => {
  //  const [registeredAddresses, setRegisteredAddresses] = useState([]);

  const { writeContract } = useWriteContract();

  const handleStartSession = () => {
    console.log("startVotingSession");
    writeContract({
      abi: contractAbi,
      address: contractAddress,
      functionName: "startVotingSession",
    });
  };

  return (
    <section className="flex flex-col justify-center items-center w-full bg-blue-950 pt-6 pb-6">
      <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose text-center mb-6">
        5. Session Vote Start
      </h2>

      <Button gradientMonochrome="purple" onClick={handleStartSession}>
        Start Voting Session
      </Button>
    </section>
  );
};

export default VotingStartSessionButton;
