<!-- COURSE MAIN MENU -->
<template>
  <div class="mainmenu">
    <div class="inner">
      <h3>코스별 선택</h3>
      <div class="line"></div>
      <button
        class="season"
        @click="setMainMenu('season')">
        계절별
      </button>
      <button
        class="region"
        @click="setMainMenu('region')">
        지역별
      </button>
      <button
        class="thema"
        @click="setMainMenu('thema')">
        테마별
      </button>
    </div>
  </div>

  <!-- COURSE SUBMENU -->
  <div class="submenu">
    <div class="inner">
      <ul>
        <li
          v-for="(menu, index) in menus" 
          :key="`menu${index}`"
          class="sub_menus">
          <button
            class="sub_buttons"
            @click="submenu = menu.value">
            {{ menu.name }}
          </button>
        </li>

        <!-- 기간 설정 SELECT BOX -->
        <div 
          class="period-select"
          :class="{active: choiced1}">
          <button
            @click="periodToggle(1)"
            class="selected">
            <div class="selected-value">
              전체기간
            </div>
            <div class="arrow"></div>
          </button>

          <ul class="period_options">
            <li
              v-for="(period, index) in periodsOption" 
              :key="`trip_periods${index}`">
              <button
                class="btn_periods"
                @click="selectPeriod(period.value)">
                {{ period.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- COURSE SORT -->
        <div class="course_sort">
          <ul>
            <li>
              <button
                class="sort_list"
                @click="sorting = 0">
                최신순
              </button>
            </li>
            <li>
              <button
                class="sort_list"
                @click="sorting = 1">
                인기순
              </button>
            </li>
            <li>
              <button
                class="sort_list"
                @click="sorting = 2">
                오래된순
              </button>
            </li>
          </ul>
        </div>
      </ul>

      <!-- COURSE LISTS -->
      <div class="courses">
        <div
          v-for="(course, index) in courselist"
          :key="`courselist${index}`"
          class="course_box ">
          <div class="imgbox">
            <img :src="course.image" />
            <!-- course 상세페이지 -->
            <router-link
              :to="{name: 'CourseView'}"
              class="course_content">
              <p class="title">
                {{ course.title }}
              </p>
              <p class="area">
                지역: {{ course.area }}
              </p>
              <p class="distance">
                총 거리: {{ course.distance }}
              </p>
            </router-link>
          </div>

          <ul class="course-list">
            <li
              v-for="spot in course.spotList"
              :key="spot.location.position.x + '_' + spot.location.position.y + '_' + spot.name">
              <span>
                <a class="spotnames">
                  {{ spot.name }}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import coursedata from '@/assets/json/courselist.json';

export default {
  data() {
    return {
      mainmenu: "season",
      submenu: "spring",
      selectedPeriod: "all",
      sorting: 0,

      periodsOption: [
      {
        name: "전체기간",
        value: "all"
      },
      {
        name: "당일 코스",
        value: "oneday"
      },
      {
        name: "1박 2일",
        value: "onenights"
      },
      {
        name: "2박 3일",
        value: "twonights"
      },
      {
        name: "3박 4일",
        value: "threenights"
      },
      {
        name: "일주일 ↑",
        value: "moreaweek"
      }
      ],
      choiced1: false
    }
  },

  computed: {
    ...mapState("triptypeStore", ["subseason", "subregion", "subthema"]),
    menus() {
      if(this.mainmenu === "season") {
        return this.subseason
      }
      if(this.mainmenu === "region") {
        return this.subregion
      }
      if(this.mainmenu === "thema") {
        return this.subthema
      }
      return []
    },
    courselist() {
      return coursedata.course.filter(item => {
        // Course Submenu Filter 조건!
        if (item[this.mainmenu] === this.submenu || (this.submenu === "all" && item[this.mainmenu])) {
          if (this.selectedPeriod !== "all" && item.period === this.selectedPeriod) {
            return item
          } else if (this.selectedPeriod === "all") {
            return item
          }
          
        }
      // 코스 정렬
      }).sort((a, b) => {
        const a_time = new Date(a.updatedDate).getTime();
        const b_time = new Date(b.updatedDate).getTime();
          
        if (this.sorting === 0) {
          return b_time- a_time // 최신순
        } else if (this.sorting === 1) {
          return b.viewCnt - a.viewCnt // 인기순(내림차순)
        } else if (this.sorting === 2) {
          return a_time - b_time // 오래된순
        }
      })
    }
  },
  watch: {
    mainmenu: {
      handler() {
        this.$nextTick(() => {
          this.submenu = this.menus[0].value
          this.selectedPeriod = "all"

          this.choiced1 = false
        })
      }
    },
    submenu: {
      handler() {
        this.selectedPeriod = "all" // 전체기간
        this.choiced1 = false
      }
    }
  },
  methods: {
    periodToggle(num) {
     this[`choiced${num}`] = !this[`choiced${num}`];
    },
    setMainMenu(maintype) {
      this.mainmenu = maintype
    },
    selectPeriod(value) {
      this.selectedPeriod = value
      this.choiced1 = false
    }
  }
}
</script>


<style scoped>
/* MainMenu */
.mainmenu {
  width: 100%;
}
.mainmenu >.inner,
.submenu >.inner {
  padding-top: 60px;
  text-align: center;
}
.mainmenu h3 {
  margin-left: 20px;
  font-family: "NotoSansKR", "Sans-serif";
  font-size: 28px;
  font-weight: bold;
  text-align: left; 
}
.line {
  width: 100%;
  border: 1px solid #283A2C;
  margin: 25px auto;
}

.mainmenu button {
  width: 300px;
  height: 100px;
  margin-right: 50px;
  background-color: #EE8363;
  border: 2px solid #F74C25;
  border-radius: 50px;
  transition: all, .2s ease-in;
  color: #fff;
  font-size: 30px;
  font-weight: 800;
}
.mainmenu button:hover {
  background: #FAF0E1;
  border: 2px solid #F74C25;
  color: #283A2C;
  font-weight: 800;
  cursor: pointer;
 
}
/* SubMenu */
.submenu ul li {
  display: inline-block;
  font-family: "NotoSansKR", "Sans-serif";
}

.submenu ul li .sub_buttons { 
  width: 100px;
  height: 70px;
  margin-right: 20px;
  padding: 15px auto;
  border: 1px solid #666;
  background: #fff;
  color: #283A2C;
  font-size: 20px;
  font-weight: 600;
  transition: all .1s ease-in;
  cursor: pointer;
}
.submenu ul li .sub_buttons:hover {
  transform: scale(1.2);
  background: #FAF0E1;
  border: 1px solid #F74C25;
  
}

/* 기간 설정 SelectBox */
.period-select {
  display: inline-block;
  width: 120px;
  margin: 20px;
  border: 1px solid #999;
  border-radius: 10px;
  font-size: 14px;
  font-family: "NotoSansKR", "Sans-serif";
}

.period-select .selected {
  display: flex;
  justify-content: space-between;
  padding: 10px 18px;
  border: none;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
}

.period-select .selected .selected-value {
  max-width: 90px;
  line-height: 1.3;
}

.period-select .selected .arrow {
  width: 24px;
  height: 21px;
  background: url("../../assets/img/dropdown-arrow.png") no-repeat 70% 50%;
  background-size: 57% 57%;
}

/* 기간 옵션 하단 */
.period-select .period_options {
  display: none;
  width: 118px;
  border: 1px solid #999;
  border-radius: 10px;
  position: absolute;
  border-top: none;
  margin: 1px 0;
  background: #fff;
  cursor: pointer;
}
.period-select.active .period_options {
  display: block;
  z-index: 150;
}

.period-select .period_options li {
  display: block;
  border-radius: 10px;
  padding: 8px 5px;
}
.period_options li:hover {
  background-color: #64C75A;
}
.period_options li .btn_periods {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

/* 정렬 */
.course_sort {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  
}
.submenu .course_sort li {
  padding: 0 15px;
  border-right: 1px solid #283A2C;
}
.submenu .course_sort li:last-child {
  border-right: none;
}
.course_sort li .sort_list {
  border: none;
  background: #fff;
  cursor: pointer;
  
}
.course_sort li .sort_list:hover {
  text-decoration: underline;
  text-decoration-color: #283A2C;
  text-underline-position: under;
}

/** COURSE LISTS **/
.courses {
  display: flex;
  width: 1200px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5%;
  border-bottom: 1px solid #999;
  padding-bottom: 10px;
  font-family: "NotoSansKR", "Sans-serif";

}
.courses .course_box {
  width: 350px;
  margin-bottom: 50px;
  text-align: center;
  
}
.course_box .imgbox {
  position: relative;
  background: rgba(0,0,0,0.3);
  
}
.course_box .imgbox img {
  width: 350px;
  height: 135px;
  overflow: hidden;
  object-fit: cover;
}

.course_box .imgbox .course_content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  padding: 20px 20px;
  background: rgba(0,0,0,0.3);
  box-sizing: border-box;
  color: #fff;
}
.imgbox .course_content .title {
  margin: 15px auto;
  font-size: 22px;
  font-weight: 900;
  font-family: 'SeoulNamsan','Sans-serif';
  text-overflow: ellipsis;
  
}
.imgbox .course_content .area {
  margin-bottom: 7px;
}

.imgbox .course_content .area,
.imgbox .course_content .distance {
  padding-left: 33%;
  color: #e4f0fa;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
}

.course_box .course-list {
  border: 1px solid #e5e4e4;
  padding: 0 20px 10px 40px;
}

.course_box .course-list>li {
  display: block;
  background: url(https://cdn.visitkorea.or.kr/resources/images/sub/line_leftobj.png) 0 0 repeat-y;
  line-height: 2.3;
}
.course_box .course-list>li:first-child {
  padding-top: 15px;
}
.course_box .course-list>li:last-child {
  background: url(https://cdn.visitkorea.or.kr/resources/images/sub/line_leftobj.png) no-repeat;
}
.course_box .course-list li span {
  display: block;
  margin-left: -5px;
  padding-left: 20px;
  background: url(https://cdn.visitkorea.or.kr/resources/images/sub/ico_leftobj.png) 0 50% no-repeat;
  font-size: 17px;
  font-weight: 700;
  font-family: "NotoSansKR", Sans-serif;
  color: #333;

}

</style>