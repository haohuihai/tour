<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide
      v-for="item of swiperImg"
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
    data(){
      return{
        swiperImg:[
          {
            id:'001',
            imgUrl:'https://pic5.40017.cn/03/000/28/73/rB5oQFxG7M2AOgxwAADChAKgVcA559_520x218_00.jpg'
          },
          {
            id:'002',
            imgUrl:'https://pic5.40017.cn/01/000/31/71/rBANC1sy7-iAaElXAADxiWL4LPo263_520x218_00.jpg'},
        ],
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
