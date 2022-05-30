// 여행 타입 검색 조건 모듈

import data from '@/assets/js/tripdata.js'

export default {

  namespaced: true,

  state: () => ({
    choicedType: '', // 지역 or 테마
    choicedValue: '', // 내부 선택 값
    bestTripList: data // 전체 데이터
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