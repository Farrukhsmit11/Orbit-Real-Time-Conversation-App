import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../../pages/auth/login/Login"
import SignUp from "../../pages/auth/signUp/SignUp"
import Dashboard from "../../pages/Dashboard"

const Public = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/demo" element={<Dashboard />}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default Public