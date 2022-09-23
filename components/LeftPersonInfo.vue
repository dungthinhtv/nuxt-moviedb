<template>
  <v-banner sticky shaped tile>
    <v-card
      :href="`https://image.tmdb.org/t/p/w1280${data.profile_path}`"
      nuxt
      target="_blank"
    >
      <v-img :src="`https://image.tmdb.org/t/p/w500${data.profile_path}`" />
    </v-card>
  </v-banner>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style></style>
