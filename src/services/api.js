
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1d595913240c43e9a8ef89d105f128be',
  },
})
