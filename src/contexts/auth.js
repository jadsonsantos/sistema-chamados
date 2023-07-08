import { useState, createContext, useEffect } from 'react'
import { auth, db } from '../services/firebase-connection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false)

  const signIn = (email, password) => {
    getDoc()
    alert('logado com sucesso')
    console.log(email, password)
  }

  const signUp = async (name, email, password) => {
    setLoadingAuth(true)
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid
        await setDoc(doc(db, 'users', uid), {
          name: name,
          avatarUrl: null,
        }).then(() => {
          let data = {
            uid: uid,
            name: name,
            email: value.user.email,
            avatarUrl: null,
          }

          setUser(data)
          storageUser(data)
          setLoadingAuth(false)
          toast.success('Seja bem-vindo(a) ao sistema')
          navigate('/dashboard')
        })
      })
      .catch((error) => {
        console.log(error)
        setLoadingAuth(false)
      })
  }

  const storageUser = (data) => {
    localStorage.setItem('tickets', JSON.stringify(data))
  }

  useEffect(() => {
    setUser({ name: 'Jadson' })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        setUser,
        signIn,
        signUp,
        loadingAuth,
        storageUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
