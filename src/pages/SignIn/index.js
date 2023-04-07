import './SignIn.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
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
        Criar uma conta
      </Link>
    </section>
  )
}

export default SignIn
