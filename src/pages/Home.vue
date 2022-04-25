<template>
  <MainVideo />
  <Banner />
  <TripType />
  <TripListSort />
  <TripBestStory />
</template>

<script>
import MainVideo from '@/components/main/MainVideo'
import Banner from '@/components/banner/Banner'
import TripType from '@/components/main/TripType'
import TripListSort from '@/components/main/TripListSort'
import TripBestStory from '@/components/main/TripBestStory'

export default {
  components: { 
    MainVideo,
    Banner,
    TripType,
    TripListSort,
    TripBestStory
  },
 name: 'HomePage'
}
</script>

<style scoped>

</style>