import { useState } from 'react'
import '../Form.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="container-center signin">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do sistema de chamados" />
        </div>

        <form className="signin__form">
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signin__input"
          />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signin__button" type="submit">
            Acessar
          </button>
        </form>
        <Link className="signin__link" to="/register">
          Criar uma conta
        </Link>
      </div>
    </div>
  )
}

export default SignIn
