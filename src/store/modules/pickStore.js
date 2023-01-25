export default {
  namespaced: true,

  state: {
    pickList: [],
    count: 0,
    
  },
  mutations: {
    // 로컬스토리지에 업데이트 저장
    updatePickList(state) {
      
      const list = JSON.stringify(state.pickList)
     
      localStorage.setItem("pickList", list)
    }
    
  },
  actions: {
    // 로컬스토리지에 picklist 담기
    getPickList({ state }) {
      // 예외처리
      if (!localStorage.getItem("pickList")) return;

      // 변경이 감지될때 문자열 형태로 변환된 새로운 배열 담기.(spread)
      state.pickList = [...JSON.parse(localStorage.getItem("pickList"))]
      
    },
    // pickList(코스 찜 리스트)에 코스 담기
    addPickItem({ state, commit }, payload) {
      // 중복체크
      const check = state.pickList.find(item => item.courseID === payload.courseID)
      if (check) return;

      state.pickList.push(payload)
      commit("updatePickList")
    },

    // 로컬스토리지에 담긴 코스데이터 제거
    deletePickItem({ state, commit }, payload) {
      const has = state.pickList.find(i => i.courseID === payload.courseID)
     
      if (has) {
        // picklist에 담긴 코스 데이터의 index 알아내기
        const index = state.pickList.indexOf(has);
        state.pickList.splice(index, 1);

        commit("updatePickList")
      }

    },
    // 전체삭제
    pickListClear({ state, commit }) {
      state.pickList.splice(0)
      commit("updatePickList")
    }
    
  }

}