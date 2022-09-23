<template>
  <v-container>
    <v-row v-if="$fetchState.pending">
      <v-col cols="12" sm="3" v-for="s in 20" :key="s">
        <v-skeleton-loader type="image, list-item-two-line"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else-if="$fetchState.error">
      <h2 class="error">An error occurred!</h2>
    </v-row>
    <SectionPersons v-else :persons="persons" />
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination
            :total-visible="10"
            v-model="currentPage"
            :length="totalPages"
            @input="handlePageChange"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SectionTVs from '../components/SectionTVs.vue';
import SectionPersons from '../components/SectionPersons.vue';
export default {
  data() {
    return {
      persons: [],
      getBy: 'popular',
      totalResults: 1,
      totalPages: 1,
      currentPage:
        parseInt(this.$route.query.page) > 1
          ? parseInt(this.$route.query.page)
          : 1,
    };
  },
  async fetch() {
    await this.$axios
      .$get(`/person/${this.getBy}?page=${this.currentPage}`)
      .then((res) => {
        this.persons = res.results;
        this.totalPages = 500;
        this.totalResults = res.total_results;
        this.$router.push({ query: { page: this.currentPage } });
      });
  },
  methods: {
    handlePageChange(value) {
      this.currentPage = value;
      this.$fetch();
    },
    handleGetBy(value) {
      this.getBy = value;
      this.$fetch();
    },
  },
  components: { SectionTVs, SectionPersons },
};
</script>

<style></style>
