// 회원정보, 로그인 정보를 취급하는 용도의 모듈
const userStore = {
  namespaced: true,
  state: {
    isLogin: false,
    tempUser: {
      jiwony : 'jw321'
    }
    
  },
  mutations: {
    LOGIN: (state, payload) => {
      state.isLogin = payload
    }
  },
  actions: {
    requestLogin({commit, state}, payload) {
      if (payload.id === '' || payload.pw === '') {
        return alert("아이디와 패스워드를 입력해주세요!")
      }
      // 아이디 패스워드 검증
      if (state.tempUser[payload.id] === payload.pw) {
        return commit('LOGIN', true)
      }
      return alert("아이디와 패스워드를 체크해주세요.")
    }
  }
}
export default userStore