import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { toast } from 'react-toastify'

const useProfile = () => {
  const { user } = useContext(AuthContext)

  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
  const [imageAvatar, setImageAvatar] = useState(null)
  const [name, setName] = useState(user && user.name)
  const [email, setEmail] = useState(user && user.email)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('teste')
  }

  const handleFile = (e) => {
    const image = e.target.files[0]

    if (image) {
      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        setImageAvatar(image)
        setAvatarUrl(URL.createObjectURL(image))
      } else {
        toast.error('Envie uma imagem do tipo PNG ou JPEG')
        setImageAvatar(null)
        return
      }
    }
  }

  return {
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
  }
}

export default useProfile
