import { timeStamp } from "console";
import { NextResponse, userAgent } from "next/server";

export async function GET(req: Request) {
  const headers: Record<string, string | null> = {
    referer: req.headers.get("referer"),
    userAgent: req.headers.get("user-agent"),
    origin: req.headers.get("origin"),
    host: req.headers.get("host"),
  };

  return NextResponse.json({
    fromServer: headers,
    timestamp: new Date().toISOString(),
  });
}
