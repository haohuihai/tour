<template>
  <div class="galary-content">
    <div class="wrapper">
      <div
        v-for="item of imgList[this.index][this.index]"
        :key="item.id"
        class="imgWrapper">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
    <div class="galary"
         v-show="show"
    >
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide
          v-for="item of imgList[this.index][this.index]"
          :key="item.id"
        >
          <div class="galary-img">

            <img

              :src="item.imgUrl" 
                 @click="handlePictureClick">
          </div>
<!--          <div class="cancelBtn">-->
<!--            X-->
<!--          </div>-->
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'galaryContent',
    computed:mapState(['index']),
    methods:{
      handlePictureClick(){
        this.show=true
      }
    },
    data(){
      return{
        show:false,
        swiperOption:{
          loop:false
        },
        imgList:[
          {
            0:[
              {
                id:'0',
                imgUrl: "https://pic3.40017.cn/zzy/rimage/2015/04/18/17/hETxTo_420x228_00.jpg"
              },
              {
                id:'1',
                imgUrl: "https://pic3.40017.cn/zzy/rimage/2015/04/18/17/hETxTo_420x228_00.jpg"
              },
              {
                id:'2',
                imgUrl: "https://pic3.40017.cn/zzy/rimage/2015/04/18/17/hETxTo_420x228_00.jpg"
              },
              {
                id:'3',
                imgUrl: "https://pic3.40017.cn/zzy/rimage/2015/04/18/17/hETxTo_420x228_00.jpg"
              },

            ]
          },
          {
            1:[
              {
                id:'0',
                imgUrl: "https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg"
              },
              {
                id:'1',
                imgUrl: "https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg"
              },
              {
                id:'2',
                imgUrl: "https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg"
              },
              {
                id:'3',
                imgUrl: "https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg"
              },

            ]
          },
          {
            2:[
              {
                id:'0',
                imgUrl: "https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg"
              },
              {
                id:'1',
                imgUrl: "https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg"
              },
              {
                id:'2',
                imgUrl: "https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg"
              },
              {
                id:'3',
                imgUrl: "https://pic5.40017.cn/02/000/02/22/rBLkCVlkdDqAP4NzAAMCZSYX5mY633_420x228_00.jpg"
              },

            ]
          },
        ]
      }
    }


  }
</script>

<style lang="stylus" scoped>
  .wrapper
    background:#fff
    .imgWrapper
      width:47%
      background:#aaa
      margin:.12rem
      float:left
    .imgWrapper > img
      width:100%
  .galary
    position:absolute
    top:-0.86rem
    left:0
    right:0
    bottom:0
    background:#000
    color:#fff
    .galary-img
      margin-top:4.5rem
    .galary-img>img
      width:100%
    .swiper-pagination
      color:#fff
      bottom:7.5rem
    .cancelBtn
      font-size:.5rem
      position:relative
      left:3.5rem
      bottom:-4rem
</style>
