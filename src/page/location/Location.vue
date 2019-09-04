<template>
  <div >
   <div class="load" v-if="loading">load.....</div>
<location-header :cities="cities"></location-header>
    <location-list :letter="letter"
    :cities="cities"
    :hotCities="hotCities"


    ></location-list>
    <location-alphabet @change="handleLetterClick"
    :alphabetList="alphabetList"
    ></location-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
import locationHeader from './components/locationHeader'
import locationList from './components/locationList'
import locationAlphabet from './components/locationAlphabet'
  export default {
    name: 'Location',
    data(){
      return {
        letter:'',
        loading:true,
        cities:{},
        hotCities:[],
        alphabetList:[],
        loading:true,

      }
    },
    methods:{
      getLocationData(){
        axios.get("/api/city.json")//将事先准备好的index.json放到mock里面
          .then(this.getHomeDataSucc)//如果成功执行这一步的函数
      },
      getHomeDataSucc(res){

        res=res.data//进行派发
        // console.log(res)
if (res.data){
  this.loading=false
  const data=res.data
  this.cities=data.cities
  this.hotCities=data.hotCities
  this.alphabetList=data.alphabetList
}
         },

      handleLetterClick(letter){
        // console.log(letter)
        this.letter = letter
      }
    },
    components:{
      locationHeader,
      locationList,
      locationAlphabet
    },
    mounted() {
      this.getLocationData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .load
    position:absolute
    top:7rem
    left:3.5rem
    z-index:1011
    width:1.8rem
    height:.5rem
    opacity:.3
    background:#000
    color:#fff
    text-align:center
</style>
