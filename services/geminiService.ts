
import { GoogleGenAI } from "@google/genai";

export const getSmartDiagnostic = async (description: string) => {
  if (!process.env.API_KEY) return "AI Diagnostic unavailable without API Key.";

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a professional mobile repair technician at Cellicon. 
      A customer describes their phone issue: "${description}". 
      Provide a brief (max 100 words), helpful diagnostic, probable causes, 
      and a polite recommendation to book a repair with us. Keep the tone tech-forward and reassuring.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble analyzing that issue right now, but our technicians can definitely take a look in person!";
  }
};

export const generateBrandAsset = async (prompt: string) => {
  if (!process.env.API_KEY) throw new Error("API Key missing");

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `High-quality professional photography for a mobile repair business called 'Cellicon'. The aesthetic is modern, tech-forward, clean, with cyan and dark blue lighting. Scene: ${prompt}. Professional lighting, 8k resolution, cinematic composition.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data returned");
  } catch (error) {
    console.error("Image Gen Error:", error);
    throw error;
  }
};
