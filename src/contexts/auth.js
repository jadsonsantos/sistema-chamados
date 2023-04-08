import { useState, createContext, useEffect } from 'react'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser({ name: 'Jadson' })
  }, [])

  return (
    <AuthContext.Provider value={{ signed: !!user, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
