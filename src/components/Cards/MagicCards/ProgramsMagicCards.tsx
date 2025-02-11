"use client";

import { MagicCard } from "@/components/ui/magic-card";
import Link from "next/link";

export function ProgramsMagicCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Each card wrapper has a fixed aspect ratio and size */}
      <div className="aspect-[4/3] w-full">
        <Link
          href="https://staging.crossmint.com/collections/guild-advancement-program-quests-8/drop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicCard className="w-full h-full p-6">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold">
                Guild Advancement Program
              </h3>
              <p className="mt-2 text-muted-foreground">
                Empowering community members through structured advancement
                opportunities and rewards for active participation in YGG&apos;s
                ecosystem.
              </p>
            </div>
          </MagicCard>
        </Link>
      </div>

      <div className="aspect-[4/3] w-full">
        <Link
          href="https://staging.crossmint.com/collections/future-of-work/drop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicCard className="w-full h-full p-6">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold">Future of Work</h3>
              <p className="mt-2 text-muted-foreground">
                Creating sustainable earning opportunities in the metaverse
                through web3 gaming, education, and community development.
              </p>
            </div>
          </MagicCard>
        </Link>
      </div>

      <div className="aspect-[4/3] w-full">
        <Link
          href="https://staging.crossmint.com/collections/ronin-ygg-airdrop/claim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicCard className="w-full h-full p-6">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold">Airdrop</h3>
              <p className="mt-2 text-muted-foreground">
                Token distribution program rewarding early adopters and active
                community members with YGG tokens for their contribution to the
                ecosystem.
              </p>
            </div>
          </MagicCard>
        </Link>
      </div>
    </div>
  );
}
