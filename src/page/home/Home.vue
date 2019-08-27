<template>
  <div class="home">
    <home-header class="home-header" :city="city"></home-header>

    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-catalog :iconList="iconList"></home-catalog>
    <home-hot
      :hotPriseList="hotPriseList"
      :hotTrendList="hotTrendList"
      :hotContentList="hotContentList"

    ></home-hot>
    <home-weekend :weekendList="weekendList"></home-weekend>
    <home-guess :guessList="guessList"></home-guess>
  </div>
</template>

<script>
  import axios from 'axios'
  import homeHeader from './components/homeHeader'
  import homeSwiper from './components/homeSwiper'
  import homeCatalog from './components/homeCatalog'
  import homeHot from './components/homeHot'
  import homeWeekend from './components/homeWeekend'
  import homeGuess from './components/homeGuess'
  export default {
    name: 'Home',
components:{
  homeHeader,
  homeSwiper,
  homeCatalog,
  homeHot,
  homeWeekend,
  homeGuess
},
    data(){
      return{
    city:'',
  guessList :[],
    hotPriseList :[],
    hotTrendList :[],
        hotContentList: [],
      iconList :[],
        swiperList :[],
      weekendList:[],

      }
    },
    methods:{//在这个函数里面发起请求
      getHomeData(){
        axios.get("/api/index.json")//将事先准备好的index.json放到mock里面
          .then(this.getHomeDataSucc)//如果成功执行这一步的函数
      },
      getHomeDataSucc(res){
        // console.log(res)
       res=res.data//进行派发
        if(res.data){
          const  data=res.data
          this.city=data.city//将请求来的数据保存到home 的根组件里面
          this. guessList = data. guessList
          this. hotPriseList = data. hotPriseList
          this. hotTrendList = data.hotTrendList
          this. iconList = data. iconList
          this. swiperList = data.swiperList
          this . weekendList = data.weekendList
          this.hotContentList= data.hotContentList

        }

      }
    },
    mounted() {
      this.getHomeData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home
  position:relative
.home-header
    position :fixed
    top:0
    left:0
    z-index :100
    width :100%
</style>
