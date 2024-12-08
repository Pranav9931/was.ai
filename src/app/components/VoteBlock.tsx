import { Button } from '@mui/material';
import { OktoContextType, useOkto } from 'okto-sdk-react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import ABI from "../contract/abi.json"
import { ethers } from 'ethers';

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1rem;
`;

const Radio = styled.label`
  display: inline-block;
  padding: 10px;
  background-color: #222;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  
  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + span {
    background-color: #0088ff;
  }

  &:hover {
    background-color: #444;
  }
`;

const RadioInput = styled.input``;

const RadioLabel = styled.span`
  padding: 5px;
`;

const CONTRACT_ADDRESS = "0xA8F3e695Bac46BFA9F1C64750dD73D55d334311b";

const VoteBlock = () => {

    const handleCastVote = async (vote: boolean, power: number) => {
        try {
          // Check if MetaMask is available
          if (typeof window.ethereum === "undefined") {
            alert("MetaMask is not installed!");
            return;
          }
      
          // Request access to the user's MetaMask wallet
          await window.ethereum.request({ method: "eth_requestAccounts" });
      
          // Initialize a provider (Polygon Mumbai Testnet)
          const provider = new ethers.BrowserProvider(window.ethereum);
      
          // Connect to the Polygon Mumbai network
          const network = await provider.getNetwork();
          if (Number(network.chainId) !== 80002) {
            alert("Please switch to the Polygon Amoy testnet.");
            return;
          }
          
      
          // Set up a signer
          const signer = await provider.getSigner();
      
          // Create a contract instance
          const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      
          // Call the castVote function from the contract
          const tx = await contract.castVote(vote, power);
      
          // Wait for transaction to be mined
          const receipt = await tx.wait();
          console.log("Transaction receipt:", receipt);
      
          alert(`Vote cast successfully! Transaction hash: ${receipt.transactionHash}`);
        } catch (error) {
          console.error("Error casting vote:", error);
          alert("Failed to cast vote, please try again.");
        }
      };

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
        DO YOU WANT THIS CHARACTER TO GO ON CHAIN?
        <p>CAST YOUR VOTE</p>
        <RadioGroup>
        <Radio>
          <RadioInput
            type="radio"
            id="yes"
            name="vote"
            value="YES"
            checked={selectedOption === "YES"}
            onChange={handleRadioChange}
          />
          <RadioLabel>YES</RadioLabel>
        </Radio>
        <Radio>
          <RadioInput
            type="radio"
            id="no"
            name="vote"
            value="NO"
            checked={selectedOption === "NO"}
            onChange={handleRadioChange}
          />
          <RadioLabel>NO</RadioLabel>
        </Radio>
      </RadioGroup>

      <div>Selected Option: {selectedOption}</div>
      <Button
        onClick={(e: any) => handleCastVote(true, 2)}
      >
        CHOOSE ONCHAIN
      </Button>
    </div>
  )
}

export default VoteBlock