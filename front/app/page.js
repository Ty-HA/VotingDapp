"use client";
import Home from "@/components/Home";
//import WhiteListRegistration from "@/components/WhiteListRegistration";
import VotingStartSessionButton from "@/components/VotingStartSessionButton";
import VotingSessionEndButton from "@/components/VotingSessionEndButton";
import ProposalRegistrationStartButton from "@/components/ProposalRegistrationStartButton";
import ProposalRegistrationEndButton from "@/components/ProposalRegistrationEndButton";
import TallyVotesButton from "@/components/TallyVotesButton";
import WhiteListRegistration from "@/components/WhiteListRegistration"
import ProposalSubmission from "@/components/ProposalSubmission"
import Voting from "@/components/Voting"
import WinningProposal from "@/components/WinningProposal"
import WorkflowStatus from "@/components/WorkflowStatus"
import ReadaContract from "@/components/ReadaContract"


import Events from "@/components/Events";

import Image from "next/image";

const App = () => {
  return (
    <>
      <Home />
      <WhiteListRegistration />
      <ProposalRegistrationStartButton />
      <ProposalSubmission />
      <ProposalRegistrationEndButton />
      <VotingStartSessionButton />
      <Voting />
      <VotingSessionEndButton />
      <TallyVotesButton />
      <WinningProposal />
      <Events />
      <Home />
    </>
  );
};

export default App;
