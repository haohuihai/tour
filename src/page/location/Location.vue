<template>
  <div >
<location-header></location-header>
    <location-list></location-list>
  </div>
</template>

<script>
import locationHeader from './components/locationHeader'
import locationList from './components/locationList'
  export default {
    name: 'Location',
    components:{
      locationHeader,
      locationList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
