import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function Dashboard(){

 return(

  <div className="flex">

   <Sidebar/>

   <div className="flex-1">

    <Navbar/>

    <div className="p-6 grid grid-cols-3 gap-6">

     <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">

      <h3>Total Cases</h3>
      <p className="text-3xl font-bold">24</p>

     </div>

     <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">

      <h3>Under Investigation</h3>
      <p className="text-3xl font-bold">8</p>

     </div>

     <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">

      <h3>Closed Cases</h3>
      <p className="text-3xl font-bold">16</p>

     </div>

    </div>

   </div>

  </div>

 )

}
