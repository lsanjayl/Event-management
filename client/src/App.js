
import Dashboard from "./components/dashboard/dashboard"
import Example from "./components/dashboard/downloadbutton"
import Admin from "./components/dashboard/admin"
import { Route, Routes } from 'react-router-dom'
import Login from "./components/login/login"
import ProtectedRoute from './services/ProtectedRoute'
import { UserAuthContextProvider } from "./services/authservice";
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
          <Admin/>
        </ProtectedRoute> 
        }
        />
        <Route path="/download" element={<ProtectedRoute><Example/></ProtectedRoute>}/>
      </Routes>
      </UserAuthContextProvider>
  );
  
   
    
}

export default App;