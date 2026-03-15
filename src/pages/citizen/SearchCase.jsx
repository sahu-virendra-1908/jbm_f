import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchCase(){

 const [caseId,setCaseId] = useState("")
 const navigate = useNavigate()

 const handleSearch = (e)=>{

  e.preventDefault()

  if(!caseId){
   alert("Enter Case ID")
   return
  }

  navigate(`/case/${caseId}`)

 }

 return(

  <div className="min-h-screen bg-blue-50 flex items-center justify-center">

   <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

    <h1 className="text-2xl font-bold text-blue-700 mb-6">
     Track Your Case
    </h1>

    <form onSubmit={handleSearch} className="space-y-4">

     <input
      type="text"
      placeholder="Enter Case ID"
      value={caseId}
      onChange={(e)=>setCaseId(e.target.value)}
      className="w-full border border-blue-200 p-3 rounded-lg"
     />

     <button
      className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">

      View Case

     </button>

    </form>

   </div>

  </div>

 )

}