import { useState } from "react"
import { loginUser } from "../services/api"
import { useNavigate } from "react-router-dom"

export default function Login(){

 const navigate = useNavigate()

 const [form,setForm] = useState({
  phone:"",
  password:""
 })

 const handleChange = e=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 const handleSubmit = async(e)=>{
  e.preventDefault()

  const res = await loginUser(form)

  localStorage.setItem("token",res.data.token)

  navigate("/dashboard")
 }

 return(

  <div className="min-h-screen flex items-center justify-center bg-slate-900">

   <div className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-xl w-96">

    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

    <form onSubmit={handleSubmit} className="space-y-4">

     <input
      name="phone"
      placeholder="Phone"
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-white/20"
     />

     <input
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-white/20"
     />

     <button
      className="w-full bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition"
     >
      Login
     </button>

    </form>

   </div>

  </div>

 )

}
