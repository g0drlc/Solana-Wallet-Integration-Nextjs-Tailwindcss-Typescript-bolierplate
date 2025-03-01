"use client"
import ConnectButton from "@/components/ConnectButton";
import CreateMarket from "@/components/proposal/CreateProposal";
import ProposalPage from "@/components/proposal/ProposalPage";
import ViewProposal from "@/components/proposal/ViewProposal";
import Image from "next/image";

export default function CreateProposal() {
  return (
    <main className="flex min-h-screen flex-col  p-24 mt-40">
        <CreateMarket />
    </main>
  );
}