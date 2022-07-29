<template>
  <!-- 코스별 스팟 리스트 -->
  <section class="detail-info-area">
    <div class="cos_spotlist inner">
      <ul>
        <li
          v-for="(coursetit, index) in cosListNames " 
          :key="`costitle${index}`"
          class="cos_names"
          :class="{active: teb_on === index}">
          <strong> {{ coursetit.num }}</strong>
          <div>
            <button
              class="spottitle"
              @click.prevent="teb_on = index">
              {{ coursetit.name }}
            </button>
          </div>
        </li>
      </ul>

      <!-- 코스 상세정보 내용 -->
      <div
        class="info_content_area">
        <transition name="fade">
          <div
            v-if="teb_on === 0"
            class="middlebox">
            <div
              class="detailbox">
              <p class="title">
                ① 한국 압화 박물관
              </p>
              <p class="location">
                전남 구례군 구례읍 동산1길 29
              </p>

              <div
                class="cosimgbox">
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000020434&fileSn=3"
                  alt="이미지1" />
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000020976&fileSn=3"
                  alt="이미지2" />
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000020969&fileSn=3"
                  alt="이미지3" />
              </div>

              <div class="tag_info">
                <span>#가족과함께</span>
                <span>#관광지</span>
                <span>#나들이</span>
                <span>#힐링</span>
                <span>#자연</span>
                <span>#전라남도</span>
              </div>
            </div>

            <div
              class="usage_infobox">
              <p class="title">
                <span>이용안내 </span>
              </p>
              <ul class="contents">
                <li>
                  ※ 문의 및 안내 :
                  <span>문화관광과 041-630-1224</span>
                </li>
                <li>
                  ※ 운영시간 :
                  <span>
                    AM 10:00 ~ PM 17:00 (월요일 휴무) <br />
                    &nbsp;&nbsp;- 제21회 대한민국 압화대전 준비기간 동안 휴관(2022. 1. 11. ~ 3. 27.)
                  </span>
                </li>
                <li>
                  ※ 이용요금 : 
                  <span>
                    -개인(순천시민 50%할인)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;어른 2,000원 / 청소년 1,000원 / 어린이 1,000원<br />
                    &nbsp;&nbsp;&nbsp;- 단체(30인 이상)<br />
                    &nbsp;&nbsp;&nbsp;어른 1,500원 / 청소년 500원 / 어린이 500원<br />
                    &nbsp;&nbsp;&nbsp;-무료입장<br />
                    &nbsp;&nbsp;&nbsp;국가유공자, 장애인, 현역군경, 경로우대자(65세 이상),기초생활수급자, 미취학 아동, 구례군민, '문화가 있는 날'(매월 마지막 주 수요일)
                  </span>
                </li>
                <li>
                  ※ 홈페이지 :
                  <a href="https://www.gurye.go.kr/tour/detail.do?tourId=TOUR_0000000051&menuNo=101001013000">https://gurye.go.kr/farmtech/</a>
                </li>
                <li>
                  ※ 가이드연결 : 신청 시 가능
                </li>
              </ul>
            </div>

            <div
              class="comforts_box">
              <p class="title">
                <span>편의시설 안내</span>
              </p>
              <ul class="comfort_list">
                <li>
                  <span>주차장</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_parking_on.png"
                    alt="주차장" />
                </li>
                <li>
                  <span>화장실</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_disabledToilets_on.png"
                    alt="화장실" />
                </li>
                <li>
                  <span>휠체어대여</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_wheelchair.png"
                    alt="휠체어대여" />
                </li>
                <li>
                  <span>장애인주차장</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_disabledParking_on.png"
                    alt="장애인주차장" />
                </li>
                
                <li>
                  <span>유모차대여</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_babyCarriage.png"
                    alt="유모차대여" />
                </li>
                <li>
                  <span>반려동물출입</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_animal.png"
                    alt="반려동물출입" />
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div
            v-if="teb_on == 1"
            class="middlebox">
            <div
            
              class="detailbox">
              <p class="title">
                ② 천은사
              </p>
              <p class="location">
                전남 구례군 광의면 노고단로 209
              </p>
              <div class="cosimgbox">
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000021119&fileSn=5"
                  alt="이미지1" />
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000021116&fileSn=5"
                  alt="이미지2" />
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000021109&fileSn=5"
                  alt="이미지3" />
              </div>
              <div class="tag_info">
                <span>#가족과함께</span>
                <span>#역사</span>
                <span>#걷기</span>
                <span>#구례여행</span>
                <span>#자연</span>
                <span>#전라남도</span>
              </div>
            </div>

            <div
              class="usage_infobox">
              <p class="title">
                <span>이용안내 </span>
              </p>
              <ul class="contents">
                <li>
                  ※ 문의 및 안내 :
                  <span>천은사 종무소 061-781-4800</span>
                </li>
                <li>
                  ※ 운영시간 :
                  <span>
                    연중무휴
                  </span>
                </li>
                <li>
                  ※ 이용요금 : 
                  <span>
                    무료
                  </span>
                </li>
                <li>
                  ※ 홈페이지 :
                  <a href="http://www.choneunsa.org/">http://www.choneunsa.org/</a>
                </li>
                <li>
                  ※ 가이드연결 : 신청 시 가능
                </li>
              </ul>
            </div>

            <div
              class="comforts_box">
              <p class="title">
                <span>편의시설 안내</span>
              </p>
              <ul class="comfort_list">
                <li>
                  <span>주차장</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_parking_on.png"
                    alt="주차장" />
                </li>
                <li>
                  <span>화장실</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_disabledToilets_on.png"
                    alt="화장실" />
                </li>
                <li>
                  <span>휠체어대여</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_wheelchair.png"
                    alt="휠체어대여" />
                </li>
                <li>
                  <span>장애인주차장</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_disabledParking_on.png"
                    alt="장애인주차장" />
                </li>
                
                <li>
                  <span>유모차대여</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_babyCarriage.png"
                    alt="유모차대여" />
                </li>
                <li>
                  <span>반려동물출입</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_animal.png"
                    alt="반려동물출입" />
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div
            v-if="teb_on == 2"
            class="middlebox">
            <div
            
              class="detailbox">
              <p class="title">
                ③ 지리산 정원
              </p>
              <p class="location">
                전남 구례군 산동면 탑동1길 125
              </p>
              <div class="cosimgbox">
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000030481&fileSn=1"
                  alt="이미지1" />
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000030475&fileSn=1"
                  alt="이미지2" />
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000030469&fileSn=1"
                  alt="이미지3" />
              </div>
              <div class="tag_info">
                <span>#누구나함께</span>
                <span>#관광지</span>
                <span>#걷기좋은곳</span>
                <span>#힐링</span>
                <span>#자연</span>
                <span>#전라남도</span>
              </div>
            </div>
            <div
              class="usage_infobox">
              <p class="title">
                <span>이용안내 </span>
              </p>
              <ul class="contents">
                <li>
                  ※ 문의 및 안내 :
                  <span>지리산정원 061-780-2891</span>
                </li>
                <li>
                  ※ 운영시간 :
                  <span>
                    AM 09:00~ PM 18:00
                  </span>
                </li>
                <li>
                  ※ 이용요금 : 
                  <span>
                    - 야생화테마랜드
                    개인
                    어른 2,600원 / <br />&nbsp;&nbsp;&nbsp;&nbsp;청소년,군인 1,500원 / 어린이 1,000원<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- 구례산수유자연휴양림 단체(20명이상)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;어른 1,600원 / 청소년,군인 1,200원 / 어린이 800원<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;-구례수목원<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;어른 2,000원 / 청소년,군인 1,500원 / 어린이 1,000원
                  </span>
                </li>
                <li>
                  ※ 홈페이지 :
                  <a href="https://ecopark.gurye.go.kr/">ecopark.gurye.go.kr(지리산정원)</a>
                </li>
                <li>
                  ※ 가이드연결 : 신청 시 가능
                </li>
              </ul>
            </div>
            <div
              class="comforts_box">
              <p class="title">
                <span>편의시설 안내</span>
              </p>
              <ul class="comfort_list">
                <li>
                  <span>주차장</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_parking_on.png"
                    alt="주차장" />
                </li>
                <li>
                  <span>화장실</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_disabledToilets_on.png"
                    alt="화장실" />
                </li>
                <li>
                  <span>휠체어대여</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_wheelchair.png"
                    alt="휠체어대여" />
                </li>
                <li>
                  <span>장애인주차장</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_disabledParking_on.png"
                    alt="장애인주차장" />
                </li>
                
                <li>
                  <span>유모차대여</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_babyCarriage.png"
                    alt="유모차대여" />
                </li>
                <li>
                  <span>반려동물출입</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_animal.png"
                    alt="반려동물출입" />
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div
            v-if="teb_on == 3"
            class="middlebox">
            <div 
            
              class="detailbox">
              <p class="title">
                ④ 섬진강 대숲길
              </p>
              <p class="location">
                전남 구례군 구례읍 원방리 1
              </p>
              <div class="cosimgbox">
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000030515&fileSn=1"
                  alt="이미지1" />
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000030513&fileSn=1"
                  alt="이미지2" />
                <img
                  src="https://www.gurye.go.kr/board/getImage.do?atchFileId=FILE_000000000021061&fileSn=3"
                  alt="이미지3" />
              </div>
              <div class="tag_info">
                <span>#누구나함께</span>
                <span>#관광지</span>
                <span>#나들이</span>
                <span>#힐링</span>
                <span>#포토스팟</span>
                <span>#전라남도</span>
              </div>
            </div>

            <div
              class="usage_infobox">
              <p class="title">
                <span>이용안내 </span>
              </p>
              <ul class="contents">
                <li>
                  ※ 문의 및 안내 :
                  <span>섬진강 대숲길 061-780-2390</span>
                </li>
                <li>
                  ※ 운영시간 :
                  <span>
                    연중무휴
                  </span>
                </li>
                <li>
                  ※ 이용요금 : 
                  <span>
                    무료
                  </span>
                </li>
                <li>
                  ※ 홈페이지 :
                  <a href="https://www.gurye.go.kr/tour/detail.do?tourId=TOUR_0000000044&menuNo=101001005000">https://www.gurye.go.kr/ (섬진강 대숲길)</a>
                </li>
                <li>
                  ※ 가이드연결 : 불가
                </li>
              </ul>
            </div>

            <div
              class="comforts_box">
              <p class="title">
                <span>편의시설 안내</span>
              </p>
              <ul class="comfort_list">
                <li>
                  <span>주차장</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_parking_on.png"
                    alt="주차장" />
                </li>
                <li>
                  <span>화장실</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_disabledToilets_on.png"
                    alt="화장실" />
                </li>
                <li>
                  <span>휠체어대여</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_wheelchair.png"
                    alt="휠체어대여" />
                </li>
                <li>
                  <span>장애인주차장</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_disabledParking_on.png"
                    alt="장애인주차장" />
                </li>
                
                <li>
                  <span>유모차대여</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_babyCarriage.png"
                    alt="유모차대여" />
                </li>
                <li>
                  <span>반려동물출입</span>
                  <img
                    src="https://www.gurye.go.kr/images/homepage/site/tour/sub/icon_animal.png"
                    alt="반려동물출입" />
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <!-- 상단으로 이동 버튼 -->
        <div class="btn_top"></div>
      </div>
    </div>
  </section>
</template>


<script>


export default {
  data() {
    return {
      cosListNames: [
        {
          num : "01",
          name: "한국압화박물관"
        },
        {
          num : "02",
          name: "천은사"
        },
        {
          num : "03",
          name: "지리산 정원"
        },
        {
          num : "04",
          name: "섬진강 대숲길"
        },
      ],
      teb_on: 0,
    }
  },

  methods: {

  }
}
</script>

<style scoped>
.detail-info-area {
  padding-top: 40px;
  font-family: "Noto Sans KR", "Sans-serif";
}
.cos_spotlist ,
.info_contentbox{
  background: #f3f2f2;
  border-radius: 5px;
}
.cos_spotlist> ul {
  display: flex;
  justify-content: space-around;
}
.cos_spotlist> ul .cos_names {
  position: relative;
  margin: 40px auto;
  text-align: center;

}
.cos_spotlist ul li strong {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 2px solid #888;
  border-radius: 50px;
  font-size: 22px;
  font-weight: 700;
  color: #00491E;
  text-align: center;
  line-height: 1.7;
  margin: 20px auto;
}
.cos_spotlist ul li.active strong {
  border: 2px solid #FC7A01;
}

.cos_spotlist ul li .spottitle {
  width: 180px;
  height: 100px;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background: #283a2c;
  color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
}

.cos_spotlist ul li.active .spottitle {
  background: #F74C25;
}
.cos_spotlist ul li.active .spottitle::after {
  content: "";
  position: absolute;
  top: 184px;
  left: 73px;
  display: block;
  width: 0;
  height: 0;
  border-top: 23px solid #F74C25;
  border-right: 17px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 17px solid transparent;
}

/* 코스 상세정보 */
.info_content_area {
  position: relative;
  width: 100%;
  height: 1300px;
  background: #f3f2f2;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.middlebox {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  transform: translateX(-50%);
}
.middlebox::after {
  content: "";
  display: block;
  clear: both;
}
.detailbox {
  background: #FFF;
  padding: 15px 0;
  margin-bottom: 30px;
  border: 1px solid #F74C25;
  border-radius: 10px;
  box-shadow: 2px 3px 9px 3px rgb(87 88 89 / 25%);
}
.detailbox p {
  text-align: center;
  line-height: 2.5;
}
.detailbox .title {
  font-size: 23px;
  font-weight: 700;
}
.detailbox .location {
  color: #444;
  font-size: 16px;
}
.cosimgbox {
  width: 100%;
  margin: 30px auto;
}
.cosimgbox img {
  width: 280px;
  height: 240px;
  margin: 0 25px;
  border-radius: 10px;
  box-shadow: 2px 3px 9px 1px rgba(95, 96, 97, 0.3);
}
.tag_info {
  text-align: center;
  line-height: 2.5;
}
.tag_info > span {
  margin-right: 10px;
  color: #666;
}

.detailbox>.cosimgbox img:hover {
  transition: all .1s ease-in;
  transform: scale(1.1);
}



/** 이용안내, 편의시설 영역 **/
.info_content_area .comforts_info_area {
  width: 1000px;
  margin: 20px auto;
  overflow: hidden;
  font-family: "Noto Sans KR", "Sans-serif";
}

.usage_infobox {
  margin-right: 30px;
  border: 1px solid #F74C25;
}

.usage_infobox .contents {
  display: block;
  
}
.usage_infobox .contents>li {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #222;

  
}
.usage_infobox .contents>li>span {
  font-size: 16px;
  font-weight: 400;
  color: #222;
}
.usage_infobox .contents>li>a {
  font-size: 16px;
  font-weight: 400;
  color: rgb(56, 37, 231);
  text-decoration: underline;
}

.usage_infobox,
.comforts_box {
  display: inline-block;
  max-width: 48%;
  float: left;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
}
.comforts_box {
  border: 1px solid #F74C25;
}

.usage_infobox >.title,
.comforts_box >.title {
  position: relative;
  padding: 18px 15px;
  font-size: 28px;
  font-weight: 600;
}
.usage_infobox >.title>span,
.comforts_box >.title>span {
  position: relative;
  padding-left: 10px;
}

.usage_infobox >.title>span::before,
.comforts_box >.title>span::before {
  content: '';
  position: absolute;
  top: 18px;
  left: -10px;
  width: 11px;
  height: 10px;
  background: url("../../assets/img/img_dot.png") center center no-repeat;
}
.usage_infobox >.title>span::after,
.comforts_box >.title>span::after {
  content: '';
  position: absolute;
  top: 18px;
  width: 10px;
  height: 10px;
  padding-right: 15px;
  background: url("../../assets/img/img_dot.png") center center no-repeat;
}

.comforts_box .comfort_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 12px 0;
  text-align: center;
}
.comforts_box .comfort_list li {
  font-size: 18px;
}
.comforts_box .comfort_list li span {
  display: inline-block;
  width: 100px;
  margin-right: 10px;
  margin-bottom: 70px;
  vertical-align: middle;
}




</style>