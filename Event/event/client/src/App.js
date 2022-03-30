
import Dashboard from "./components/dashboard/dashboard"
// import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom'
import Login from "./components/login/login"
import Forms from "./components/forms/forms"
import { useState,useEffect } from "react";
import Axios from "axios"
function App() {
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

  return (
    // <div>
    //   {list.map((i)=>{
    //     return<div>
    //       <div>
    //         <h1>Title{i.Title}</h1>
    //         <h1>Theme{i.Theme}</h1>
    //         <h1>Date{i.Date}</h1>
    //         <h1>Duration{i.Duration}</h1>
    //       </div>
          
    //       </div>
    //    })} 
    //    <div>
    //         <input type="text" placeholder="Title" onChange={(event)=>{
    //           setTitle(event.target.value)
    //         }}></input>
    //         <input type="text" placeholder="Theme" onChange={(event)=>{
    //           setTheme(event.target.value)
    //         }}></input>
    //         <input type="text" placeholder="Date" onChange={(event)=>{
    //           setDate(event.target.value)
    //         }}></input>
    //         <input type="text" placeholder="Duration" onChange={(event)=>{
    //           setDuration(event.target.value)
    //         }}></input>
    //         <button onClick={createUser}> create user</button>
    //       </div>
    // </div>
    // <Login/>

    <Dashboard/>
    // <Forms/>

    //<Dashboard/>
    // <Forms/>
  );
  
   
    
}

export default App;