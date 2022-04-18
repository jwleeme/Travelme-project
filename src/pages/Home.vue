<template>
  <MainVideo />
  <Banner/>
  <TripType/>
</template>

<script>
import MainVideo from '@/components/main/MainVideo.vue'
import Banner from '@/components/banner/Banner.vue'
import TripType from '@/components/main/TripType.vue'

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