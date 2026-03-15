import { useState } from "react"
import { registerUser } from "../services/api"
import { useNavigate } from "react-router-dom"

export default function Register(){

 const navigate = useNavigate()

 const [form,setForm] = useState({
  username:"",
  phone:"",
  password:"",
  role:"citizen"
 })

 const handleChange = e=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 const handleSubmit = async(e)=>{
  e.preventDefault()

  await registerUser(form)

  navigate("/")
 }

 return(

  <div className="min-h-screen flex items-center justify-center bg-slate-900">

   <div className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-xl w-96">

    <h2 className="text-2xl font-bold mb-6 text-center">
     Register
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">

     <input
      name="username"
      placeholder="Username"
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-white/20"
     />

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

     <button className="w-full bg-green-600 p-3 rounded-lg hover:bg-green-700 transition">

      Register

     </button>

    </form>

   </div>

  </div>

 )

}
