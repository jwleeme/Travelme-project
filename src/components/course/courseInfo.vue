<template>
  <section
    class="info-contents">
    <div class="info_top_area ">
      <div
        class="course_backimage">
        <img :src="courseData.image" />

        <div class="contents_box">
          <h1 class="course_title">
            {{ courseData.title }}
          </h1>
          <p class="area_name">
            {{ courseData.area }}
          </p>
          <p class="distance">
            코스 총 거리 : {{ courseData.distance }}
          </p>
        </div>
      </div>
    </div>

    <!-- 찜, 찜목록, 인쇄영역 -->
    <div class="pick_print_area">
      <!-- 찜버튼 -->
      <PickBtn
        :course-data="courseData" />

      <!-- 찜목록가기 버튼 -->
      <router-link
        class="picklist_icon"
        :to="{name:'PickList'}">
        <img
          src="../../assets/img/picklist.png"
          alt="찜한 코스 목록으로 가기"
          title="담은 코스 리스트" />
      </router-link>
      <div class="course_print">
        <button>
          <img
            @click="coursePrint()"
            class="btn_print"
            src="../../assets/img/printIcon.png"
            alt="상세 코스 인쇄하기"
            title="인쇄하기" />
        </button>
      </div>
    </div>
    <!-- 일정 , 테마 표시 영역 -->
    <div class="schedule_area">
      <ul class="trip_schedule">
        <li>
          <img
            src="../../assets/img/calender.png"
            alt="캘린더" />
          <p>일정</p>
          <strong>{{ courseData.schedule }}</strong>
        </li>

        <li>
          <img :src="selectThemas.img" />
          <p>테마</p>
          <strong>{{ selectThemas.name }}</strong>
        </li>
      </ul>
    </div>

    <div class="course_intro">
      <p v-html="courseData.cosintroText">
      </p>
    </div>
  </section>
</template>

<script>
import PickBtn from '../mypage/pickBtn.vue'

export default {
props: {
  courseData: {
    type: Object
  }
},
  components: {
    PickBtn
  },
  data() {
    return {
      
      cosThemaNames: [
          {
              name: "힐링여행",
              value: "healing",
              img: require("@/assets/img/healing.png")
          },
          {
              name: "가족여행",
              value: "familytour",
              img: require("@/assets/img/person3.png")
          },
          {
              name: "어드벤처",
              value: "adventure",
              img: require("@/assets/img/adventure.png")
          },
          {
              name: "먹거리여행",
              value: "foodtour",
              img: require("@/assets/img/foodtour.png")
          },
          {
              name: "친구와함께",
              value: "friends",
              img: require("@/assets/img/person2.png")
          }
      ],
      
    };
  },
  computed: {
    selectThemas() {
        if (!this.courseData) {
            return "";
        }
        const themaName = this.cosThemaNames.find(thema => thema.value === this.courseData.thema);
        return themaName;
    }
  },
  methods: {
    coursePrint() {
        window.print();
    },
   
  }
    
}
</script>

<style scoped>
.info-contents {
  width: 100%;
  margin-top: 100px;
  font-family: 'Noto Sans KR', sans-serif;
}
@media print {
  .info-contents {
    margin-top: 0;
  }
  .pick_print_area {
    display: none;
  }
  section .schedule_area {
    margin-top: 20px;
  }
}
.info-contents .info_top_area {
  padding-bottom: 20px;
  border-bottom: 1px solid #777;
  text-align: center;
  
}
.info_top_area .course_backimage {
  width: 100%;
  position: relative;
  color: #fff;
}
.info_top_area .course_backimage img {
  width: 100%;
  height: 230px;
  object-fit: cover;
}
.info_top_area .course_backimage .contents_box {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  
}

.course_backimage .course_title {
  position: relative;
  font-size: 50px;
  font-weight: 800;
  font-family: "SeoulNamsan", "Sans-serif";
  line-height: 3.1;
}
  .course_backimage p {
    position: relative;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.5;
    
  }

.pick_print_area {
  margin-top: 15px;
  text-align:center;
  overflow: hidden;
}
.pick_print_area .picklist_icon > img {
  float: left;
  height: 25px;
  padding: 0 20px;
  border: 0 none;
  background: transparent;
  cursor: pointer;
}

.pick_print_area button img {
  display: inline-block;
  width: 22px;
}
.pick_print_area .course_print {
  float: right;
  width: 50px;
}
.course_print > button {
  border: 0 none;
  background: transparent;
}
.course_print .btn_print {
  display: inline-block;
  width: 40px;
  cursor: pointer;
}

section .schedule_area {
  border-bottom: 1px solid #333;
  text-align: center;
}
.schedule_area .trip_schedule {
  width: 800px;
  overflow: hidden;
  display: inline-block;
}
.trip_schedule li {
  float: left;
  position: relative;
  display: inline-block;
  margin-left: 90px;
  padding-bottom: 45px;
  font-weight: 500;
}

.trip_schedule li img {
  float: left;
  width: 70px;
}
.trip_schedule li p {
  font-size: 18px;
  padding: 0px 100px;
  text-align: left;
   line-height: 2.5;
  color: #777;
}
.trip_schedule li strong {
  display: block;
  padding: 0px 100px;
  font-size: 20px;
  color: #333;
  text-align: left;
  line-height: 1.5;
}
.course_intro {
  padding: 50px 0;
  border-bottom: 1px solid #333;
}
.course_intro p {
  width: 700px;
  margin: 0 auto;
  color: #444;
  font-size: 17px;
  font-weight: 400;
  word-break: keep-all;
  line-height: 1.7;
  font-family: 'Noto Sans KR', sans-serif;
}



</style>