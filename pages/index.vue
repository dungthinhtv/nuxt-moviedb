<template>
  <v-container>
    <SectionTitle title="Popular Movies" link="/movies" />
    <v-row v-if="movies">
      <v-col cols="12" sm="4" md="3" xs="6" v-for="movie in movies" :key="movie.id">
        <v-card :href="`https://flix.dungthinh.com/movie/${movie.id}/${sanitizeTitle(movie.original_title)}.html`" target="_blank" nuxt>
          <p class="original_title">{{ movie.original_title }}
          </p>
        </v-card>
        <MovieCard :movie="movie"/>
      </v-col>
    </v-row>
    <v-spacer class="mt-10"></v-spacer>
    <SectionTitle title="Upcoming Movies" link="/movies" />
    <v-row v-if="upcoming">
      <v-col cols="12" sm="4" v-for="movie in upcoming" :key="movie.id">
        <v-card :href="`https://flix.dungthinh.com/movie/${movie.id}/${sanitizeTitle(movie.original_title)}.html`" target="_blank" nuxt>
          <p class="original_title">{{ movie.original_title }}
          </p>
        </v-card>
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
  methods: {
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
  components: { MovieCard },
};
</script>

<style>
  
</style>
