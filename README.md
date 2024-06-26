# VotingDapp
- Voting Dapp for Alyra Blockchain School
- Collaborators: Mohammed GHACIRI and Ty HA
  
![Voting Dapp Mobile View](/front/public/votingmobile.png)




# Security vulnerability fixed

## Denial of Service (DoS) Gas Limit Vulnerability

Original tallyVotes Function with DoS Gas Limit Vulnerability

```
function tallyVotes() external onlyOwner {
    require(workflowStatus == WorkflowStatus.VotingSessionEnded, "Current status is not voting session ended");
    uint _winningProposalId;
    for (uint256 p = 0; p < proposalsArray.length; p++) {
        if (proposalsArray[p].voteCount > proposalsArray[_winningProposalId].voteCount) {
            _winningProposalId = p;
        }
    }
    winningProposalID = _winningProposalId;
    
    workflowStatus = WorkflowStatus.VotesTallied;
    emit WorkflowStatusChange(WorkflowStatus.VotingSessionEnded, WorkflowStatus.VotesTallied);
}
```

### Optimized Solution
- We are ensuring that functions do not exceed the gas limit
- To fix this issue, we optimized the setVote function to maintain the winningProposalID during the voting process, removing the need for a loop in tallyVotes.
Updated setVote Function:

```
    function setVote( uint _id) external onlyVoters {
        require(workflowStatus == WorkflowStatus.VotingSessionStarted, 'Voting session havent started yet');
        require(voters[msg.sender].hasVoted != true, 'You have already voted');
        require(_id < proposalsArray.length, 'Proposal not found'); // pas obligé, et pas besoin du >0 car uint

        voters[msg.sender].votedProposalId = _id;
        voters[msg.sender].hasVoted = true;
        proposalsArray[_id].voteCount++;

         if (proposalsArray[_id].voteCount > proposalsArray[winningProposalID].voteCount) {
               winningProposalID = _id;
          }

        emit Voted(msg.sender, _id);
    }
}
```
New TallyVote
```

   function tallyVotes() external onlyOwner {
       require(workflowStatus == WorkflowStatus.VotingSessionEnded, "Current status is not voting session ended");
       
       workflowStatus = WorkflowStatus.VotesTallied;
       emit WorkflowStatusChange(WorkflowStatus.VotingSessionEnded, WorkflowStatus.VotesTallied);
    }
```

## TO IMPLEMENT

- Voter Whitelist Registration
- Proposal Registration Session Start
- Proposal Submission
- Proposal Registration Session End
- Voting Session Start
- Voting
- Voting Session End
- Vote Tallying
- Result Viewing: Everyone to view the results.

## LINKS
- Dapp deployed on: [vercel](https://votingdappalyra.vercel.app/)
- Etherscan contract: https://sepolia.etherscan.io/address/0xb9fbA4007272001BF72366CAb561300c16754758

## How to deploy your own smart contract on SEPOLIA
```
cd back
yarn install
```
Set your .env
```
SEPOLIA_RPC_URL=YOUR_ALCHEMY_RPC_URL
PRIVATE_KEY=YOUR_PRIVATE_KEY
ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY
```
Deploy
```
yarn hardhat run .\\scripts\\deploy.js --network sepolia
```
## FRONTEND
```
cd front
npm install
npm run dev
```

# DEMO video link
https://www.loom.com/share/1a6b452b05ef4118a3c9a17fd9ec4098?sid=9986b160-201d-456f-960d-22cdc5c2d0de


![Voting Dapp Desktop View](/front/public/desktopvoting.png)
