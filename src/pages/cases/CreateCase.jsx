import { useState } from "react"
import { createCase } from "../../services/api"

export default function CreateCase(){

 const [form,setForm] = useState({
  citizenPhone:"",
  description:""
 })

 const [loading,setLoading] = useState(false)

 const handleChange=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 const handleSubmit = async(e)=>{

  e.preventDefault()

  try{

   setLoading(true)

   const res = await createCase(form)

   alert("Case Created: "+res.data.caseId)

   setForm({
    citizenPhone:"",
    description:""
   })

  }catch(err){

   console.log(err.response?.data)

   alert("Case creation failed")

  }

  setLoading(false)

 }

 return(

  <div className="p-10">

   <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-8">

    <h2 className="text-2xl font-bold mb-6">
     Register New Case
    </h2>

    <form onSubmit={handleSubmit} className="space-y-5">

     <div>

      <label className="text-sm text-gray-300">
       Citizen Mobile Number
      </label>

      <input
       name="citizenPhone"
       value={form.citizenPhone}
       onChange={handleChange}
       placeholder="Enter citizen phone"
       className="w-full mt-2 p-3 rounded-lg bg-white/20"
      />

     </div>

     <div>

      <label className="text-sm text-gray-300">
       Case Description
      </label>

      <textarea
       name="description"
       value={form.description}
       onChange={handleChange}
       rows="4"
       placeholder="Describe case details"
       className="w-full mt-2 p-3 rounded-lg bg-white/20"
      />

     </div>

     <button
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg">

      {loading ? "Creating Case..." : "Create Case"}

     </button>

    </form>

   </div>

  </div>

 )
}
