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
            <v-icon>mdi-youtube</v-icon>Trailer</v-btn
          ></template
        ><v-card>
          <v-list class="pa-0">
            <v-list-item class="pa-0">
              <v-list-item-content class="pa-0">
                <div class="iframe-container">
                  <iframe
                    allowfullscreen
                    :src="mediaUrl"
                    v-if="isTrailer"
                  ></iframe>
                </div>
                <v-btn @click="closeModal">
                  <v-icon dark>mdi-close</v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card></v-dialog
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

      <!-- WATCH NOW BUTTON  -->
      <v-btn
        v-if="data.original_title"
        :href="`https://somot.one/movie/${data.id}/${sanitizeTitle(data.original_title)}.html`"
        color="red"
        block
        depressed
        target="_blank"
        class="mt-2 black--text"
        ><v-icon>mdi-play-circle</v-icon>Watch Now</v-btn
      >

      <v-btn
        v-if="data.original_name"
        :href="`https://somot.one/serie/${data.id}/${sanitizeTitle(data.original_name)}.html`"
        color="red"
        block
        depressed
        target="_blank"
        class="mt-2 black--text"
        ><v-icon>mdi-play-circle</v-icon>Watch Now</v-btn
      >

      <!-- MOBILE BUTTON  -->
      <v-btn
        href="https://somot.one/"
        color="green"
        block
        depressed
        target="_blank"
        class="mt-2 black--text"
        ><v-icon>mdi-tablet-cellphone</v-icon>Mobile App</v-btn
      >

      <!-- TV BUTTON  -->
      <v-btn
        href="https://somot.one/"
        color="blue"
        block
        depressed
        target="_blank"
        class="mt-2 black--text"
        ><v-icon>mdi-television-play</v-icon>TV App</v-btn
      >
    </v-card-text></v-banner
  >
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  
  data() {
    return {
      dialog: false,
      mediaUrl: '',
      isTrailer: false,
    };
  },
  methods: {
    getTrailer() {
      if (!this.data.videos){
        return 'https://youtube.com/embed/IAdCsNtEuBU';
      }
      else{
        const video = this.data.videos.results.find((e) => {
          return e.type === 'Trailer';
        });

        if (video){
          console.log(video);
        return 'https://youtube.com/embed/' + video.key;


        }else{
          return 'https://youtube.com/embed/IAdCsNtEuBU';

        }
      }
    },
    closeModal() {
      this.dialog = false;
      this.isTrailer = false;
    },
    openYoutubeModal() {
      this.mediaUrl = this.getTrailer();
      this.isTrailer = true;
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
