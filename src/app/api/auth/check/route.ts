import { PrivyClient } from "@privy-io/server-auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const cookieAuthToken = cookieStore.get("privy-token")?.value;

  if (!cookieAuthToken) {
    return NextResponse.json({ isAuthenticated: false });
  }

  const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
  const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET;

  if (!PRIVY_APP_ID || !PRIVY_APP_SECRET) {
    console.error(
      "Privy app ID or secret is not defined in environment variables."
    );
    return NextResponse.json(
      { isAuthenticated: false, error: "Privy config error" },
      { status: 500 }
    );
  }

  const client = new PrivyClient(PRIVY_APP_ID, PRIVY_APP_SECRET);

  try {
    await client.verifyAuthToken(cookieAuthToken);
    return NextResponse.json({ isAuthenticated: true });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({
      isAuthenticated: false,
      error: "Token verification failed",
    });
  }
}
