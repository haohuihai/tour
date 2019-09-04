<template>
  <div>
    <detail-header></detail-header>
    <detail-swiper></detail-swiper>
<router-view></router-view>
    <detail-map></detail-map>
  </div>
</template>

<script>


  import detailHeader from './components/detailHeader'
  import detailSwiper from './components/detailSwiper'
  import detailMap from './components/detailMap'
  export default {
    name: 'Detail',

    components:{
      detailHeader,
      detailSwiper,
      detailMap

    },



  }
</script>

<style lang="stylus" scoped>

</style>
