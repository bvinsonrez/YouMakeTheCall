import { GoogleGenAI } from "@google/genai";

// Per instructions, the API key is assumed to be available in the environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Returns the singleton instance of the GoogleGenAI client.
 */
export const getAi = () => {
    return ai;
};
