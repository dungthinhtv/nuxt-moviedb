<template>
  <div>
    <v-row>
      <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id">
        <a href="#" class="title" style="text-decoration: none;">{{ movie.original_name }}</a>
        <TvCard :movie="movie" />
        <!-- {{ movie.id }} -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
    },
  },
};
</script>

<style></style>
