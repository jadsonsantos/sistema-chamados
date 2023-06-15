import { FiSettings, FiUpload } from 'react-icons/fi'
import Header from '../../components/Header'
import Title from '../../components/Title'
import defaultAvatarImage from '../../assets/avatar.png'
import { AuthContext } from '../../contexts/auth'
import { useContext } from 'react'
import './Profile.scss'
import useProfile from './useProfile'

const Profile = () => {
  const { setUser, storageUser } = useContext(AuthContext)
  const {
    handleSubmit,
    handleFile,
    avatarUrl,
    setAvatarUrl,
    imageAvatar,
    setImageAvatar,
    name,
    setName,
    email,
    setEmail,
  } = useProfile()

  setEmail
  setUser
  storageUser
  setAvatarUrl
  imageAvatar
  setImageAvatar

  console.log(name)

  return (
    <div className="content__general">
      <Header />
      <div className="content__main">
        <Title name="Minha Conta">
          <FiSettings size={25} />
        </Title>
        <section>
          <form className="form" onSubmit={handleSubmit}>
            <label className="avatar">
              <FiUpload color="white" size={25} />
              <input type="file" accept="image/*" onChange={handleFile} />
              <img
                src={avatarUrl || defaultAvatarImage}
                alt={name || 'Foto de perfil'}
                width={250}
                height={250}
              />
            </label>
            <label>Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input type="email" value={email} disabled />
            <button type="submit">Salvar</button>
          </form>
        </section>
        <section>
          <button className="logout-btn">Sair</button>
        </section>
      </div>
    </div>
  )
}

export default Profile
