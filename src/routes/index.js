import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
)

export default RoutesApp
