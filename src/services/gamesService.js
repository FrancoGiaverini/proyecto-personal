import axios from 'axios'

export async function getRetroGames() {
  try {
    const response = await axios.get('/games.json')
    return response.data
  } catch (error) {
    console.error('Error cargando juegos:', error)
    return []
  }
}

