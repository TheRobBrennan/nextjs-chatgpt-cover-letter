import { NextResponse } from "next/server";

export async function GET(request) {
  const json_response = {
    data: "Sample data.",
  };

  try {
    return NextResponse.json(json_response, { status: 200 });
  } catch (error) {
    throw new Error(error);
  }
}
