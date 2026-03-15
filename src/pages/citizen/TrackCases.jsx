import { useEffect, useState } from "react"
import { getMyCases } from "../../services/api"

export default function TrackCases(){

 const [cases,setCases] = useState([])
 const [loading,setLoading] = useState(true)

 useEffect(()=>{

  const fetchCases = async()=>{

   try{

    const res = await getMyCases()

    setCases(res.data)

   }catch(err){

    console.log(err)

   }

   setLoading(false)

  }

  fetchCases()

 },[])

 const getStatusColor = (status)=>{

  if(status==="REGISTERED") return "bg-yellow-400 text-black"
  if(status==="INVESTIGATING") return "bg-blue-500"
  if(status==="RESOLVED") return "bg-green-500"

  return "bg-gray-400"

 }

 return(

  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-10">

   <h1 className="text-3xl font-bold text-white mb-8">
    My Cases
   </h1>

   {loading && (
    <p className="text-white">
     Loading cases...
    </p>
   )}

   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {cases.map((c)=>(

     <div key={c._id}
      className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition">

      <h2 className="text-xl font-semibold mb-3">
       {c.caseId}
      </h2>

      <p className="text-gray-600 text-sm mb-3">
       {c.description}
      </p>

      <div className="flex justify-between items-center">

       <span
        className={`px-3 py-1 rounded-full text-sm text-white ${getStatusColor(c.status)}`}>
        {c.status}
       </span>

       <span className="text-gray-500 text-sm">
        {new Date(c.createdAt).toLocaleDateString()}
       </span>

      </div>

     </div>

    ))}

   </div>

  </div>

 )
}