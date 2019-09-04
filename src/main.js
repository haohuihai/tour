// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import store from './store/store.js'
import 'swiper/dist/css/swiper.css'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import '@/assets/style/iconfont.css'
import fastClick from 'fastClick'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper,)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted(){
    let map=new BMap.Map('allmap')//new一个地图实例加载到allmap
    let myCity=new BMap.LocalCity()
    myCity.get((result)=>{//使用一个箭头函数
      if(result){
        this.$store.state.city=result.name
      }else {
        this.$store.state.city='北京'
      }
    })
  }
})
