import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'

const Private = ({ children }) => {
  const { signed, loading } = useContext(AuthContext)

  if (loading) <div></div>

  if (!signed) <Navigate to="/" />

  return children
}

export default Private
