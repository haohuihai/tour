<template>
  <div class="home">
    <home-header class="home-header"></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
  import homeHeader from './components/homeHeader'
  import homeSwiper from './components/homeSwiper'
  export default {
    name: 'Home',
components:{
  homeHeader,
  homeSwiper
}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home
  position:relative
.home-header
    position :absolute
    top:0
    left:0
    z-index :100
    width :100%
</style>
