<template>
  <header>
    <div class="inner">
      <router-link
        to="/"
        class="logo">
        <span>TravelME!</span>
      </router-link>

      <div class="middle_area">
        <!-- MAiN MENU -->
        <ul class="main-menu">
          <li>
            <router-link :to="{name: 'About'}">
              About
            </router-link>
          </li>

          <!-- SUB MENU -->
          <li>
            <router-link :to="{name: 'CourseMain'}">
              Travel Course
            </router-link>
          </li>

          <li>
            <router-link :to="{name:'Review'}">
              Trip Story&amp;Stars
            </router-link>
          </li>
        </ul>
      </div>
      <!-- MYPAGE & PICKLIST, LOGIN -->
      <div class="right_area">
        <div class="icons_area">
          <router-link :to="{name:'Mypage'}">
            <span 
              class="material-icons my-page"
              title="마이페이지">face</span>
          </router-link>
          <router-link
            :to="{name:'PickList'}"
            class="picklink">
            <img
              src="../../assets/img/pick.png"
              alt="찜목록"
              title="코스 찜리스트" />

            <p
              v-if="!isLogin"
              class="picknum">
            </p>
            <p
              v-else
              class="picknum">
              {{ cartItemCount }}
            </p>
          </router-link>
        </div>

        <form
          v-if="!isLogin"
          @submit.prevent="onSubmit">
          <div class="login_area">
            <input
              v-model="id"
              type="text"
              placeholder="ID 입력" />
            <input
              v-model="pw"
              type="password"
              placeholder="PASSWORD 입력" />
          </div>
          
          <button
            class="loginbtn"
            @click="submit">
            LOGIN
          </button>
        </form>
        <div
          v-else
          class="checkout clearfix">
          <p>{{ loginUser.joinNickname }}님 환영합니다!</p>
          <button @click="setlogin(false)">
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      id: '',
      pw: '',
      courses: [
        {
          name: '계절별코스',
          courseID : 'season'
        },
        {
          name: '테마별코스',
          courseID : 'thema'
        },
        {
          name: '지역별코스',
          courseID : 'area'
        }
      ]
    }
  },
  computed: {
    ...mapState('userStore', ['isLogin', 'loginUser']),
    ...mapState("pickStore", { pickList: "pickList" }),
    cartItemCount() {
      return this.pickList.length || '';
    }
  },
  methods: {
    ...mapMutations('userStore', {'setlogin': 'LOGIN' }),
    ...mapActions('userStore', ['requestLogin']),
    onSubmit() {
      this.requestLogin({
        // 입력 값
        id : this.id,
        pw : this.pw
      })
      if(this.isLogin) {
        this.id = ''
        this.pw = ''
      }
    },

  }
}
</script>

<style scoped>
header {
  border-bottom: 5px solid #00491E;
  background:rgba(255, 255, 255, .3);
}
header > .inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
}

.logo {
  flex-basis: 350px;
  font-family: 'Quarto Black','serif';
  font-weight: bold;
  font-size: 40px;
  color: #F74C25;
  text-decoration: none;
}

.middle_area {
  flex-basis: 550px;
  font-family: 'Noto Sans KR','Nanum Gothic', sans-serif;
}

.main-menu {

}
.main-menu>li {
  display: inline-block;
  margin-right: 40px;
  font-size: 20px;
  font-weight: 900;
  color: #283a2c;
}
.main-menu li:hover {
  text-decoration: underline;
  cursor: pointer;
}
.main-menu>li:last-child {
  margin-right: 0;
}

.right_area {

  font-family: 'Noto Sans KR', 'Nanum Gothic'
}
.right_area .icons_area {
  width: 140px;
  margin: 10px 0px 0px 0px;
}

.right_area .my-page {
  font-size: 30px;
  margin-left: 30px;
  transition: all .2s ease-in;
  box-sizing: border-box;
}
.right_area img {
  width: 30px;
  height: 27px;
  border-radius: 10%;
  margin-left: 30px;
  transition: all .2s ease-in;
}
.right_area .picklink {
  display: inline-block;
}
.right_area .picknum {
  display: inline-block;
  vertical-align: top;
  margin-left: 6px;
  margin-top: 2px;
  font-weight: 700;
  color: #ca3d1d;
}

.right_area .my-page:hover,
.right_area img:hover {
  transform: scale(1.2);
}

.right_area .login_area {
  display: inline-block;
}
.right_area form {
  margin: 5px auto 10px;
}
.right_area form input {
  display: block;
  width: 150px;
  height: 20px;
  padding-left: 10px;
  border-radius: 10px;
  color: #283a2c;
  font-size: 13px;
  font-weight: 500;
  outline: none;
  
}
.right_area form input:first-child {
  margin-bottom: 5px;
}

.loginbtn {
  display: inline-block;
  width: 60px;
  height: 60px;
  vertical-align: bottom;
  margin-left: 10px;
  border: 1px solid #FFB025;
  border-radius: 20px;
  background-color: #FFB025;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}
.loginbtn:hover {
  background: #F1F0ED;
  border: 2px solid #FFB025;
  color: #283a2c;
  box-shadow: 0 15px 15px 0 rgba(0, 0, 0,.24);
}
.checkout {
  margin-top: 6px;
  margin-left: 20px;
  font-weight: 900;
  font-size: 15px;
}
.checkout p {
  margin-bottom: 8px;
  font-weight: 500;
}
.checkout button {
  float: right;
  border: 2px solid #283a2c;
  border-radius: 4px;
  background: #FDF6E6;
  color: #202020;
  font-size: 14px;
  font-weight: 700;
  padding: 3px 8px;
  margin: 5px auto 8px;
}
.checkout button:hover {
  background: #f8ca7a;
}

.sub_menu {
  display: none;
  width: 100%;
  position: absolute;
  top: 65px;
  left: 0;
  z-index: 2;
  background-color: #FDF6E6;
  border: 2px solid #02411c79;
  border-radius: 10px;
  box-sizing: border-box;
  color: #00491E;
  font-size: 18px;
  font-weight: 600;
}
.sub_menu>.sub_items {
  margin: 20px auto;
  text-align: center;
}
.sub_items>li {
  line-height: 2.0;
  font-size: 20px;
}
/* 
.drop_menu a {
   padding-bottom: 45px; 
}
.main-menu>.drop_menu:hover .sub_menu {
  display: block;
} */
@media print {
  header {
    display: none;
  }
}

</style>