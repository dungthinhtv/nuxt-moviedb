<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3"> <LeftMovieInfo :data="data" /> </v-col>
      <v-col cols="12" sm="9">
        <div class="d-md-flex align-center">
          <h2 class="display-2 font-weight-bold">{{ data.title }}</h2>
          <span class="display-1 ml-2 grey--text font-weight-light">{{
            data.release_date
          }}</span>
          <v-spacer></v-spacer>
          <Rating :data="data" />
        </div>
        <SocialShare />
        <v-divider class="mt-8" />
        <v-row class="mt-2">
          <v-col cols="12" sm="8">
            <h4 class="pink--text font-weight-bold title">Overview</h4>
            <p class="grey--text-darken">
              {{ data.overview }}
            </p>
            <!-- Image Slide  -->
            <h4 class="pink--text font-weight-bold title">Images</h4>
            <v-slide-group multiple show-arrows>
              <v-slide-item
                v-for="(image, index) in data.images.backdrops"
                :key="index"
                v-slot="{ toggle }"
              >
                <v-card
                  @click="toggle"
                  class="ma-4"
                  :href="`https://image.tmdb.org/t/p/w1280${image.file_path}`"
                  target="_blank"
                >
                  <v-img
                    cover
                    width="100"
                    height="160"
                    :src="`https://image.tmdb.org/t/p/w300${image.file_path}`"
                  ></v-img>
                </v-card>
              </v-slide-item>
            </v-slide-group>

            <!-- Casts -->
            <h4 class="pink--text font-weight-bold title">Casts</h4>
            <v-responsive>
              <v-virtual-scroll
                :height="300"
                :item-height="48"
                :items="data.credits.cast"
              >
                <template v-slot:default="{ item }">
                  <v-list-item :key="item.id">
                    <v-list-item-avatar>
                      <v-img :src="getCastAvatar(item)" />
                    </v-list-item-avatar>
                    <v-list-item-title>
                      {{ item.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.character }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </template>
              </v-virtual-scroll>
            </v-responsive>
          </v-col>
          <v-col cols="12" sm="4">
            <RightMovieInfo :data="data" />
          </v-col>
        </v-row>
        <!-- RECOMMEDATION -->
        <h4 class="pink--text font-weight-bold title mt-4">Recommendations</h4>
        <v-row class="mt-2 mb-4">
          <v-col
            cols="4"
            sm="2"
            v-for="recommend in recommendations"
            :key="recommend.id"
          >
            <v-card :to="`/movie/${recommend.id}`" nuxt>
              <v-img
                :src="`https://image.tmdb.org/t/p/w300${recommend.poster_path}`" /></v-card
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LeftMovieInfo from '../../components/LeftMovieInfo.vue';
import Rating from '../../components/Rating.vue';
import SocialShare from '../../components/SocialShare.vue';
import RightMovieInfo from '../../components/RightMovieInfo.vue';
export default {

  async asyncData({ params, $axios }) {
    try {
      const res = await $axios.$get(
        `/movie/${params.id}?append_to_response=credits,videos,images`
      );
      const res2 = await $axios.$get(`/movie/${params.id}/recommendations`);

      return {
        data: res,
        recommendations: res2.results.slice(0, 6),
      };
    } catch (e) {
      console.log(e);
    }
  },
  head(){
    return {
      title: this.data.title,
      meta: [
        { hid: 'description', name: 'description', content: this.data.overview },
        { hid: 'keywords', name: 'keywords', content: this.data.title + ', Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast' },
        { hid: 'og:title', name: 'og:title', content:  this.data.title },
        { hid: 'og:description', name: 'og:description', content: this.data.overview },
        { hid: 'og:image', name: 'og:image', content: 'https://image.tmdb.org/t/p/w500' + this.data.poster_path },
        { hid: 'og:type', name: 'og:type', content: 'video.movie' },
        { hid: 'og:locale', name: 'og:locale', content: 'en_US' },
        { hid: 'og:url', name: 'og:url', content: 'https://www.dungthinh.com/movie/' + this.data.id + '-' + this.slugTitle},
        { hid: 'og:site_name', name: 'og:site_name', content: 'HD Movies Store' },


      ]
    }
  },

  computed: {
    slugTitle: function() {
      var slug = this.sanitizeTitle(this.data.title)
      return slug;
    }
  },

  methods: {
    getCastAvatar(item) {
      if (item.profile_path) {
        return 'https://www.themoviedb.org/t/p/w45' + item.profile_path;
      }
      return 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
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
      slug = slug.replace(':', '');
      
      return slug;
    }
  },
  components: { LeftMovieInfo, Rating, SocialShare, RightMovieInfo },
};


</script>

<style></style>
