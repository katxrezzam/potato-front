import {useState} from "react";
import { v4 as id4 } from 'uuid'
const useInputFile = () => {
  const [image, setImage] = useState(null)
  const [label, setLabel] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [newFileName, setNewFileName] = useState('')
  const handleChange = (e) => {
    const uploadedFile = e.target.files[0]
    if(!uploadedFile) {
      setLabel('')
      setImageUrl('')
      return
    }
    setLabel(uploadedFile.name)
    setImageUrl(URL.createObjectURL(uploadedFile))
    setImage(uploadedFile)
    setNewFileName(newNameBuilder(uploadedFile.name))
  }
  const newNameBuilder = (fileName) => {
    return `${id4()}.${fileName.split('.').pop()}`
  }
  return{
    image,
    label,
    imageUrl,
    handleChange,
    newFileName
  }
}
export default useInputFile