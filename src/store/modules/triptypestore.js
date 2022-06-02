// 여행 타입 검색 조건 모듈

import data from '@/assets/js/tripdata.js'

export default {

  namespaced: true,

  state: () => ({
    choicedType: '', // 지역 or 테마
    choicedValue: '', // 내부 선택 값
    bestTripList: data, // 전체 데이터

    // course - 서브 메뉴
    subseason : [
      {
       name : "봄",
       value: "spring"
      },
      {
        name : "여름",
        value: "summer"
      },
      {
        name : "가을",
        value: "autumn"
      },
      {
        name : "겨울",
        value: "winter"
      }
    ],
    subregion: [
      {
        name: '전체보기',
        value: 'all'
      },
      {
        name: '서울',
        value: "seoul"
      },
      {
        name: "경기",
        value: "gyeongi"
      },
      {
        name: "강원도",
        value: "gangwon"
      },
      {
        name: "경상도",
        value: "gyeongsang"
      },
      {
        name: "전라도",
        value: "jeonla"
      },
    ],
    subthema: [
      {
        name: "전체",
        value: "all"
      },
      {
        name: "어드벤처",
        value: "adventure"
      },
      {
        name: "먹거리",
        value: "foodtour"
      },
      {
        name: "가족",
        value: "familytour"
      },
      {
        name: "힐링",
        value: "healing"
      },
      {
        name: "친구",
        value: "friends"
      }
      
    ]
  }),
  mutations: {
    setChoiced(state, payload) {
      state.choicedType = payload.choicedType
      state.choicedValue = payload.choicedValue
    }
  },
  actions: {
    
  }
}