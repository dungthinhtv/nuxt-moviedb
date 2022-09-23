<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <LeftPersonInfo :data="data" />
        <h4 class="pink--text font-weight-bold title">Known For</h4>
        <p class="grey--text-darken">{{ data.known_for_department }}</p>
      </v-col>
      <v-col cols="12" sm="9">
        <v-row class="mt-2">
          <v-col cols="12">
            <h4 class="pink--text font-weight-bold title">Overview</h4>
            <p class="grey--text-darken">
              {{ data.biography }}
            </p>
            <!-- Image Slide  -->
            <h4 class="pink--text font-weight-bold title">Images</h4>
            <v-slide-group multiple show-arrows>
              <v-slide-item
                v-for="(image, index) in data.images.profiles"
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
          </v-col>
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
import LeftPersonInfo from '../../components/LeftPersonInfo.vue';
export default {
  async asyncData({ params, $axios }) {
    try {
      const res = await $axios.$get(
        `/person/${params.id}?append_to_response=credits,videos,images`
      );
      return {
        data: res,
      };
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    getCastAvatar(item) {
      if (item.profile_path) {
        return 'https://www.themoviedb.org/t/p/w45' + item.profile_path;
      }
      return 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
    },
  },
  components: {
    LeftMovieInfo,
    Rating,
    SocialShare,
    RightMovieInfo,
    LeftPersonInfo,
  },
};
</script>

<style></style>
