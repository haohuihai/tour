<template>
  <div >
<location-header></location-header>
    <location-list :letter="letter"></location-list>
    <location-alphabet @change="handleLetterClick"></location-alphabet>
  </div>
</template>

<script>
import locationHeader from './components/locationHeader'
import locationList from './components/locationList'
import locationAlphabet from './components/locationAlphabet'
  export default {
    name: 'Location',
    data(){
      return {
        letter:'',
        loading:true
      }
    },
    methods:{
      handleLetterClick(letter){
        // console.log(letter)
        this.letter = letter
      }
    },
    components:{
      locationHeader,
      locationList,
      locationAlphabet
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
