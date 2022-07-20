import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../services/authservice";
import { Navbar, Container } from 'react-bootstrap';
const Login = () => {
  const { login } = useUserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const user= localStorage.getItem("email");
  if(user){
    if(((user).slice(3, -17))==="admin"){
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
      const club = email.slice(3, -17)
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
    <div>
      <Navbar bg="dark" variant="dark">
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
          <Navbar.Brand href="#home">
            <img
              src="https://www.shamsaalam.com/wp-content/uploads/2019/10/Sri-Sairam-college.png"
              width="160"
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/"> Clubs and Cells</Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form style={{ width: 400, height: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={handleSubmit}>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label" >Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>

      </div>
    </div>
  )
}
export default Login;