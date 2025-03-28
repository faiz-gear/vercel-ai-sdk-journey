import { createOpenAI } from "@ai-sdk/openai";

export const compatibleOpenAi = createOpenAI({
    apiKey: process.env.API_KEY,
    baseURL: process.env.BASE_URL,
});
