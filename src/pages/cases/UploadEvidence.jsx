import { useState } from "react"
import { uploadEvidence } from "../../services/api"

export default function UploadEvidence(){

 const [caseId,setCaseId] = useState("")
 const [file,setFile] = useState(null)

 const [preview,setPreview] = useState(null)

 const handleFile=(e)=>{

  const selected = e.target.files[0]

  setFile(selected)

  setPreview(URL.createObjectURL(selected))

 }

 const handleSubmit = async(e)=>{

  e.preventDefault()

  const formData = new FormData()

  formData.append("caseId",caseId)
  formData.append("file",file)

  try{

   await uploadEvidence(formData)

   alert("Evidence uploaded")

   setCaseId("")
   setFile(null)

  }catch(err){

   console.log(err)

   alert("Upload failed")

  }

 }

 return(

  <div className="p-10">

   <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-8">

    <h2 className="text-2xl font-bold mb-6">
     Upload Evidence
    </h2>

    <form onSubmit={handleSubmit} className="space-y-6">

     <input
      placeholder="Enter Case ID"
      value={caseId}
      onChange={(e)=>setCaseId(e.target.value)}
      className="w-full p-3 rounded-lg bg-white/20"
     />

     <input
      type="file"
      accept="image/*,video/*,audio/*,.pdf,.txt"
      onChange={handleFile}
      className="w-full p-3 bg-white/20 rounded-lg"
     />

     {preview && (
      <div className="mt-4">

       <p className="text-sm text-gray-300 mb-2">
        File Preview
       </p>

       <img
        src={preview}
        className="max-h-48 rounded-lg"
       />

      </div>
     )}

     <button className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-lg">

      Upload Evidence

     </button>

    </form>

   </div>

  </div>

 )
}
