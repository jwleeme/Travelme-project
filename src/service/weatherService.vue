<script>
import axios from 'axios';
import moment from 'moment';

export default {

  data() {
    return {
      
      apiURL: "/",
      detailURL: {
        vilage: "/getTourStnVilageFcst1", // 동네예보
        //wthrIdx: "/getTourStnWthrIdx",  기상지수예보
        clmIdx: "/getCityTourClmIdx1"  // 시군구별관광기후지수
      }
    }
  },
  methods: {
    async createAxios(type) {
      const axiosAPI = axios.create({
        headers: {
          'Access-Control-Allow-Origin' : '*',
        }
      })
      const param = {
        serviceKey: 'mcWBqON5yQqyCvQZ9N/slZl7feGkg5JdDKgx3ltSdvHPER8parB8CxsdNu1Hccyl0IsL41qNhpckG1DMBA6XTw==',
        numOfRows: 10,
        pageNo: 1, 
        dataType: "JSON",
        CURRENT_DATE: moment().format("2023030101"), // 기상지수예보조회, 시군구별 관광기후 최신 데이터가 없어 현재날짜 받아오는 대신 임의로 시작 날짜를 지정.
        HOUR: 24,
        COURSE_ID: this.courseID
    }
    
      return await axiosAPI.get(this.detailURL[type], { params: param })

    } 

  }
}
</script>