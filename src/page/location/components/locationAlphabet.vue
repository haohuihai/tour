<template>
  <div>
    <ul class="list">
      <li
        v-for="item of alphabetList"
        :key="item.id"
        @click="handleLetterClick"
      >{{item.content}}</li>
    </ul>
    <div
      class="connect"
      ref="distance"
      :style="hidden"
    >
      {{this.content}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'locationAlphabet',
    methods:{
      handleLetterClick(e){
        this.content = e.target.innerText
        // console.log(this.content)
        this.$emit("change",this.content)
        for(let i=0;i<this.alphabetList.length;i++){
          if(this.content===this.alphabetList[i].content){
            let distance = 0.8 + ((i+1)*0.3)
            const showElement = this.$refs.distance
            showElement.style="display:block"
            showElement.style="top:"+distance+"rem"
            setTimeout(function(){
              showElement.style="display:none"
            },500)

          }
        }
      }
    },
    data(){
      return {
        hidden:{
          display:'none'
        },
        content:'',
        alphabetList:[
          {
            id:11254,
            content:"当前"
          },
          {
            id:11255,
            content:"热城市"
          },
          {
            id:11256,
            content:"A"
          },
          {
            id:11257,
            content:"B"
          },
          {
            id:11258,
            content:"C"
          },
          {
            id:11259,
            content:"D"
          },
          {
            id:11260,
            content:"E"
          },
          {
            id:11261,
            content:"F"
          },
          {
            id:11262,
            content:"G"
          },
          {
            id:11263,
            content:"H"
          },
          {
            id:11264,
            content:"J"
          },
          {
            id:11265,
            content:"K"
          },
          {
            id:11266,
            content:"L"
          },
          {
            id:11267,
            content:"M"
          },
          {
            id:11268,
            content:"N"
          },
          {
            id:11269,
            content:"P"
          },
          {
            id:11270,
            content:"Q"
          },
          {
            id:11271,
            content:"R"
          },
          {
            id:11272,
            content:"S"
          },
          {
            id:11273,
            content:"T"
          },
          {
            id:11274,
            content:"W"
          },
          {
            id:11275,
            content:"X"
          },
          {
            id:11276,
            content:"Y"
          },
          {
            id:11277,
            content:"Z"
          }
        ]
      }
    }

  }
</script>

<style lang="stylus" scoped>
  .list
    position:fixed
    top:1.15rem
    right:0
    z-index:100
    text-align:center
    width:15%
    background:#eff1f5
    padding-bottom:100rem
    opacity:.7
    color:#53cabf
  .list>li
    margin:.1rem 0
    font-weight:bold
  .connect
    position:absolute
    top:1.1rem
    right:1.1rem
    z-index:100
    text-align:center
    background:rgba(80,180,0,.7)
    border-radius:.07rem
    color:#fff
    padding:.1rem .1rem
    margin-right:.2rem
</style>
