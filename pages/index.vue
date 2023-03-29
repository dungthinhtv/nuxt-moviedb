<template>
  <v-container>
    <SectionTitle title="Popular Movies" link="/movies" />
    <v-row v-if="movies">
      <v-col cols="12" sm="4" v-for="movie in movies" :key="movie.id">
        <a href="#" class="title" style="text-decoration: none;">{{ movie.original_title }}</a>
        <MovieCard :movie="movie"/>
      </v-col>
    </v-row>
    <v-spacer class="mt-10"></v-spacer>
    <SectionTitle title="Upcoming Movies" link="/movies" />
    <v-row v-if="upcoming">
      <v-col cols="12" sm="4" v-for="movie in upcoming" :key="movie.id">
        <a href="#" class="title" style="text-decoration: none;">{{ movie.original_title }}</a>
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';
export default {
  async asyncData({ $axios }) {
    try {
      const res = await $axios.$get('/movie/popular?language=vi');

      const res2 = await $axios.$get('/movie/upcoming?language=vi');

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
