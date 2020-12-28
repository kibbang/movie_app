<template>
  <section class="container">
    <div>
      <h1 class="loader" v-show="isLoading">Loading</h1>
      <div class="movie_info">
        <ul v-for="movie in movies" :key="movie.id" style="list-style: none">
          <img :src="movie.medium_cover_image">
          <li>{{ movie.title }}</li>
          <li>{{ movie.year }}</li>
          <li>{{ movie.summary }}</li>
        </ul>
      </div>
    </div>
  </section>
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
.container {
  height: 100%;
  display: flex;
  justify-content: center;
}

.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}

.movie_info {
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
}


</style>