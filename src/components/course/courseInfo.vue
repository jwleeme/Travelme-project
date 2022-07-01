<template>
  <section
    id="CoursePrint"
    class="info-contents">
    <div class="info_top_area ">
      <div class="course_backimage">
        <!-- 임시 UI, 추가 수정 예정 -->
        <h1 class="course_title">
          구례 봄꽃 명소 코스
        </h1>
        <p class="area_name">
          전남 구례군
        </p>
        <p class="distance">
          코스 총 거리 : 61.8km
        </p>
      </div>
    </div>

    <!-- 찜, 찜목록, 인쇄영역 -->
    <div class="pick_print_area">
      <button
        class="btn_pick"
        title="찜하기">
        <span
          @click="counter +=1"
          class="pick_ico"></span>
        <span class="pick_num">{{ counter }}</span>
      </button>
      <button>
        <img
          src="../../assets/img/picklist.png"
          alt="찜한 코스 목록으로 가기"
          title="담은 코스 리스트" />
      </button>
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
          <strong>당일여행</strong>
        </li>
        <li>
          <img
            src="../../assets/img/person1.png"
            alt="사람" />
          <p>테마</p>
          <strong>가족코스</strong>
        </li>
      </ul>
    </div>

    <div class="course_intro">
      <p>
        지리산을 벗하고, 섬진강을 동무삼는 구례는 자연과 함께하는 최고의 여행지입니다.<br />
        요즘처럼 봄공기 훈훈한 4월에는 더더욱이요. 산수유, 벚꽃… 봄꽃이 가득 피어나 어디를 바라봐도 천혜의 절경인 구례의 봄 여행. 다양한 봄꽃을 즐길 수 있는 구례 명소를 전해드립니다.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    coursePrint() {
      var initBody = document.body.innerHTML;
      window.onbeforeprint = function () {
        document.body.innerHTML = document.getElementById('CoursePrint').innerHTML;
      }
      window.onafterprint = function () {
        document.body.innerHTML = initBody;
      }
      window.print();
    }
  }
}
</script>

<style scoped>
.info-contents {
  width: 100%;
  margin-top: 200px;
  font-family: 'Noto Sans KR', sans-serif;
}
.info-contents .info_top_area {
  padding-bottom: 20px;
  border-bottom: 1px solid #777;
  text-align: center;
  
}
.info_top_area .course_backimage {
  width: 100%;
  height: 230px;
  position: relative;
  background: url("https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=7479df99-bb83-41e9-893b-0114e9421592") no-repeat center/cover;
  color: #fff;
  border-radius: 2px;
}

.info_top_area .course_backimage::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.2);
  
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
.pick_print_area > button {
  float: left;
  height: 25px;
  padding: 0 10px;
  border: 0 none;
  background: transparent;
  cursor: pointer;
}
.pick_print_area .btn_pick .pick_ico {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("https://cdn.visitkorea.or.kr/resources/images/sub/ico_mpost01.png") 0 / 100% no-repeat;
}
.pick_print_area .btn_pick .pick_num {
  display: inline-block;
  color: #000;
  vertical-align: top;
  margin-left: 10px;
  font-size: 15px;
 
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