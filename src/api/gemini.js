import axios from "axios"

const API_KEY = "AIzaSyCABaj3GVC1OY-GgHLIkhkyWZHU8gRig6Q"

export const analyzeCase = async (problem) => {

  const prompt = `
You are an expert legal and investigation research AI.

User problem:
${problem}

Tasks:
1. Understand the problem deeply
2. Verify the context logically
3. Research possible laws or actions
4. Give a clear step-by-step action plan
5. Explain risks and precautions
6. Respond in the user's native language

Return format:

Problem Understanding
Verification
Research Findings
Step-by-step Plan
Important Advice
`

  const res = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
    {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    }
  )

  return res.data.candidates[0].content.parts[0].text
}