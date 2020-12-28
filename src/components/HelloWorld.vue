<template>
  <div>
    <h1 v-show="isLoading">Loading</h1>
    <ul v-for="movie in movies" :key="movie.id" style="list-style: none">
      <img :src="movie.medium_cover_image">
      <li>{{ movie.title }}</li>
      <li>{{ movie.year }}</li>
      <li>{{ movie.summary }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isLoading: true,
      movies:[]
    }
  },
  
  mounted() {
    this.getInfo()
  },

  updated() {
    this.isLoading = false
  },

  methods: {
    async getInfo() {
      await this.$axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
      .then(response=>{
        this.movies = response.data.data.movies
      })
      .catch(error=>console.log(error))
    },
  },
}
</script>

<style>

</style>