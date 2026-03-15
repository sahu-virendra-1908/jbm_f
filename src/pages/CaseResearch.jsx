import { useState } from "react"
import { analyzeCase } from "../api/gemini"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ResearchResult from "../components/ResearchResult"

function CaseResearch() {

  const [problem, setProblem] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {

    if (!problem) return

    setLoading(true)

    try {
      const res = await analyzeCase(problem)
      setResult(res)
    } catch (err) {
      console.log(err)
      alert("AI analysis failed")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex justify-center p-10">

      <div className="w-full max-w-4xl">

        <Card className="border-blue-200 shadow-lg">

          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">
              AI Case Research Assistant
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <Textarea
              placeholder="Describe your problem or case in your own language..."
              value={problem}
              onChange={(e)=>setProblem(e.target.value)}
              className="min-h-[150px]"
            />

            <Button
              onClick={handleAnalyze}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {loading ? "Analyzing..." : "Analyze Case"}
            </Button>

          </CardContent>

        </Card>

        {result && <ResearchResult data={result}/>}

      </div>

    </div>
  )
}

export default CaseResearch