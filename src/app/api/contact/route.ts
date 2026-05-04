import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    ok: true,
    message:
      "Thank you for your inquiry. It has been received in 1 of 3 timelines.",
  });
}
