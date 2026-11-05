import { GoogleGenAI } from "@google/genai";

// In AI Studio the API key is injected, so the app calls Gemini live.
// On the public GitHub Pages build there is no key, so we fall back to
// scripted responses and the demo still works end to end.
const readKey = (): string | undefined => {
    try {
        return process.env.API_KEY || undefined;
    } catch {
        return undefined;
    }
};

const SCRIPTED: { match: RegExp; text: string }[] = [
    {
        match: /scout/i,
        text: "Seager has been punishing anything left over the plate, and with two outs he'll sit fastball early. Expect the Astros to work him away with sliders. If he gets ahead 2-0, this is a home run count.",
    },
    {
        match: /memor|journalist/i,
        text: "Twenty-one trips to Globe Life Field, twenty-four home runs, and one 414-foot blast that John will be describing for years. He watched his Rangers go 15-6 with him in the seats, which makes a strong case that the club should be buying his tickets. Some seasons you follow; this one he lived.",
    },
];

const scriptedClient = {
    models: {
        generateContent: async ({ contents }: { model: string; contents: string }) => {
            await new Promise((r) => setTimeout(r, 900));
            const hit = SCRIPTED.find((s) => s.match.test(String(contents)));
            return { text: hit ? hit.text : SCRIPTED[0].text };
        },
    },
};

const key = readKey();
const ai = key ? new GoogleGenAI({ apiKey: key }) : scriptedClient;

/**
 * Returns a Gemini client when a key is available, otherwise a scripted stand-in.
 */
export const getAi = () => ai as GoogleGenAI;
