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
          <li class="drop_menu">
            <router-link :to="{name: 'CourseMain'}">
              Travel Course
            </router-link>
            <div class="sub_menu">
              <ul class="sub_items">
                <li
                  v-for="(course , index) in courses"
                  :key="`courseID_${index}`">
                  <router-link :to="{name: 'Course', params:{courseID:course.courseID}}">
                    {{ course.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <router-link :to="{name:'Review'}">
              Trip Story&amp;Stars
            </router-link>
          </li>
        </ul>
        
        <!-- MYPAGE & PICKLIST, LOGIN -->
        <div class="right_area">
          <router-link :to="{name:'Mypage'}">
            <span class="material-icons my-page">face</span>
          </router-link>
          <router-link :to="{name:'PickList'}">
            <img
              src="../../assets/img/pick.png"
              alt="찜목록"
              data-cart="5" />
          </router-link>
          <form @submit="onSubmit">
            <input
              v-model="id"
              class="id_on"
              type="text"
              placeholder=" ID 입력" />
            <input
              v-model="pw"
              class="pw_on"
              type="password"
              placeholder=" PASSWORD 입력" />
          </form>
          <button
            class="loginbtn"
            @click="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100px;
  border-bottom: 5px solid #00491E;
  background:rgba(255, 255, 255, .3);
}
header > .inner {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

header>.inner::after {
  content: "";
  display: block;
  clear: both;
}

.logo {
  float: left;
  margin-top: 30px;
  font-family: 'Quarto Black','serif';
  font-weight: bold;
  font-size: 40px;
  color: #F74C25;
  text-decoration: none;
}

.middle_area {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0;
}

.main-menu {
  position: relative;
  margin-top: 20px;
}
.main-menu>li {
  display: inline-block;
  margin-left: 40px;
  font-size: 20px;
  font-weight: 900;
  color: #283a2c;
}
.main-menu li:hover {
  text-decoration: underline;
  cursor: pointer;
}
.main-menu>li:first-child {
  margin-left: 0;
}

.right_area {
  position: relative;
  top: 10px;
  left: 25%;
}

.right_area .my-page {
  font-size: 30px;
  margin-left: 30px;
  transition: all .2s ease-in;
}
.right_area img {
  width: 30px;
  height: 27px;
  border-radius: 10%;
  margin-left: 30px;
  transition: all .2s ease-in;
}

.right_area .my-page:hover,
.right_area img:hover {
  transform: scale(1.2);
}

.right_area form input {
  display: block;
  width: 150px;
  height: 18px;
  font-size: 13px;
  border-radius: 10px;
  color: #00491E;
  outline: none;
  
}
.right_area form input:first-child {
  margin-bottom: 5px;
}

.loginbtn {
  display: block;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 25px;
  right: -45%;
  border: 1px solid #FFB025;
  border-radius: 20px;
  background-color: #FFB025;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}
.loginbtn:hover {
  background: #F1F0ED;
  border: 2px solid #FFB025;
  color: #283a2c;
  box-shadow: 0 15px 15px 0 rgba(0, 0, 0,.24);
}
.sub_menu {
  display: none;
  width: 100%;
  position: absolute;
  top: 60px;
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
}

.drop_menu a {
  padding-bottom: 45px;
}
.main-menu>.drop_menu:hover .sub_menu {
  display: block;
}

</style>