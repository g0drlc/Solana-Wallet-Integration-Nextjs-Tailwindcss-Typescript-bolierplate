"use client"
import ConnectButton from "@/components/ConnectButton";
import CreateMarket from "@/components/proposal/CreateProposal";
import ProposalPage from "@/components/proposal/ProposalPage";
import ViewProposal from "@/components/proposal/ViewProposal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
        <CreateMarket />
    </main>
  );
}

