<template>
  <div class="guess">
   <div class="guess-desc"
   :class="[guessDescChange]">
     <div>猜你喜欢</div>
   </div>
    <div class="guess-content"
    v-for="item of guessList"
         :key="item.id"
    >
      <div class="guess-content-img">
        <img :src="item.imgUrl" alt="">
        <div>{{item.crite}}</div>
      </div>

      <div class="guess-content-desc">
      {{item.desc}}
    </div>
      <div class="guess-content-prise">
      <div class="guess-content-prise-left">
       酒店距离景点{{item.distance}}km
      </div>
      <div class="guess-content-prise-right">
<span>￥</span>{{item.prise}}<span>份</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeGuess',
    data(){

      return{
        guessDescChange:'',
        guessList:[
          {
            id:"00013",
            imgUrl:"https://pic5.40017.cn/01/001/88/2b/rBANC1pcSaeAHwylAALZx0R6pkw234_420x228_00.jpg",
            crite:"18点评  100%满意度",
            logo:"同城专属",
            desc:"【近南山竹海】住溧阳南山康鸿度假酒店，自选天目湖南山竹海/目湖御水温泉/天湖山水园等",
            distance:"14",
            prise:"6955"
          },
          {
            id:"00014",
            imgUrl:"https://pic4.40017.cn/scenery/destination/2016/07/19/17/lziIen_420x228_00.jpg",
            crite:"18点评  100%满意度",
            logo:"同城专属",
            desc:"常州明都枫泽山庄大酒店1晚，自选淹城野生动物园景点/州明都枫泽山庄大店自助晚餐套餐",
            distance:"14",
            prise:"69"
          },{
            id:"00015",
            imgUrl:"https://pic5.40017.cn/02/000/54/fb/rBANDFtHJ3yAE7pWAAE0a3dx4Zo142_420x228_00.jpg",
            crite:"18点评  100%满意度",
            logo:"同城专属",
            desc:"入住句容碧桂园凤凰城酒店+双份自助早餐+自选汤山一号温泉/尚温泉/紫清湖温",
            distance:"14",
            prise:"69"
          },
          {
            id:"00016",
            imgUrl:"https://pic4.40017.cn/scenery/destination/2017/02/08/18/ZTe8Qb_420x228_00.jpg",
            crite:"18点评  100%满意度",
            logo:"同城专属",
            desc:"宿宜兴帕佛伦斯酒店，自选宜兴竹海风景区等，尊享60楼“云端”自助早，免费泳池健身房亲子精选】",
            distance:"54",
            prise:"629"
          },
          {
            id:"00017",
            imgUrl:"https://pic4.40017.cn/scenery/destination/2017/01/23/17/XeJ3ph_420x228_00.jpg",
            crite:"18点评  100%满意度",
            logo:"同城专属",
            desc:"宿无锡绿羊温泉度假酒店，泡无锡绿羊温泉，闭目养神，享受林间温泉",
            distance:"14",
            prise:"69"
          },
          {
            id:"00018",
            imgUrl:"https://pic4.40017.cn/scenery/destination/2017/01/23/17/XeJ3ph_420x228_00.jpg",
            crite:"18点评  100%满意度",
            logo:"同城专属",
            desc:"上海柏思特酒店，儿童乐园，游上海迪士尼乐园【亲子精选】亲子主题】",
            distance:"14",
            prise:"869"
          },
          {
            id:"00019",
            imgUrl:"https://pic4.40017.cn/zzy/rimage/2016/10/10/23/mVRN8E_420x228_00.jpg",
            crite:"18点评  100%满意度",
            desc:"常州恐龙主题度假酒店1晚+恐龙人俱乐部5选1，自选恐龙园景点门或自助晚",
            logo:"同城专属",
            distance:"14",
            prise:"269"
          },
          {
            id:"00020",
            imgUrl:"https://pic5.40017.cn/02/000/62/5a/rBANDFoFdVOAS6rOAAL2qonaRWU933_420x228_00.jpg",
            crite:"18点评  100%满意度",
            desc:"住无锡318文化大院，游灵山小镇拈花湾（相距约3公里）",
            logo:"同城专属",
            distance:"124",
            prise:"649"
          }
        ]
      }
    },

methods:{
      scrollChange(){
        let height=document.documentElement.scrollTop
        if (height>600){
          this.guessDescChange='guessDescChange'
        }else {
          this.guessDescChange=''
        }
      }
},
mounted() {
window.addEventListener('scroll',this.scrollChange)
    }
  }
</script>


<style lang="stylus" scoped>
  .guess
    border-top:.3rem solid #eee
    background:#fff
    .guess-desc
      overflow:hidden
      height:0
      padding-bottom:10%
      text-align:center
      color:#23beae
    .guessDescChange
       position :fixed
       top:.9rem
       left:0
       width :100%
       background :#ffffff
       z-index :100
    .guess-desc > div
      overflow:hidden
      width:25%
      height:0
      padding-bottom:6%
      margin:0 auto
      padding-top:.23rem
      border-bottom:.1rem solid #23beae
    .guess-content
      overflow:hidden
      width:92%
      height:0
      padding-bottom:64%
      margin:0 auto
      .guess-content-img
        position:relative
        overflow:hidden
        height:0
        padding-bottom:48.3%
      .guess-content-img >img
        max-width:100%
      .guess-content-img >div
        position:absolute
        bottom:.2rem
        left:.1rem
        color:#fff
      .guess-content-desc
        overflow:hidden
        height:0
        padding-bottom:12%
        text-align:left
        padding-top:.1rem
        text-indent:.1rem
        font-size:.28rem
        font-weight:bold
        letter-spacing:.01rem
        line-height:.35rem
      .guess-content-prise
        overflow:hidden
        height:0
        padding-bottom:10%
        .guess-content-prise-left
          float:left
          color:#aaa
        .guess-content-prise-right
          float:right
          margin-right:.1rem
        .guess-content-prise-right > span
          color:red
          font-weight:bold
          font-size:.4rem
</style>
