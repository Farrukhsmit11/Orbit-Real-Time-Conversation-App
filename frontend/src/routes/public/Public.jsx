import { Route, Routes } from "react-router-dom"
import Login from "../../pages/auth/login/Login"

const Public = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
        </Routes>
    )
}

export default Public