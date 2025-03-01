"use client"
import ConnectButton from "@/components/ConnectButton"
import ProposalPage from "@/components/proposal/ProposalPage"
import ViewProposal from "@/components/proposal/ViewProposal"
import React from "react"

export default function CreateProposal({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <ViewProposal />
    )
}