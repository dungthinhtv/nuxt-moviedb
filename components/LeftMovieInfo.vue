<template>
  <v-banner sticky shaped tile
    ><v-img :src="`https://www.themoviedb.org/t/p/w500/${data.poster_path}`" />
    <v-card-text class="mt-4">
      <!-- TRAILER  -->
      <v-dialog v-model="dialog" persistent max-width="800">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="pink"
            block
            depressed
            class="white--text"
            v-bind="attrs"
            v-on="on"
            @click="openYoutubeModal"
          >
            <v-icon>mdi-arrow-right-drop-circle-outline</v-icon> Watch
            trailer</v-btn
          ></template
        ><v-card>
          <v-list class="pa-0">
            <v-list-item class="pa-0">
              <v-list-item-content class="pa-0">
                <div class="iframe-container">
                  <iframe
                    allowfullscreen
                    :src="mediaUrl"
                    v-if="isVideo"
                  ></iframe>
                </div>
                <v-btn @click="closeModal">
                  <v-icon dark>mdi-close</v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          </v-card
        ></v-dialog
      >

      <!-- HOMEPAGE BUTTON  -->
      <v-btn
        :href="data.homepage"
        color="yellow"
        block
        depressed
        target="_blank"
        class="mt-2 black--text"
        v-if="data.homepage"
        ><v-icon>mdi-home</v-icon>Homepage</v-btn
      >

      <!-- WATCH  -->
      <v-dialog v-model="dialogPlay" persistent max-width="800" v-if="hasVideo">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red"
            block
            depressed
            class="white--text mt-2"
            v-bind="attrs"
            v-on="on"
            @click="openVideoModal"
          >
            <v-icon>mdi-arrow-right-drop-circle-outline</v-icon> Watch</v-btn
          ></template
        >
        <v-card>
          <v-list class="pa-0">
            <v-list-item class="pa-0">
              <v-list-item-content class="pa-0">
                <div class="iframe-container">
                  <iframe
                    allowfullscreen
                    :src="hasVideo"
                    v-if="isPlay"
                  ></iframe>
                </div>
                <v-btn @click="closeModal">
                  <v-icon dark>mdi-close</v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-card-text></v-banner
  >
</template>

<script>
import streamData from '../streamsb.json';
export default {
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    hasVideo() {
      const film = this.arrVideos.find((e) => {
        return e.id === this.data.id;
      });
      // console.log(film);
      if (film) {
        return 'https://sblanh.com/e/' + film.link + '.html';
      }
      return;
    },
  },
  data() {
    return {
      dialog: false,
      mediaUrl: '',
      isVideo: false,

      arrVideos: streamData,
      dialogPlay: false,
      videoUrl: '',
      isPlay: false,
    };
  },
  methods: {
    getTrailer() {
      if (!this.data.videos) return;
      const video = this.data.videos.results.find((e) => {
        return e.type === 'Trailer';
      });
      // console.log(video);
      return 'https://youtube.com/embed/' + video.key;
    },
    getVideo() {
      const film = this.arrVideos.find((e) => {
        return e.id === this.data.id;
      });
      // console.log(film);
      if (film) {
        return 'https://sblanh.com/e/' + film.link + '.html';
      }
      return;
    },
    closeModal() {
      this.dialog = false;
      this.isVideo = false;
      this.dialogPlay = false;
      this.isPlay = false;
    },
    openYoutubeModal() {
      this.mediaUrl = this.getTrailer();
      this.isVideo = true;
    },

    openVideoModal() {
      this.isPlay = true;
    },
  },
};
</script>

<style>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}
.iframe-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
