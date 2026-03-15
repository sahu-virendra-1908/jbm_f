import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import CreateCase from "./pages/cases/CreateCase"
import UploadEvidence from "./pages/cases/UploadEvidence"
import TrackCases from "./pages/citizen/TrackCases"
import MyCases from "./pages/citizen/MyCases"
import CaseDetails from "./pages/citizen/CaseDetails"


function App() {

 return (
  <BrowserRouter>

   <Routes>

    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/create-case" element={<CreateCase/>}/>
     <Route path="/upload-evidence" element={<UploadEvidence/>}/>
     <Route path="/my-cases" element={<TrackCases />} />
     <Route path="/case/:id" element={<CaseDetails />} />
   </Routes>

  </BrowserRouter>
 )

}

export default App
