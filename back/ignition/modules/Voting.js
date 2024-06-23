const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("VotingModule", (m) => {
  const voting = m.contract("Voting2");
  return { voting };
});