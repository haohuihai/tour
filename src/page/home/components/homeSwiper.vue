<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide
      v-for="item of swiperList"
      :key="item.id"
      >
        <img class="swiper-img"
            :src="item.imgUrl" alt=""></swiper-slide>


      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'homeSwiper',
    props:{
      swiperList:Array
    },
    data(){
      return{

        swiperOption:{
          pagination:".swiper-pagination",
          loop:true
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .wrapper >>>.swiper-pagination-bullet
     background :#ffffff
.swiper-img
  width :100%
</style>
