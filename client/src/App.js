
import Dashboard from "./Pages/dashboard"
import Example from "./Pages/Report"
import Admin from "./Pages/admin"
import Clubmanagement from "./Pages/clubmanagement";
import { Route, Routes } from 'react-router-dom'
import Login from "./Pages/login"
import ProtectedRoute from './services/ProtectedRoute'
import { UserAuthContextProvider } from "./services/authservice";
function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/"
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
        <Route path="/clubmanagement"
         element={
        <ProtectedRoute>
          <Clubmanagement />
        </ProtectedRoute> 
        }
        />
        
        <Route path="/download" element={<ProtectedRoute><Example/></ProtectedRoute>}/>
      </Routes>
      </UserAuthContextProvider>
  );
  
   
    
}

export default App;