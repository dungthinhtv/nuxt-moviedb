<template>
  <v-card :to="`/tv/${movie.id}`" nuxt>
    <div class="p">
      <img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        alt=""
        class="p-img"
      />
    </div>
    <!-- <v-img
      height="300"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
    ></v-img> -->
    <v-card-title>
      {{ movie.name }}&nbsp;
      <span class="grey--text subtitle">
        ({{
          movie.release_date
            ? movie.release_date.slice(0, 4)
            : movie.first_air_date.slice(0, 4)
        }})</span
      >
    </v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0" no-gutters>
        <v-col cols="12" class="d-flex" md="8"
          ><v-rating
            :value="movie.vote_average / 2"
            half-increments
            length="5"
            color="yellow"
            dense
            readonly
            size="16"
          >
          </v-rating>
          <span class="grey--text text-lighten-1 text-caption mr-2 mt-1">
            {{ movie.vote_average }}</span
          >
        </v-col>
      </v-row>
      <v-row v-if="this.$store.state.genres">
        <v-col cols="12">
          <v-chip
            v-for="genre in movie.genre_ids"
            :key="genre"
            label
            small
            color="pink"
            class="white--text mr-1 mb-sm-2"
          >
            {{ genreTypeName(genre) }}</v-chip
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      require: true,
    },
  },
  methods: {
    genreTypeName(genId) {
      for (const item of this.$store.state.tv_genres) {
        if (item.id == genId) return item.name;
      }
    },
  },
};
</script>

<style>
.p {
  height: 300px;
  overflow: hidden;
}

.p-img {
  width: 100%;
  transition: all 10s ease;
}

.p:hover .p-img {
  transform: translateY(-100%);
}
</style>
