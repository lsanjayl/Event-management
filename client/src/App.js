
import Dashboard from "./Pages/dashboard"
import Example from "./Pages/clientreport"
import Admin from "./Pages/admin"
import { Route, Routes } from 'react-router-dom'
import Login from "./Pages/login"
import ProtectedRoute from './services/ProtectedRoute'
import { UserAuthContextProvider } from "./services/authservice";
import Adminreport from "./Pages/adminreport"
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