import { GoogleGenAI } from "@google/genai";

// FIX: Per coding guidelines, the API key must be obtained exclusively from process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Returns the singleton instance of the GoogleGenAI client.
 */
export const getAi = () => {
    return ai;
};
