<template>
  <!-- 코스별 스팟 리스트 -->
  <section class="detail-info-area">
    <div class="cos_spotlist inner">
      <ul>
        <li
          v-for="(coursetit, index) in courseData.spotList " 
          :key="`costitle${index}`"
          class="cos_names"
          :class="{active: teb_on === index}">
          <strong> {{ cosListNames[index].num }}</strong>
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
        <transition
          v-for="(spot, index) in courseData.spotList"
          :key="`spot_${spot.sequence}`"
          name="fade">
          <div
            v-if="teb_on === index"
            class="middlebox">
            <div class="detailbox">
              <p
                class="title">
                {{ cosListNames[index].num }} {{ spot.name }}
              </p>
              <p class="location">
                {{ spot.location.address }}
              </p>

              <div
                class="cosimgbox">
                <img
                  v-for="(image, imgidx) in spot.image"
                  :key="`image${imgidx}`"
                  :src="image"
                  alt="" />
              </div>

              <div class="tag_info">
                <span
                  v-for="(tag, tagidx) in spot.hashtag"
                  :key="`tag${tagidx}`">#{{ tag }}</span>
              </div>
            </div>

            <div
              class="usage_infobox">
              <p class="title">
                <span>이용안내 </span>
              </p>
              <ul class="contents">
                <li>
                  <span class="tit">※ 문의 및 안내 :</span>
                  <span v-html="spot.guideTexts.contect"></span>
                </li>
                <li>
                  <span class="tit">※ 운영시간 :</span>
                  <span v-html="spot.guideTexts.operatingHours">
                    
                  </span>
                </li>
                <li>
                  <span class="tit">※ 이용요금 : </span>
                  <span v-html="spot.guideTexts.usefee">
                    
                  </span>
                </li>
                <li>
                  <span class="tit">※ 홈페이지 :</span>
                  <a
                    v-if="spot.guideTexts.homepage"
                    :href="spot.guideTexts.homepage"
                    target="_blank">{{ spot.guideTexts.homepage }}</a>
                  <span v-else>
                    없음
                  </span>
                </li>
                <li>
                  <span class="tit">※ 가이드연결 :</span> 
                  <span>{{ spot.guideTexts.connectStatus }}</span>
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
                    :src="spot.guideimages[0]"
                    alt="주차장" />
                </li>
                <li>
                  <span>화장실</span>
                  <img
                    :src="spot.guideimages[1]"
                    alt="화장실" />
                </li>
                <li>
                  <span>휠체어대여</span>
                  <img
                    :src="spot.guideimages[2]"
                    alt="휠체어대여" />
                </li>
                <li>
                  <span>장애인주차장</span>
                  <img
                    :src="spot.guideimages[3]"
                    alt="장애인주차장" />
                </li>
                
                <li>
                  <span>유모차대여</span>
                  <img
                    :src="spot.guideimages[4]"
                    alt="유모차대여" />
                </li>
                <li>
                  <span>반려동물출입</span>
                  <img
                    :src="spot.guideimages[5]"
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
  props: {
    courseData: {
      type : Object
    }
  },
  data() {
    return {
      cosListNames: [
        {
          num : "01"
        },
        {
          num : "02"
        },
        {
          num : "03"
        },
        {
          num : "04",

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
.detail-info-area::after {
  content: "";
  display: block;
  margin-top: 40px;
  border: 1px solid #777;
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
  height: 1100px;
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
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #222;

}

.usage_infobox .contents>li>.tit {
  flex: 0 0 auto;
  margin-right: 10px;
  font-weight: 700;
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
  width: 48%;
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

@media print {
  .detail-info-area {
   page-break-before: always;
   padding-top: 0;
  }
  .detail-info-area::after {
    content: "";
    display: none;
  }
  .info_content_area {
    height: 850px;
  }
  .middlebox .usage_infobox {
    height: calc(100% - 485px);
    overflow-y: auto;
  }
  .cosimgbox img {
    width: 30%;
    height: auto;
    margin: 0 1.6%;
  }
  .comforts_box .comfort_list {
    
  }
  .comforts_box .comfort_list li {
    flex: 0 0 50%;
  }
  .comforts_box .comfort_list li:nth-child(n + 3) {
    margin-top: 15px;
  }
  .comforts_box .comfort_list li img {
    width: 40%;
  }
  .comforts_box .comfort_list li span {
    display: block;
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
    font-size: 15px;
  }
  
}




</style>