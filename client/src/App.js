
import Dashboard from "./Pages/dashboard"
import Example from "./Pages/clientreport"
import Admin from "./Pages/admin"
import { Route, Routes } from 'react-router-dom'
import Login from "./Pages/login"
import ProtectedRoute from './services/ProtectedRoute'
import { UserAuthContextProvider } from "./services/authservice";
import Adminreport from "./Pages/adminreport"
import { useNavigate } from "react-router-dom";
function App() {
  const navigate=useNavigate();
  window.onbeforeunload = async(e) => {
    // I'm about to refresh! do something...
    const email= localStorage.getItem("email");
    const password= localStorage.getItem("password");
    if(email && password){
    const club=email.slice(3,-17)
    if(club==="admin"){
      navigate("/admin")
    }else{
      console.log(email);
      navigate("/dashboard")
      e.preventDefault()
    }
    }
    else{
      navigate("/")
    }
    };

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
        <Route path="/admin"
         element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute> 
        }
        />
        <Route path="/admindownload"element={<ProtectedRoute><Adminreport/></ProtectedRoute>}/>
        <Route path="/download" element={<ProtectedRoute><Example/></ProtectedRoute>}/>
      </Routes>
      </UserAuthContextProvider>
  );
  
   
    
}

export default App;