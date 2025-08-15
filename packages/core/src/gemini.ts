import { GoogleGenerativeAI } from "@google/generative-ai";

export function getGenerativeModel(apiKey: string) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  return model;
}

export async function generateContent(apiKey: string, prompt: string) {
  const model = getGenerativeModel(apiKey);
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
