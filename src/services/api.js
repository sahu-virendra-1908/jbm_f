import axios from "axios"

const API = axios.create({
 baseURL: "http://localhost:5000/api"
})

API.interceptors.request.use((config)=>{

 const token = localStorage.getItem("token")

 if(token){
  config.headers.Authorization = `Bearer ${token}`
 }

 return config
})

export const registerUser = (data)=>
 API.post("/auth/register",data)

export const loginUser = (data)=>
 API.post("/auth/login",data)

export const createCase = (data)=>
 API.post("/cases/create",data)

export const uploadEvidence = (data)=>
 API.post("/evidence/upload",data)

export const getEvidence = (caseId)=>
 API.get(`/evidence/${caseId}`)
export const getMyCases = () =>
 API.get("/cases/my")

export const getCaseDetails = (id)=>
 API.get(`/cases/${id}`)
export default API
