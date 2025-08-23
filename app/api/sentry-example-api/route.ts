import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export const dynamic = "force-dynamic";

class SentryExampleAPIError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "SentryExampleAPIError";
  }
}

export async function GET() {
  try {
    // Simulate error
    throw new SentryExampleAPIError("This error is raised on the backend called by the example page.");
  } catch (error) {
    Sentry.captureException(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
