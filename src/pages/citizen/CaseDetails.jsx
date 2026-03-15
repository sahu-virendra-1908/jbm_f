import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getCaseDetails } from "../../services/api"

export default function CaseDetails(){

 const { id } = useParams()

 const [data,setData] = useState(null)

 useEffect(()=>{

  const fetchCase = async()=>{

   const res = await getCaseDetails(id)

   setData(res.data)

  }

  fetchCase()

 },[id])

 if(!data){

  return(
   <div className="min-h-screen bg-blue-900 flex items-center justify-center text-white">
    Loading case...
   </div>
  )

 }

 return(

  <div className="min-h-screen bg-blue-900 p-10">

   <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

    <h1 className="text-2xl font-bold text-blue-900">
     Case {data.case.caseId}
    </h1>

    <p className="mt-4 text-gray-700">
     {data.case.description}
    </p>

    <div className="mt-4">

     <span className="bg-blue-600 text-white px-4 py-1 rounded-full">
      {data.case.status}
     </span>

    </div>

    <div className="mt-4 text-sm text-gray-600">
     <p>Citizen Phone: {data.case.citizenPhone}</p>
     <p>Blockchain Tx: {data.case.blockchainTxHash}</p>
    </div>

    <h2 className="mt-8 text-xl font-semibold text-blue-900">
     Evidence
    </h2>

    {data.evidence.length === 0 && (
     <p className="text-gray-500 mt-2">No evidence uploaded yet.</p>
    )}

    {data.evidence.map((e)=>(
     <div
      key={e._id}
      className="border rounded-lg p-3 mt-3 bg-gray-50">

      <p className="text-sm text-gray-600">
       File Hash:
      </p>

      <p className="text-blue-600 break-all">
       {e.fileHash}
      </p>

      <p className="text-sm text-gray-600 mt-2">
       IPFS Hash:
      </p>

      <p className="text-blue-600 break-all">
       {e.ipfsHash}
      </p>

     </div>
    ))}

   </div>

  </div>

 )
}