import './SignUp.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  console.log(setEmail)

  return (
    <section className="signin">
      <form className="signin__form">
        <input
          type="text"
          placeholder="seu email"
          value={email}
          className="signin__button"
        />
        <input type="submit" value="acessar" className="signin__button" />
      </form>
      <Link to="/register" className="signin__link">
        Já possui uma conta? Faca login
      </Link>
    </section>
  )
}

export default SignUp
