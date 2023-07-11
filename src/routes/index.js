import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile'

import Private from './Private'

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/register" element={<SignUp />} />
    <Route
      path="/dashboard"
      element={
        <Private>
          <Dashboard />
        </Private>
      }
    />
    <Route path="/profile" element={<Profile />} />
  </Routes>
)

export default RoutesApp
