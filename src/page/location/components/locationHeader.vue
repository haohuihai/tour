<template>
  <div  class="search">
    <span class="iconfont">&#xe87e;</span>
    <input type="text" class="search-input" placeholder="请输入城市名">
  </div>
</template>

<script>

  export default {
    name: 'locationHeader',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.search
  height:.72rem
  background :#e0e4ec
  padding :.2rem
  position :relative
  .iconfont
    position :absolute
    top:.4rem
    left:.4rem
    color:#666
  .search-input
    height:.72rem
    line-height :.72rem
    width :100%
    border-radius :.06rem
    text-align :left
    padding-left:.6rem
    box-sizing :border-box//盒子模型
    color:#666



</style>
