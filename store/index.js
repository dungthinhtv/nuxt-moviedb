export const state = () => ({
  genres: [],
  now_playing: [],
  tv_genres: [],
});

export const mutations = {
  SET_GENRES(state, genres) {
    state.genres = genres;
  },
  SET_NOWPLAYING(state, data) {
    state.now_playing = data;
  },
  SET_TVGENRES(state, data) {
    state.tv_genres = data;
  },
};

export const actions = {
  async loadGenres({ state, commit }) {
    try {
      const data = await this.$axios.$get('/genre/movie/list');
      if (data) {
        commit('SET_GENRES', data.genres);
      }
    } catch (e) {
      console.log(e);
    }
  },
  async loadNowPlaying({ state, commit }) {
    try {
      const data = await this.$axios.$get('/movie/now_playing');

      if (data) {
        commit('SET_NOWPLAYING', data.results.slice(0, 3));
      }
    } catch (e) {
      console.log(e);
    }
  },

  async loadTVGenres({ state, commit }) {
    try {
      const data = await this.$axios.$get('/genre/tv/list');
      if (data) {
        commit('SET_TVGENRES', data.genres);
      }
    } catch (e) {
      console.log(e);
    }
  },
};
