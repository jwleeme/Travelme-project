<template>
  <div>
    <MainVideo />
    <Banner />
    <TripType />
    <TripTypeList />
    <TripBestStory />
    <Footer />
  </div>
</template>

<script>
import MainVideo from '@/components/main/MainVideo'
import Banner from '@/components/banner/Banner'
import TripType from '@/components/main/TripType'
import TripTypeList from '@/components/main/TripTypeList'
import TripBestStory from '@/components/main/TripBestStory'
import Footer from '@/components/common/Footer'

export default {
  components: { 
    MainVideo,
    Banner,
    TripType,
    TripTypeList,
    TripBestStory,
    Footer
  },
 name: 'HomePage'
}
</script>

<style scoped>

</style>