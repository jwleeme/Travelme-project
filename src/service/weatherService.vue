<script>
import axios from 'axios';

export default {

  data() {
    return {
      /*
      - 문제발생/해결 (Axios를 이용한 날씨 공공 API 통신 중)
      지역별 날씨 정보 알림을 위한 기상청 공공 API를 사용하는데 공식문서에서 제공하는 callback URL이 http 라는것을 알고 proxy 서버를 활용하였는데 404, 500 Error 발생과 함께 접속이 불가하여 
      많은 시간을 소요하였는데 알고보니 https 접속도 가능하였다.
      */
      apiURL: "https://apis.data.go.kr/1360000/TourStnInfoService",
      detailURL: {
        vilage: "/getTourStnVilageFcst",
        wthrIdx: "/getTourStnWthrIdx",
        clmIdx: "/getCityTourClmIdx"
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
    CURRENT_DATE: '2022010101',
    HOUR: 24,
    COURSE_ID : 1
    }
    
      return await axiosAPI.get(this.detailURL[type], { params: param })

    } 

  }
}
</script>