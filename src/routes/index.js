import { Routes, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/register" element={<SignUp />} />
  </Routes>
)

export default RoutesApp
