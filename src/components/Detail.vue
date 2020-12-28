<template>
  <div class="movie_container">
    <ul class="movie" style="list-style: none">
      <img class="image" :src="movie.medium_cover_image" alt />
      <br>
      <br>
      <li class="title">{{ movie.title }}</li>
      <br>
      <li class="year">{{ movie.year }}</li>
      <br>
      <li class="genres" v-for="(genre,index) in movie.genres"
       :key="index">{{ genre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: [],
      id: this.$route.params.id
    }
  },
  created() {
    this.showDetailInfo()
  },
  methods: {
    showDetailInfo() {
      this.$axios.get('https://yts.mx/api/v2/movie_details.json?movie_id='+this.id)
      .then(response=>{
        this.movie = response.data.data.movie
      })
      .catch(error=>console.log(error))
    }
  }
}
</script>

<style>
.movie_container {
  height: 100%;
  display: flex;
  justify-content: center;
  box-shadow: -60px 0px 100px -90px #000000,
    60px 0px 100px -90px #000000;
}
.movie img .image {
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  justify-content: center;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

.movie .title,
.movie .year {
  margin: 0;
  font-weight: 300;
}

.movie .title {
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
}

.movie .genres {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
}

.genres li,
.year {
  margin-right: 10px;
  font-size: 14px;
}
</style>