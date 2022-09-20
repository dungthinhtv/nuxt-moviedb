<template>
  <v-footer dark padless>
    <v-card class="flex text-center" flat tile dense>
      <v-card-title class="teal">
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4"
          dark
          icon
          :to="icon.link"
        >
          <v-icon size="24px">
            {{ icon.ic }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>MovieDB</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { ic: 'mdi-facebook', link: 'https://facebook.com' },
      { ic: 'mdi-twitter', link: 'https://twitter.com' },
      { ic: 'mdi-linkedin', link: 'https://linkedin.com' },
      { ic: 'mdi-instagram', link: 'https://instagram.com' },
    ],
  }),
};
</script>
