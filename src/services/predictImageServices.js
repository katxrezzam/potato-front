import axios from 'axios'

const API_BASE_URL = 'http://127.0.0.1:8000/predict/api/v1'

export async function predictImage(image) {
  try {
    const response = await axios.post(`${API_BASE_URL}/prediction/`, {image}, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    return response.data
  } catch (error) {
    console.error(error.message)
    throw error
  }
}