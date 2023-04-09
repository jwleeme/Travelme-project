// 회원정보, 로그인 정보를 취급하는 용도의 모듈

const userStore = {
  namespaced: true,
  state: {
    isLogin: false,
    loginUser: {
      joinNickname : ''
    }
    
    
  },
  mutations: {
    LOGIN: (state, payload) => {
      state.isLogin = payload
      if (!payload) {
        state.loginUser.joinNickname = ''; 
      }
    }
  },
  actions: {
    requestLogin({commit, state}, payload) {
      if (payload.id === '' || payload.pw === '') {
        return alert("아이디와 패스워드를 입력해주세요!")
      }
      const userList = JSON.parse(localStorage.getItem('userList'))
      const userInfo = userList.find((user) => user.id === payload.id)
      if (!userInfo) {
        return alert("아이디가 존재하지 않습니다. 확인해주세요.")
      }
      
      // 아이디 패스워드 검증
      if (userInfo.pw === payload.pw) {
        state.loginUser.joinNickname = userInfo.joinNickname;
        return commit('LOGIN', true)
      }
      else {
        return alert("패스워드가 일치하지 않습니다. 확인해주세요.")
      }
    }
    }
  }

export default userStore

