import { useEffect, useState } from "react"
import { getMyCases } from "../../services/api"
import { useNavigate } from "react-router-dom"

export default function MyCases(){

 const [cases,setCases] = useState([])
 const navigate = useNavigate()

 useEffect(()=>{

  const fetchCases = async()=>{

   const res = await getMyCases()

   setCases(res.data)

  }

  fetchCases()

 },[])

 return(

  <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-10">

   <h1 className="text-3xl font-bold text-white mb-10">
    Track My Cases
   </h1>

   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {cases.map((c)=>(

     <div
      key={c._id}
      className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">

      <h2 className="text-xl font-bold text-blue-800">
       {c.caseId}
      </h2>

      <p className="text-gray-600 mt-2">
       {c.description}
      </p>

      <div className="flex justify-between mt-4">

       <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
        {c.status}
       </span>

       <button
        onClick={()=>navigate(`/case/${c.caseId}`)}
        className="text-blue-600 font-semibold">

        View

       </button>

      </div>

     </div>

    ))}

   </div>

  </div>

 )
}