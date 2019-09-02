<template>
  <div >
<location-header></location-header>
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
        alphabetList:[]

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

</style>
