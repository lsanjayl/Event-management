
import Dashboard from "./Pages/dashboard"
import Example from "./Pages/Report"
import Admin from "./Pages/admin"
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
          <Dashboard/>
        }
        />
        <Route path="/admin"
         element={

          <Admin />

        }
        />
        <Route path="/download" element={<ProtectedRoute><Example/></ProtectedRoute>}/>
      </Routes>
      </UserAuthContextProvider>
  );
  
   
    
}

export default App;