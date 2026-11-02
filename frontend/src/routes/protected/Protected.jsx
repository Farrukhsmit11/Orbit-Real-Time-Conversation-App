import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'

const Protected = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default Protected