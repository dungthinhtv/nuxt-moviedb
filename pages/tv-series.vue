<template>
  <v-container>
    <div class="text-center my-4">
      <v-btn value="popular" class="mr-2" @click="handleGetBy(`popular`)"
        >Popular</v-btn
      >
      <v-btn value="on_the_air" class="mr-2" @click="handleGetBy(`on_the_air`)"
        >On TV</v-btn
      >
      <v-btn value="top_rated" class="mr-2" @click="handleGetBy(`top_rated`)"
        >Top Rated</v-btn
      >
    </div>
    <v-row v-if="$fetchState.pending">
      <v-col cols="12" sm="3" v-for="s in 20" :key="s">
        <v-skeleton-loader type="image, list-item-two-line"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else-if="$fetchState.error">
      <h2 class="error">An error occurred!</h2>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id">
        <a href="#" class="original_title" style="text-decoration: none;">{{ movie.original_name }}</a>
        <TvCard :movie="movie" />
        <!-- {{ movie.id }} -->
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination
            :total-visible="10"
            v-model="currentPage"
            :length="totalPages"
            @input="handlePageChange"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TvCard from '../components/TvCard.vue';

export default {
  data() {
    return {
      movies: [],
      getBy: 'popular',
      totalResults: 1,
      totalPages: 1,
      currentPage:
        parseInt(this.$route.query.page) > 1
          ? parseInt(this.$route.query.page)
          : 1,
    };
  },
  async fetch() {
    await this.$axios
      .$get(`/tv/${this.getBy}?page=${this.currentPage}&language=vi`)
      .then((res) => {
        this.movies = res.results;
        this.totalPages = 500;
        this.totalResults = res.total_results;
        this.$router.push({ query: { page: this.currentPage } });
      });
  },
  methods: {
    handlePageChange(value) {
      this.currentPage = value;
      this.$fetch();
    },
    handleGetBy(value) {
      this.getBy = value;
      this.$fetch();
    },
  },
  components: { TvCard },
};
</script>

<style></style>
