
import Dashboard from "./components/dashboard/dashboard"
import { Route, Routes } from 'react-router-dom'
import Login from "./components/login/login"
import ProtectedRoute from './services/ProtectedRoute'
import { useState,useEffect } from "react";
import { UserAuthContextProvider } from "./services/authservice";
function App() {
<<<<<<< HEAD
=======
  const[list,setList]=useState([])
  const [Title,setTitle]=useState("")
  const [Theme,setTheme]=useState("")
  const [Date,setDate]=useState("")
  const [Duration,setDuration]=useState("")
  
useEffect(()=>{
  Axios.get("http://localhost:3001/forms").then((response)=>{
    setList(response.data);
  });
  
}, []);
const createUser=()=>{
  Axios.post("http://localhost:3001/createuser",{
    Title,
    Theme,
    Date,
    Duration,  
  }).then((response)=>{
    setList([...list,{Title,Theme,Date,Duration}])
})
}

>>>>>>> 879d4996f4a9d69e4bcbdab698a375b21e697108
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard"
         element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
        }
        />
      </Routes>
      </UserAuthContextProvider>
  );
  
   
    
}

export default App;