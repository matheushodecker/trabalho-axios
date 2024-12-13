<script setup>
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Series</router-link>
    </nav>
  </header>
  <main>
    <section>
      <router-view />  
    </section>
   
  </main>
</template>

<style scoped>
header {
  height: 3rem;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #fff;
}


section {

    min-height: 100vh;
    background: linear-gradient(-45deg, #ff0000, #000000, #ff0000, #000000);
    background-size: 400% 400%;
    animation: Gradient 15s ease-in-out infinite;
}

h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 2em;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-family: 'Lato';
    border: 1px solid #fff;
}
@keyframes Gradient {
    0%{ background-position: 00% 25%}
    12.5%{ background-position: 25% 50%}
    25%{ background-position: 50% 75%}
    37.5%{ background-position: 75% 100%}
    50%{ background-position: 100% 75%}
    62.5%{ background-position: 75% 50%}
    75%{ background-position:50% 25%}
    87.5%{ background-position: 25% 0%}
    100%{ background-position: 00% 25%}
  


}

</style>


<style>
::-webkit-scrollbar {
    width: 0px;
}
:root {
  --primary-bg: #121212;
  --secondary-bg: #1e1e1e;
  --primary-text: #ffffff;
  --secondary-text: #b3b3b3;
  --accent-color: #e50914;
  --hover-color: #ff3d3d;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: var(--primary-bg);
  color: var(--primary-text);
  margin: 0;
  padding: 0;
  
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  height: 4rem;
  background-color: var(--secondary-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: var(--primary-text);
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav a:hover,
nav a.router-link-active {
  color: var(--accent-color);
}



h1 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(white);
}

.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  margin-bottom: 2rem;
  padding: 0;
}

.genre-item {
  background-color: var(--secondary-bg);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  color: var(--primary-text);
  cursor: pointer;
  transition: all 0.3s ease;
}

.genre-item:hover,
.genre-item.active {
  background-color: var(--accent-color);
  box-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
}

.movie-list,
.Tv-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  justify-content: center;
}

.movie-card,
.Tv-card {
  background-color: var(--secondary-bg);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover,
.Tv-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.movie-card img,
.Tv-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.movie-details,
.Tv-details {
  padding: 1rem;
}

.movie-title,
.Tv-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.movie-release-date,
.Tv-first-air-date {
  font-size: 0.9rem;
  color: var(--secondary-text);
  margin-bottom: 0.5rem;
}

.movie-genres,
.Tv-genres {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.movie-genres span,
.Tv-genres span {
  background-color: var(--accent-color);
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.movie-genres span:hover,
.Tv-genres span:hover,
.movie-genres span.active,
.Tv-genres span.active {
  background-color: var(--hover-color);
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.content img {
  width: 300px;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.details {
  max-width: 600px;
}

.details h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.details p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.companies {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}

.companies img {
  max-width: 100px;
  max-height: 50px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .details {
    text-align: center;
  }
}

</style>  