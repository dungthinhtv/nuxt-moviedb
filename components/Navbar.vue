<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>
        <v-icon color="pink" size="64px">mdi-video</v-icon>
        MovieDB
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
          link
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
        >
          {{ item.title }}</v-btn
        >
        <!-- <v-btn text link>TV Series</v-btn>
        <v-btn text link>Actor</v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Movies", link: "/movies" },
      { title: "TV Series", link: "/tv-series" },
      { title: "Actors", link: "/actors" },
    ],
  }),
};
</script>

<style></style>
