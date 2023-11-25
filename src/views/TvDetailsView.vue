<script setup>
import { onMounted } from 'vue';
import { useTvStore } from '@/stores/tv';

const tvStore = useTvStore();

const props = defineProps({
    tvId: {
        type: String,
        required: true,
    },
});

onMounted(async () => {
    await tvStore.getTvDetail(props.tvId);
});
</script>

<template>
    <div class="main">
        <div class="content">
            <img :src="`https://image.tmdb.org/t/p/w185${tvStore.currentTv.poster_path}`"
                :alt="tvStore.currentTv.name" />

            <div class="details">
                <h1>{{ tvStore.currentTv.name }}</h1>
                <p>Tagline: {{ tvStore.currentTv.tagline }}</p>
                <p>Overview {{ tvStore.currentTv.overview }}</p>
                <p>Avaliação: {{ tvStore.currentTv.vote_average }}</p>
            </div>
        </div>
    </div>

    <p>Produtoras</p>
    <div class="companies">
        <template v-for="company in tvStore.currentTv.production_companies" :key="company.id">
            <img v-if="company.logo_path" :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`" :alt="company.name" />
            <p v-else>{{ company.name }}</p>
        </template>
    </div>
</template>

<style scoped>
.companies {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
    align-items: center;
    margin-bottom: 2rem;
}
</style>