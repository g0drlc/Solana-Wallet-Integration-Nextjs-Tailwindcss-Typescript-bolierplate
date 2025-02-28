"use client"
import ConnectButton from "@/components/ConnectButton";
import ProposalPage from "@/components/proposal/ProposalPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
        <ConnectButton />
        <ProposalPage />
    </main>
  );
}

