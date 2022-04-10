import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../services/authservice";
const Login=()=>{
  const{login}=useUserAuth();
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const[error,setError]=useState("");
  const reset=()=>{
    setEmail('')
    setPassword('')
  }
const handleSubmit=async (e)=>{
  e.preventDefault()
  setError("");
  try{
    await login(email,password);
    navigate("/dashboard")
    reset();
  }
  catch(e){
    setError(e.message)
    reset()
    alert(e.message);
  }
}

    return(
      <div style={{display:'flex',justifyContent:'center'}}>
      <form style={{width:400,height:600,display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={handleSubmit}>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3"value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label" >Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"value={password}onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

</div> 
    )
}
export default Login;