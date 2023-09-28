import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJjMjYwNWZjNjA2OWY4MjkxMjBjNjM2NWZiNzZhNiIsInN1YiI6IjY1MTU3MjFlZWE4NGM3MDEyZDY2MDVhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JIzVxsu9MttY1gjCq76Yem6MupszL2wrLEWJ9LNYoGY'
}
})

export default api