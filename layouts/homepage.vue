<template>
  <v-app dark>
    <Navbar />
    <Slider class="hidden-sm-and-down" />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
    <v-overlay :value="overlay" dark opacity="0.9">
      <Search />
      <v-btn v-if="overlay" @click="overlay = false">Close</v-btn>
    </v-overlay>
  </v-app>
</template>

<script>
import Footer from '../components/Footer.vue';
import Search from '../components/Search.vue';
import Slider from '../components/Slider.vue';
export default {
  components: { Footer, Search, Slider },

  data() {
    return {
      overlay: false,
    };
  },
  created() {
    this.$nuxt.$on('openOverlay', ($event) => (this.overlay = $event));
  },
  watch: {
    $route(to, from) {
      this.overlay = false;
    },
  },
};
</script>
<style>
  .original_title{
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: medium;
      color: green !important;
      text-align: center;
    }
  </style>
