<template>
  <v-app dark>
    <Navbar />
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

export default {
  components: { Footer, Search },

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
