<template>
  <v-card :to="`/movie/${movie.id}-${slugTitle}`" nuxt>
    <v-img
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      class="p-img"
    ></v-img>
    <v-card-title>
      {{ movie.title }}&nbsp;
      <span class="grey--text subtitle" v-if="movie.release_date">

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
            href="https://letesend.com/"
          >
          
            {{ genreTypeName(genre) }}</v-chip
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { title } from 'process';

export default {
  props: {
    movie: {
      type: Object,
      require: true,
    },
  },
  computed: {
    slugTitle: function() {
      var slug = this.sanitizeTitle(this.movie.original_title)
      return slug;
    }
  },
  methods: {
    genreTypeName(genId) {
      for (const item of this.$store.state.genres) {
        if (item.id == genId) return item.name;
      }
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
