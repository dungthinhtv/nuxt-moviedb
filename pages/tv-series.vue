<template>
  <v-container>
    <div class="text-center my-4">
      <v-btn value="on_the_air" class="ma-2" @click="handleGetBy(`on_the_air`)"
        >On The Air</v-btn
      >
      <v-btn value="airing_today" class="ma-2" @click="handleGetBy(`airing_today`)"
        >Airing Today</v-btn
      >
      <v-btn value="popular" class="ma-2" @click="handleGetBy(`popular`)"
        >Popular </v-btn
      >
      <v-btn value="top_rated" class="ma-2" @click="handleGetBy(`top_rated`)"
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
        <v-card :href="`https://somot.one/serie/${movie.id}/${sanitizeTitle(movie.original_name)}.html`" target="_blank" nuxt>
          <p class="original_title">{{ movie.original_name }}
          </p>
        </v-card>
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
      getBy: 'on_the_air',
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
    sanitizeTitle: function(title) {
      var slug = "";
      // Change to lower case
      var titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd');
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '');
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-');
      // Change whitespace to "-"
      slug = slug.replace(/:|\.|!/gm, '');
      
      return slug;
    }
  },
  components: { TvCard },
};
</script>

<style></style>
