<template>
  <div class="header">
    <div class="header-back">
      <span class="iconfont">&#xe647;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe87e;</span>
      上海南昌海洋公园</div>
    <div class="header-city">北京
      <span class="iconfont">&#xe631;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeHeader',

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.header
  line-height :.88rem
  text-align :center
  display :flex
  .header-back
    float :left

    width :.9rem

  .header-search
    flex:1
    height :.6rem
    line-height :.6rem
    margin-top :.2rem
    margin-left :.2rem
    margin-right :.2rem
    border-radius :.5rem
    box-shadow :0 0 .01rem .02rem #005
  .header-city
    float :left

    width :1.4rem

</style>
