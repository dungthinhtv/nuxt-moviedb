<template>
  <v-card :to="`/person/${person.id}`" nuxt>
    <v-img
      height="300"
      :src="`https://image.tmdb.org/t/p/w500${person.profile_path}`"
    ></v-img>
    <v-card-title class="justify-center"> {{ person.name }} </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      require: true,
    },
  },
};
</script>
