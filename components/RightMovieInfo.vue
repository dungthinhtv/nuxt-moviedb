<template>
  <div>
    <div>
      <h4 class="grey--text title">Director</h4>
      <span v-for="(d, i) in getDirector" :key="i"
        >{{ d }}<span v-if="getDirector.length - 1 != i">, </span>
      </span>
    </div>
    <div class="mt-2">
      <h4 class="grey--text title">Stars</h4>
      <span v-for="(c, i) in data.credits.cast" :key="i"
        >{{ c.name }}<span v-if="data.credits.cast.length - 1 != i">, </span>
      </span>
    </div>
    <div class="mt-2">
      <h4 class="grey--text title">Genres</h4>
      <span v-for="(g, i) in data.genres" :key="i"
        >{{ g.name }}<span v-if="data.genres.length - 1 != i">, </span>
      </span>
    </div>
    <div class="mt-2">
      <h4 class="grey--text title">Release date</h4>
      <span>{{ data.release_date }} </span>
    </div>
    <div class="mt-2">
      <h4 class="grey--text title">Runtime</h4>
      <span>{{ data.runtime }} mins</span>
    </div>
    <div class="mt-2">
      <h4 class="grey--text title">Language</h4>
      <span v-for="(l, i) in data.spoken_languages" :key="i"
        >{{ l.name
        }}<span v-if="data.spoken_languages.length - 1 != i">, </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    getDirector() {
      //   console.log(this.data.credits.crew);

      let directors = [];
      for (const item of this.data.credits.crew) {
        if (item.job === 'Director') {
          directors.push(item.name);
        }
      }

      return directors;
    },
  },
};
</script>

<style></style>
