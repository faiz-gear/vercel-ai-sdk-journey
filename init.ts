import { createOpenAI } from '@ai-sdk/openai'
import { config } from 'dotenv'

config()

export const createCompatibleOpenAI = () => {
  const API_KEY = Deno.env.get('API_KEY')
  const BASE_URL = Deno.env.get('BASE_URL')

  const openai = createOpenAI({
    apiKey: API_KEY,
    baseURL: BASE_URL
  })

  return openai
}
