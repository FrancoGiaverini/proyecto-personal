import axios from 'axios'

const API_KEY = 'TU_API_KEY'
const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: API_KEY }
})


export async function enrichGame(gameName) {
  try {
    const response = await api.get('/games', {
      params: { search: gameName, page_size: 1 }
    })
    const data = response.data.results[0]
    if (!data) return null

    return {
      background_image: data.background_image,
      rating: data.rating,
      genres: data.genres.map(g => g.name).join(', ')
    }
  } catch (err) {
    console.error('Error enriqueciendo juego:', gameName, err)
    return null
  }
}

