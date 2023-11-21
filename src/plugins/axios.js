import axios from 'axios'

// API Token
// https://www.themoviedb.org/settings/api
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJjMjYwNWZjNjA2OWY4MjkxMjBjNjM2NWZiNzZhNiIsInN1YiI6IjY1MTU3MjFlZWE4NGM3MDEyZDY2MDVhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JIzVxsu9MttY1gjCq76Yem6MupszL2wrLEWJ9LNYoGY'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${token}`
}
})

export default api