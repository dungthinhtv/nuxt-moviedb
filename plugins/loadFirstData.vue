export default async ({ store }) => { await store.dispatch("loadGenres"); await
store.dispatch("loadNowPlaying"); await store.dispatch("loadTVGenres"); };
