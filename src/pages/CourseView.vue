<template>
  <courseInfo />
  <courseWeather />
</template>

<script>
import courselist from '@/assets/json/courselist.json'
import courseInfo from '@/components/course/courseInfo.vue'
import weatherService from '@/service/weatherService.vue'
import courseWeather from '@/components/course/courseWeather.vue'

export default {
  components: {
    courseInfo,
    courseWeather
  },
  name: 'CourseView',
  mixins: [weatherService],
  data() {
    return {
      courseID: 0,
      pageNo : 1,
      Axios: null,
      courseAPI: []
    }
  },
  computed: {
    courseData() {
      if (this.courseID) {
        return courselist.course.find(item => item.courseID === this.courseID)
      }
      return {}
    }
  },
  async created() {
    const res = await this.createAxios('vilage')
    console.log(res)
  }

}
</script>


<style scoped>

</style>