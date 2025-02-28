"use client";
import { useState } from "react";
import Link from "next/link";
import { Card } from "../others/Card";
import { Input } from "../others/Input";
import { Button } from "../others/Button";

export default function ProposalPage() {
  const [question, setQuestion] = useState("");
  const [proposals, setProposals] = useState([
    { question: "Will Bitcoin reach $100K by 2025?" },
    { question: "Will Ethereum flip Bitcoin in market cap?" },
    { question: "Will AI tokens be the best-performing sector this year?" }
  ]);

  const submitProposal = () => {
    if (question.trim() !== "") {
      setProposals([...proposals, { question }]);
      setQuestion("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <nav className="flex justify-between items-center bg-gray-900 text-white p-4 rounded-lg">
        <h1 className="text-xl font-bold">apebase.fun</h1>
        <div className="flex space-x-4">
          <Link href="/create-proposal" className="hover:underline">Create Proposal</Link>
          <Link href="/view-proposals" className="hover:underline">View Proposals</Link>
          <Link href="/provide-liquidity" className="hover:underline">Provide Liquidity</Link>
          <Link href="/bet-markets" className="hover:underline">Bet Markets</Link>
          <Link href="/user-profile" className="hover:underline">User Profile</Link>
          <Link href="/referral" className="hover:underline">Referral</Link>
        </div>
      </nav>
      <Card className="p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-semibold mb-4">Create a Prediction Proposal</h2>
        <Input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter a prediction question"
          className="mb-4 border border-gray-300 p-2 rounded w-full"
        />
        <Button onClick={submitProposal} className="w-full bg-blue-600 text-white hover:bg-blue-700">Submit Proposal</Button>
      </Card>
      <h2 className="text-2xl font-semibold">Proposals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proposals.length > 0 ? (
          proposals.map((proposal, index) => (
            <Card key={index} className="p-4 shadow-md rounded-lg border border-gray-200 bg-white">
              <p className="text-lg font-medium">{proposal.question}</p>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No proposals available.</p>
        )}
      </div>
    </div>
  );
}
