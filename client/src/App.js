
import Dashboard from "./components/users/dashboard"
import Example from "./components/users/clientreport"
import Admin from "./components/adminComponents/admin"
import { Route, Routes } from 'react-router-dom'
import Login from "./components/login/login"
import ProtectedRoute from './services/ProtectedRoute'
import { UserAuthContextProvider } from "./services/authservice";
import Adminreport from "./components/adminComponents/adminreport"
function App() {
  
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