const OpenAI = require("openai-api");
const OPENAI_SECRET_KEY = process.env.NEXT_PUBLIC_OPENAI_SECRET_KEY;
export const openai = new OpenAI(OPENAI_SECRET_KEY);
