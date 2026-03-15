import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function Dashboard(){

 const navigate = useNavigate()
 const [role,setRole] = useState("citizen")

 useEffect(()=>{
   const r = localStorage.getItem("role")
   if(r) setRole(r)
 },[])

 return(

  <div className="flex min-h-screen bg-white">

   {/* Sidebar */}
   <Sidebar/>

   <div className="flex-1">

    {/* Top Navbar */}
    <Navbar/>

    <div className="p-10">

     <h1 className="text-3xl font-bold text-sky-700 mb-8">
      Dashboard
     </h1>


     {/* ============================= */}
     {/* STATISTICS (POLICE + COURT) */}
     {/* ============================= */}

     {(role === "police" || role === "court") && (

      <div className="grid md:grid-cols-3 gap-8 mb-12">

       <div className="bg-white border border-sky-200 shadow-md rounded-2xl p-7 hover:shadow-lg transition">

        <h3 className="text-gray-500">
         Total Cases
        </h3>

        <p className="text-4xl font-bold text-sky-600 mt-3">
         24
        </p>

       </div>


       <div className="bg-white border border-sky-200 shadow-md rounded-2xl p-7 hover:shadow-lg transition">

        <h3 className="text-gray-500">
         Under Investigation
        </h3>

        <p className="text-4xl font-bold text-sky-600 mt-3">
         8
        </p>

       </div>


       <div className="bg-white border border-sky-200 shadow-md rounded-2xl p-7 hover:shadow-lg transition">

        <h3 className="text-gray-500">
         Closed Cases
        </h3>

        <p className="text-4xl font-bold text-sky-600 mt-3">
         16
        </p>

       </div>

      </div>

     )}


     {/* ============================= */}
     {/* POLICE PANEL */}
     {/* ============================= */}

     {role === "police" && (

      <div className="grid md:grid-cols-3 gap-8">

       <div
        onClick={()=>navigate("/create-case")}
        className="cursor-pointer bg-white border border-sky-200 rounded-2xl p-7 shadow hover:shadow-lg transition">

        <h2 className="text-xl font-semibold text-sky-700">
         Create Case
        </h2>

        <p className="text-gray-500 mt-2">
         Register a new investigation case
        </p>

       </div>


       <div
        onClick={()=>navigate("/upload-evidence")}
        className="cursor-pointer bg-white border border-sky-200 rounded-2xl p-7 shadow hover:shadow-lg transition">

        <h2 className="text-xl font-semibold text-sky-700">
         Upload Evidence
        </h2>

        <p className="text-gray-500 mt-2">
         Add digital evidence to blockchain
        </p>

       </div>

      </div>

     )}



     {/* ============================= */}
     {/* CITIZEN PANEL */}
     {/* ============================= */}

     {role === "citizen" && (

      <div className="grid md:grid-cols-3 gap-8">

       <div
        onClick={()=>navigate("/search-case")}
        className="cursor-pointer bg-white border border-sky-200 rounded-2xl p-7 shadow hover:shadow-lg transition">

        <h2 className="text-xl font-semibold text-sky-700">
         Track My Case
        </h2>

        <p className="text-gray-500 mt-2">
         Enter your Case ID and view progress
        </p>

       </div>


       <div
        onClick={()=>navigate("/case-research")}
        className="cursor-pointer bg-white border border-sky-200 rounded-2xl p-7 shadow hover:shadow-lg transition">

        <h2 className="text-xl font-semibold text-sky-700">
         AI Case Research
        </h2>

        <p className="text-gray-500 mt-2">
         Get AI guidance about legal steps
        </p>

       </div>

      </div>

     )}



     {/* ============================= */}
     {/* COURT PANEL */}
     {/* ============================= */}

     {role === "court" && (

      <div className="grid md:grid-cols-3 gap-8">

       <div
        onClick={()=>navigate("/my-cases")}
        className="cursor-pointer bg-white border border-sky-200 rounded-2xl p-7 shadow hover:shadow-lg transition">

        <h2 className="text-xl font-semibold text-sky-700">
         Review Cases
        </h2>

        <p className="text-gray-500 mt-2">
         View submitted cases and evidence
        </p>

       </div>

      </div>

     )}

    </div>

   </div>

  </div>

 )
}