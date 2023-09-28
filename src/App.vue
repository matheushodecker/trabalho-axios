<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const moviesGenres = ref([])
const TVGenres = ref([])

onMounted(async () => {
  let response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR', {
    headers: {
      Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJjMjYwNWZjNjA2OWY4MjkxMjBjNjM2NWZiNzZhNiIsInN1YiI6IjY1MTU3MjFlZWE4NGM3MDEyZDY2MDVhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JIzVxsu9MttY1gjCq76Yem6MupszL2wrLEWJ9LNYoGY'
    }
  })
  moviesGenres.value = response.data.genres
  response =  await axios.get('https://api.themoviedb.org/3/genre/tv/list?language=pt-BR', {
    headers: {
      Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJjMjYwNWZjNjA2OWY4MjkxMjBjNjM2NWZiNzZhNiIsInN1YiI6IjY1MTU3MjFlZWE4NGM3MDEyZDY2MDVhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JIzVxsu9MttY1gjCq76Yem6MupszL2wrLEWJ9LNYoGY'
    }
  })
  TVGenres.value = response.data.genres
})
</script>

<template>
  <h1>Gêneros de filmes</h1>
  <ul>
    <li v-for="genre in moviesGenres" :key="genre.id">
      {{ genre.name }} 
    </li>
  </ul>
  <hr />
  <h1>Gêneros de séries</h1>
  <ul>
    <li v-for="genre in TVGenres" :key="genre.id">
      {{ genre.name }}
    </li>
  </ul>
</template>