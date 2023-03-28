<template>
  <v-container>
    <SectionTitle title="Popular Movies" link="/movies" />
    <v-row v-if="movies">
      <v-col cols="12" sm="4" v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
    <v-spacer class="mt-10"></v-spacer>
    <SectionTitle title="Upcoming Movies" link="/movies" />
    <v-row v-if="upcoming">
      <v-col cols="12" sm="4" v-for="movie in upcoming" :key="movie.id">
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';
export default {
  head() {
    return {
      meta:[
        { hid: 'description', name:'description', content:"This is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows." }
      ]
    }
  },
  async asyncData({ $axios }) {
    try {
      const res = await $axios.$get('/movie/popular?language=vi-VN');

      const res2 = await $axios.$get('/movie/upcoming?language=vi-VN');

      // console.log(res.results.slice(0, 6));
      return {
        movies: res.results.slice(0, 12),
        upcoming: res2.results.slice(0, 12),
      };
    } catch (e) {
      console.log(e);
    }
  },
  components: { MovieCard },
};
</script>
