"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAccessToken, usePrivy } from "@privy-io/react-auth";
import Head from "next/head";
import { ProgramsMagicCards } from "@/components/Cards/MagicCards/ProgramsMagicCards";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { RetroGrid } from "@/components/ui/retro-grid";

async function verifyToken() {
  const url = "/api/verify";
  const accessToken = await getAccessToken();
  const result = await fetch(url, {
    headers: {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined),
    },
  });

  return await result.json();
}

export default function DashboardPage() {
  const [verifyResult, setVerifyResult] = useState();
  const router = useRouter();
  const {
    ready,
    authenticated,
    user,
    logout,
    linkEmail,
    linkWallet,
    unlinkEmail,
    linkPhone,
    unlinkPhone,
    unlinkWallet,
    linkGoogle,
    unlinkGoogle,
    linkTwitter,
    unlinkTwitter,
    linkDiscord,
    unlinkDiscord,
  } = usePrivy();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  const numAccounts = user?.linkedAccounts?.length || 0;
  const canRemoveAccount = numAccounts > 1;

  const email = user?.email;
  const phone = user?.phone;
  const wallet = user?.wallet;

  const googleSubject = user?.google?.subject || null;
  const twitterSubject = user?.twitter?.subject || null;
  const discordSubject = user?.discord?.subject || null;

  return (
    <>
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Yield Guild Games
      </span>
      <Head>
        <title>YGG Partner Dashboard</title>
      </Head>

      <main className="flex flex-col min-h-screen relative">
        <div className="container mx-auto py-10 relative z-10">
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            Partner Dashboard Overview
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Quests Created</CardTitle>
                <CardDescription>
                  Number of quests created in the system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">125</div>{" "}
                {/* Replace with actual data */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Partners</CardTitle>
                <CardDescription>
                  Number of partners currently active
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>{" "}
                {/* Replace with actual data */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quests in Progress</CardTitle>
                <CardDescription>
                  Quests currently being worked on
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">30</div>{" "}
                {/* Replace with actual data */}
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <ProgramsMagicCards />
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <RetroGrid />
        </div>
      </main>
    </>
  );
}
