<template>
  <div>
    <v-row>
      <v-col cols="12" sm="3" v-for="person in persons" :key="person.id">
        <PersonCard :person="person" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PersonCard from './PersonCard.vue';
export default {
  props: {
    persons: {
      type: Array,
    },
  },
  components: { PersonCard },
};
</script>

<style></style>
