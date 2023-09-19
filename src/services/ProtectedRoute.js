import Reacr from "react"
import { Navigate } from "react-router-dom"
import { useUserAuth } from "./authservice"

const ProtectedRoute = ({ children }) => {
    const user= localStorage.getItem("email");
    console.log(user)
    if (!user) {
        return <Navigate to="/login" />
    }
    return children;
}
export default ProtectedRoute;