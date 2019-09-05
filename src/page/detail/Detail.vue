<template>
  <div>
    <detail-header></detail-header>
    <detail-swiper :swiperList="swiperList"></detail-swiper>
<router-view
  :galaryList="galaryList"
  :imgList="imgList"
  :addressList="addressList"


></router-view>
    <detail-map></detail-map>
  </div>
</template>

<script>

  import axios from 'axios'
  import detailHeader from './components/detailHeader'
  import detailSwiper from './components/detailSwiper'
  import detailMap from './components/detailMap'
  export default {
    name: 'Detail',
data(){
      return{
        swiperList:[],
        galaryList:[],
        imgList:[],
        addressList:[]
      }
},
    components:{
      detailHeader,
      detailSwiper,
      detailMap

    },
    methods:{//在这个函数里面发起请求
      getDetailData(){
        axios.get("/api/detail.json?id="+this.$route.params.id)//将事先准备好的index.json放到mock里面
          .then(this.getDetailDataSucc)//如果成功执行这一步的函数
      },
      getDetailDataSucc(res){
        // console.log(res)
        res=res.data//进行派发
        if(res.data){
          const  data=res.data
          this.swiperList = data.swiperList
          this.galaryList = data.galaryList
          this.imgList = data.imgList
          this.addressList = data.addressList
        }

      }
    },
    mounted() {
      this.getDetailData()
    }



  }
</script>

<style lang="stylus" scoped>

</style>
