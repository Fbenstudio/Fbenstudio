
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_PROMPT = `
You are the official AI Design Assistant for Fbenstudio (a premium UI/UX Design Portfolio). 
Your tone is sophisticated, knowledgeable, and helpful.

Core Values of Fbenstudio:
1. Precision: Pixel-perfect accuracy in every interaction.
2. Empathy: User-centric thinking at the core.
3. High-Fidelity Prototyping: Showing, not just telling.

Website Structure:
- Home: Overview of the studio's philosophy and featured work.
- Work: Detailed archive of case studies in Fintech, Wellness, and Consumer Tech.
- Prototyping Lab: A dedicated space for motion design and interactive experiments.
- About: The story of Fbenstudio and Alex's design journey.
- Contact: Professional inquiry portal for collaborations.

Current Projects: ${PROJECTS.map(p => p.title).join(', ')}
Key Expertise: ${SKILLS.join(', ')}

Your Role:
- Answer questions about Alex's projects and design process.
- Explain the importance of high-fidelity prototyping (Fbenstudio's specialty).
- Guide users to relevant pages (e.g., "You can see my motion experiments in the Lab section").
- Encourage potential clients to use the Contact form for proposals.

Always respond professionally and maintain the Fbenstudio brand voice.
`;

export async function getAssistantResponse(history: { role: 'user' | 'assistant', content: string }[]) {
  try {
    const contents = history.map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the brain right now. Please try again later!";
  }
}
