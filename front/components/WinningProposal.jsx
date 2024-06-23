'use client';
import { useState } from 'react';
import { Card, Button } from "flowbite-react";
import { useReadContract } from 'wagmi'
import { useWatchContractEvent } from 'wagmi'
import { contractAbi, contractAddress } from '@/constants';

//const WinningProposal = () => {
function WinningProposal() {
    const { data: winningProposalID, status, refetch } = useReadContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: 'winningProposalID',
    });
  
    // Optionnel : Gérer le chargement ou l'erreur
    if (status === undefined) {
      return <div>Chargement du statut...</div>;
    }
  
    return (
      <div>
        <p className='text-black'>Statut actuel : {status}</p>
        <p className='text-black'>Winning Proposal : {winningProposalID}</p>
        <Button gradientMonochrome="purple" className='text-black' onClick={() => refetch()}>Rafraîchir...</Button>
      </div>
    );
  }
export default WinningProposal;