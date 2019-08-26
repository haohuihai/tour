<template>
  <div class="wrapper">
    <div class="icon"
         v-for="item of iconList"
         :key="item.id"

    >
      <div class="icon-img"

      >

        <img class="img"
             :src="item.imgUrl"
             :class="[item.color]"
             alt=""></div>
      <div class="icon-desc">
        {{item.desc}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeCatalog',
    data(){
      return{
        red:'red',
        orange:'orange',
        green:'green',
        blue:'blue',
        iconList:[
          {
            id:'0001',
            imgUrl:'https://pic5.40017.cn/01/000/84/4f/rBLkBVmLtaiAcmRaAAAEH9JbM6g234.png',
            desc:'本地热推',
            color:"red"
          },
          {
            id:'0002',
            imgUrl:'https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png',
            desc:'亲子游',
            color:"green"
          },
          {
            id:'0003',
            imgUrl:'https://pic5.40017.cn/02/001/6d/db/rBLkCVmEGfeAVI4FAAAEXdabEDE534.png',
            desc:'温泉预售',
            color:"blue"
          },
          {
            id:'0004',
            imgUrl:'https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png',
            desc:'自然风光',
            color:"orange"
          },

        ]
      }
    },

  }
</script>


<style lang="stylus" scoped>
.wrapper
  background :#ffffff
  padding-top:.2rem
  .icon
     width :25%
     float :left
    .img
      display block
      background :red
      border-radius :1rem
      margin:0 auto
      width :50%
    .red
        background:#fd6266
    .orange
        background:#fda424
    .green
        background:#6dcf16
    .blue
        background:#41a9f2
    .icon-desc
      text-align:center
      padding-top:.2rem
      padding-bottom :.5rem

</style>
