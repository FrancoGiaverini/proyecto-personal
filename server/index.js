const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors()) // Permite que el frontend en localhost acceda

// Tu API key de RAWG
const RAWG_API_KEY = '99c8650ecbd845009e978527d576406c'

app.get('/api/games', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.rawg.io/api/games', {
      params: {
        key: RAWG_API_KEY,
        dates: '2020-01-01,2025-12-31',
        ordering: '-rating',
        page_size: 30
      }
    })
    res.json(data) // Devuelve los juegos al frontend
  } catch (error) {
    console.error('Error fetching RAWG API:', error.message)
    res.status(500).json({ error: 'No se pudieron cargar los juegos modernos.' })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`)
})
