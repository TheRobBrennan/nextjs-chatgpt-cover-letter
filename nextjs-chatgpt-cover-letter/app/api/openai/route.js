import { NextResponse } from "next/server";

// OpenAI
const OpenAI = require("openai-api");
const OPENAI_SECRET_KEY = process.env.NEXT_PUBLIC_OPENAI_SECRET_KEY;
const openai = new OpenAI(OPENAI_SECRET_KEY);

export async function POST(request) {
  try {
    const postData = await request.json();
    const { prompt } = postData;

    const json_response = await openai
      .complete({
        engine: "text-davinci-003",
        prompt,
        maxTokens: 1000,
        temperature: 0.9,
      })
      .then(async (res) => {
        return res;
      });

    return NextResponse.json(json_response, { status: 200 });
  } catch (error) {
    throw new Error(error);
  }
}
