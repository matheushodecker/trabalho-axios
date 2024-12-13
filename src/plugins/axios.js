import axios from 'axios'

// API Token
// https://www.themoviedb.org/settings/api
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjY3YTNjMTA2YjY2YWJlYmU5ODkwZjQ1NjFmYzA2YiIsIm5iZiI6MTczMTM1MjE3NS4xNDEsInN1YiI6IjY3MzI1NjZmZjBjZDFhNmJmYzBmMTJmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qm6rpGjlQTwY0J7nTpzVY9eZlbse80WXmTagnSlfxrs'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${token}`
}
})

export default api