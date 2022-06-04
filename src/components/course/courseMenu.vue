<!-- 공통 코스 메인메뉴 -->
<template>
  <div class="mainmenu">
    <div class="inner">
      <h3>코스별 선택</h3>
      <div class="line"></div>
      <button
        class="season"
        @click="mainmenu='season'">
        계절별
      </button>
      <button
        class="region"
        @click="mainmenu='region'">
        지역별
      </button>
      <button
        class="thema"
        @click="mainmenu='thema'">
        테마별
      </button>
    </div>
  </div>

  <!-- 서브 메뉴 -->
  <div class="submenu">
    <div class="inner">
      <ul>
        <li
          v-for="(menu, index) in menus" 
          :key="`menu${index}`">
          <button>{{ menu.name }}</button>
        </li>

        <!-- 기간 설정 SELECT BOX -->
        <select>
          <option
            class="periods_box"
            v-for="(period, index) in periodsOption"
            :key="`trip_periods${index}`">
            {{ period.name }}
          </option>
        </select>

        <!-- 정렬 -->
        <div class="course_sort">
          <ul>
            <li>최신순</li>
            <li>인기순</li>
            <li>오래된순</li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      mainmenu: "season",

      periodsOption: [
      {
        name: "─ 여행 기간 ─",
        value: ""
      },
      {
        name: "",
        value: ""
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
    ]
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
    }
  },
  methods: {
  }
}
</script>


<style scoped>
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
  font-family: "Noto Sans KR", "돋움";
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
  color: #fff;
  font-size: 30px;
  font-weight: 800;
}
.mainmenu button:hover {
  background: #F1F0ED;
  border: 2px solid #F74C25;
  color: #283A2C;
  font-weight: 800;
  cursor: pointer;
}

.submenu ul li {
  display: inline-block;
  font-family: "NotoSansKR","NotoSansJP";
  cursor: pointer;
}
.submenu ul li button {
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
  
}
.submenu ul li button:hover {
  transform: scale(1.2);
  background: #FAF0E1;
  border: 1px solid #F74C25;
  

}
.submenu select {
  width: 130px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 5px;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 0 30px;
}
.submenu select option {
  display: inline-block;
  font-size: 14px;
}
.submenu .course_sort {
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
</style>