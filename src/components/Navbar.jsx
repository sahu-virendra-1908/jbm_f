export default function Navbar(){

 return(

  <div className="flex justify-between items-center p-4 bg-white/5 backdrop-blur-lg">

   <input
    placeholder="Search..."
    className="bg-white/10 p-2 rounded-lg"
   />

   <div className="flex items-center gap-4">

    <span>Virendra</span>

    <img
     src="https://i.pravatar.cc/40"
     className="rounded-full"
    />

   </div>

  </div>

 )

}
