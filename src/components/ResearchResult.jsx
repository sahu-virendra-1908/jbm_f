import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function ResearchResult({ data }) {

  return (

    <Card className="mt-6 border-blue-200 shadow-lg">

      <CardHeader>
        <CardTitle className="text-blue-600">
          AI Research Result
        </CardTitle>
      </CardHeader>

      <CardContent>

        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
          {data}
        </div>

      </CardContent>

    </Card>

  )
}

export default ResearchResult