import {useEffect, useState} from "react";
import {predictImage} from "../services/predictImageServices.js";
import InputFile from "../components/InputFile.jsx";
import useInputFile from "../components/useInputFile.js";
import styles from './Predictions.module.css'

export default function Predictions() {

  const {handleChange, imageUrl, image, label, newFileName} = useInputFile()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [prediction, setPrediction] = useState({
    'disease': '',
    'score': 0
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image) return
    setIsLoading(true)
    try {
      const p = await predictImage(image)
      setPrediction(p)
      setError('')
    } catch (e) {
      setError('Ha ocurrido un error al predecir la imagen')
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    setError('')
    setIsLoading(false)
    setPrediction({
      'disease': '',
      'score': 0
    })
  }, [image]);
  return (
      <section className={styles.predictionContainer}>
        <h1>Predict a model</h1>
        <form onSubmit={handleSubmit}>
          <InputFile label={label} imageUrl={imageUrl} handleChange={handleChange}/>
          {imageUrl && (
              <div className={styles.imageLoadedContainer}>
                <img src={imageUrl} alt={label}/>
              </div>
          )}
          {image &&
              (
                  <button className={styles.buttonPredict} disabled={!image || !imageUrl}>Predict</button>
              )
          }
        </form>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
          {prediction.disease && (
              <div>
                <h1>{prediction.disease}</h1>
                <h2>{prediction.score}</h2>
              </div>
          )}
        </div>
      </section>
  )
}