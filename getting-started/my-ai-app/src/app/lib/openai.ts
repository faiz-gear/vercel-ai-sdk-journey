import { createOpenAI } from '@ai-sdk/openai'

export const createCompatibleOpenAI = () => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = process.env.BASE_URL

  const openai = createOpenAI({
    apiKey: API_KEY,
    baseURL: BASE_URL
  })

  return openai
}
