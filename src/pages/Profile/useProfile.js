import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { toast } from 'react-toastify'
import { doc, updateDoc } from 'firebase/firestore'
import { db, storage } from '../../services/firebase-connection'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const useProfile = () => {
  const { user, setUser, storageUser } = useContext(AuthContext)

  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
  const [imageAvatar, setImageAvatar] = useState(null)
  const [name, setName] = useState(user && user.name)
  const [email, setEmail] = useState(user && user.email)

  const updateName = async () => {
    const docRef = doc(db, 'users', user.id)
    await updateDoc(docRef, {
      name: name,
    }).then(() => {
      let data = {
        ...user,
        name: name,
      }

      setUser(data)
      storageUser(data)
      toast.success('Atualizado com sucesso')
    })
  }

  const handleUpload = async () => {
    const currentUid = user.Uid
    const uploadRef = ref(storage, `images/${currentUid}/${imageAvatar.name}`)
    // const uploadTask =
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (imageAvatar === null && name !== '') {
      updateName()
    } else if (imageAvatar !== null && name !== '') {
      // atualizar nome e foto
      handleUpload()
    }
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
