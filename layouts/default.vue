<template>
  <v-app dark>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/Footer.vue';
export default { components: { Footer } };
</script>
