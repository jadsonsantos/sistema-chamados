import { FiSettings } from 'react-icons/fi'
import Header from '../../components/Header'
import Title from '../../components/Title'

const Profile = () => {
  return (
    <div className="content__general">
      <Header />
      <div className="content__main">
        <Title name="Minha Conta">
          <FiSettings size={25} />
        </Title>
        <h1>Profile</h1>
      </div>
    </div>
  )
}

export default Profile
