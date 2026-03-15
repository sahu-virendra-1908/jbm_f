import { Link } from "react-router-dom"
import useRole from "../hooks/useRole"

export default function Sidebar(){

 const role = useRole()

 return(

  <div className="w-64 bg-white/5 backdrop-blur-xl h-screen p-6 border-r border-white/10">

   <h1 className="text-2xl font-bold mb-10">
    PoliceChain
   </h1>

   <nav className="space-y-5">

    <Link to="/dashboard" className="block hover:text-blue-400">
     Dashboard
    </Link>

    {(role === "police" || role === "judge") && (
     <Link to="/create-case" className="block hover:text-blue-400">
      Create Case
     </Link>
    )}

    {(role === "police" || role === "judge") && (
     <Link to="/upload-evidence" className="block hover:text-blue-400">
      Upload Evidence
     </Link>
    )}

   </nav>

  </div>

 )
}
