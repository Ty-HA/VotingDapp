'use client';
import { useState } from 'react';
import { Card, Button } from "flowbite-react";
import { useWriteContract } from 'wagmi'
import { useWatchContractEvent } from 'wagmi'
import { contractAbi, contractAddress } from '@/constants';

const ProposalRegistrationStartButton = () => {
  const [voterAddress, setVoterAddress] = useState('');
  const [registeredAddresses, setRegisteredAddresses] = useState([]);

  const { writeContract } = useWriteContract()

  const handleStartSession = () => {
    console.log("ProposalRegistrationStartButton")
    writeContract({ 
        abi : contractAbi,
        address: contractAddress,
        functionName: 'startProposalsRegistering'
        }
    )

/*
    useWatchContractEvent({
        address: contractAddress,
        abi: contractAbi,
        eventName: 'WorkflowStatusChange',
        onLogs(logs) {
          console.log('New Event: ', logs)
        },
      })
*/
  };

  return (
    <section className="flex sm:flex-row flex-col-reverse justify-around items-center pb-20 w-full bg-green-600 pt-20 h-[95vh]">
      <div className="sm:w-1/2 xl:pl-60 lg:pl-32 px-8">
        <h2
          style={{ lineHeight: "1.2" }}
          className="text-black mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose"
        >
          Proposal Registration Start
        </h2>
        <div className='flex'>
        <Button color="blue" onClick={handleStartSession}>Start</Button>
        </div>
        <div></div>
      </div>
      <div className="sm:w-1/2 xl:pr-60 lg:pr-32 px-8">
        {/* Other content */}
      </div>
    </section>
  );
};

export default ProposalRegistrationStartButton;