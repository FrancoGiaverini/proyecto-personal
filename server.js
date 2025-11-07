import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
app.use(cors()) // permite cualquier dominio

app.get('/api/games', async (req, res) => {
  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: {
        key: '1d595913240c43e9a8ef89d105f128be', // reemplaza esto por tu API key de RAWG
        page_size: 20
      }
    })
    res.json(response.data)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener juegos' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Backend corriendo en puerto ${PORT}`))
