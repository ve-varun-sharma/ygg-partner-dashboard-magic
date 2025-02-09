"use client";

import { PrivyProvider } from "@privy-io/react-auth";

export function PrivyClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        loginMethods: ["email", "wallet"],
        appearance: {
          theme: "dark",
          accentColor: "#676FFF",
          logo: "/ygg_logo.png",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
