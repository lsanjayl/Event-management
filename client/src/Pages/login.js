import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../services/authservice";
import { Navbar, Container } from 'react-bootstrap';
import image from "../Images/loginimage.png"
import logo from "../Images/logo.png"
// import background from "./background.svg"
const Login = () => {
  const { login } = useUserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const user= localStorage.getItem("email");
  if(user){
    if(((user).slice(0, -17))==="admin"){
      navigate("/admin");
    }
    else{
      navigate("/");
    }
  }
  const reset = () => {
    setEmail('')
    setPassword('')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("");
    try {
      await login(email, password);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      const club = email.slice(0, -17)
      if (club === "admin") {
        navigate("/admin")
      } else {
        navigate("/")
      }

      reset();
    }
    catch (e) {
      setError(e.message)
      reset()
      alert(e.message);
    }
  }

  return (
    <div style={{backgroundColor:"#D4F1F4",height:"100vh",display: 'flex', justifyContent:'space-between',flexDirection:"column"}}>
      <Navbar  variant="dark" style={{backgroundColor:"#003d55"}}>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
          <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img
              src={logo}
              height="70px"
              className="d-inline-block align-top"
              alt="logo"
            />
            <Navbar.Brand href="/" style={{fontWeight:"400"}}>Event manager</Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Brand href="/" style={{fontWeight:"400"}}> Clubs and Cells</Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ display: 'flex', justifyContent:'center', alignItems:"center"}}>
      <img
                        src={image}
                        height="250px"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
        <hr style={{width: "3px",height:"200px",display:"inline-block",color:"#6d6d6d"}}></hr>
        <form style={{ width: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center',margin:"20px" }} onSubmit={handleSubmit}>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color:"#6d6d6d"}}>Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" value={email} onChange={(e) => { setEmail(e.target.value) }} style={{backgroundColor:"#c2e3e7",borderStyle:"solid",borderColor:"#10c0cc",borderWidth:"1px"}}/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label" style={{color:"#6d6d6d"}}>Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" value={password} onChange={(e) => { setPassword(e.target.value) }} style={{backgroundColor:"#c2e3e7",borderStyle:"solid",borderColor:"#10c0cc",borderWidth:"1px"}}/>
            </div>
          </div>
          <button type="submit" class="btn"style={{backgroundColor:"#10c0cc",color:"white"}}>Sign in</button>
        </form>
      </div>
      <p style={{margin:"6px",padding:"0px",textAlign:"right",fontSize:"1rem",color:"#003d55",fontWeight:"600"}}>Made with❤️️by <a href="https://github.com/lsanjayl" target="_blank"style={{color:"#10c0cc"}}>|sanjay|</a></p>
    </div>
  )
}
export default Login;