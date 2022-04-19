<template>
  <MainVideo />
  <Banner/>
  <TripType/>
</template>

<script>
import MainVideo from '@/components/main/MainVideo'
import Banner from '@/components/banner/Banner'
import TripType from '@/components/main/TripType'

export default {
  components: { 
    MainVideo,
    Banner,
    TripType
  },
 name: 'HomePage'
}
</script>

<style scoped>

</style>