<template>
  <div
    id="CoursePrint"
    class="inner coursepage">
    <courseInfo
      :course-data="courseData" />
    <courseWeather
      :weathers="courseAPI"
      :loading="loading"
      :spotsky="spotsky"
      :uvsensory="uvIndex"
      :rainpercent="pop"
      :rainfall="rn" />
    <courseMap :course-data="courseData" />
    <courseDetailInfo :course-data="courseData" />
    <top-button />
  </div>
</template>

<script>
import courselist from '@/assets/json/courselist.json'
import courseInfo from '@/components/course/courseInfo.vue'
import weatherService from '@/service/weatherService.vue'
import courseWeather from '@/components/course/courseWeather.vue'
import courseMap from '@/components/course/courseMap.vue'
import topButton from '@/components/banner/TopButton.vue'
import courseDetailInfo from '@/components/course/courseDetailInfo.vue'

import moment from 'moment';

export default {
  components: {
    courseInfo,
    courseWeather,
    courseMap,
    courseDetailInfo,
    topButton,
},
  name: 'CourseView',
  mixins: [weatherService],
  data() {
    return {
      courseID: 0,
      pageNo : 1,
      Axios: null,
      courseAPI: [],
      totalCount: 0,
      loading: true,
      spotsky: 0,
      uvIndex: 0, // 자외선 지수
      pop: 0,     // 강수확률,
      rn: 0,      // 강수량(데이터없음)

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
  created() {
    this.courseID = Number(this.$route.params.courseID)
  },
  
  async mounted() {
    const res = await this.createAxios('vilage')
    // 기존에 사용하던 공공 날씨 API의 업데이트로 사라져 주석처리
    //const res2 = await this.createAxios('wthrIdx')

    // 데이터 접근 정상
    if (res.data.response.header.resultCode === "00") {
     
      // 초기값 설정
      let spotfilter = 0;
      let themafilter = "";
     
      // 여행지 날씨 필터 (같은 여행지역코스 중복데이터 필터처리)
      const filterd = res.data.response.body.items.item.filter((item) => {
        if (spotfilter === 0) {
          spotfilter = item.spotAreaId
        }
        if (themafilter === "") {
          themafilter = item.thema
        }
        if (this.spotsky === 0) {
          this.spotsky = item.sky // 여행지역날씨
        }
        if (this.pop) {
          this.pop = item.pop // 강수확률
        }
        if (this.rn === 0) {
          this.rn = item.rn   // 강수량
        }
        
        return item.thema === themafilter && item.spotAreaId === spotfilter
      }).reverse();

      // 자외선지수
      // const uvFilter = res2.data.response.body.items.item.filter((item) => {
      //   if (this.uvIndex === 0) {
      //     this.uvIndex = item.uvIndex 
      //   }
      //   return false;
      // })
      const uvFilter = [];
      // this.courseAPI.push({
      //   sky: 1,
      //   tm: moment().format()
      // })
      this.courseAPI = [...filterd , ...uvFilter]
      this.totalCount = res.data.response.body.totalCount
        this.loading = false
    }
     
 
  }
 

}
</script>


<style scoped>
.coursepage {
  padding-bottom: 60px;
}
@media print {
  .coursepage {
    padding-bottom: 0;
  }
}
</style>