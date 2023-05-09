import avatarImg from '../../assets/avatar.png'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Link } from 'react-router-dom'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'
import './Header.scss'

const Header = () => {
  const { user } = useContext(AuthContext)

  return (
    <header className="sidebar">
      <div className="sidebar__profile">
        <img
          className="sidebar__image"
          src={user?.avatarUrl || avatarImg}
          alt={user?.name || 'Foto do usuário'}
          title={user?.name || 'Foto do usuário'}
        />
      </div>
      <div className="sidebar__menu">
        <Link to="/dashboard" className="sidebar__link">
          <FiHome color="white" sizes={24} />
          Chamados
        </Link>
        <Link to="/customers" className="sidebar__link">
          <FiUser color="white" sizes={24} />
          Clientes
        </Link>
        <Link to="/profile" className="sidebar__link">
          <FiSettings color="white" sizes={24} />
          Perfil
        </Link>
      </div>
    </header>
  )
}

export default Header
