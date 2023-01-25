<template>
  <section>
    <div class="weather-area">
      <div class="weather_left">
        <div class="wea_box">
          <template v-if="!loading">
            <h2>
              <img
                src="../../assets/img/img_dot.png"
                alt="dot" />
              여행지역 날씨
              <img
                src="../../assets/img/img_dot.png"
                alt="dot" />
            </h2>
            <img
              v-if="spotsky > 0"
              class="sky_condition"
              :src="weatherIcon[spotsky].img"
              :alt="weatherIcon[spotsky].alt" />
            <p
              v-if="spotsky > 0"
              class="sky_text">
              {{ weatherIcon[spotsky].alt }}
            </p>
          </template>

          <p
            class="load_text"
            v-else>
            날씨 로딩중...
          </p>
        </div>
      </div>

      <div class="weather_right">
        <div class="temperatures row">
          <div class="sensory">
            <div class="imgbox">
              <img
                src="../../assets/img/weather/weather_sensory.png"
                alt="체감온도아이콘" />
            </div>
            <div class="textbox">
              <h3>
                체감온도
              </h3>
              <p v-if="!loading">
                26.5도
              </p>
              <p v-else>
                날씨 로딩중...
              </p>
            </div>
          </div>

          <div class="uv">
            <div class="imgbox">
              <img
                src="../../assets/img/weather/weather_uv.png"
                alt="자외선 아이콘" />
            </div>
            <div class="textbox">
              <h3>자외선 지수</h3>
              <p v-if="!loading">
                {{ uvSensory[uvsensory].uvtext }}
              </p>

              <p v-else>
                날씨 로딩중...
              </p>
            </div>
          </div>

          <div class="percent_area">
            <div class="imgbox">
              <img
                src="../../assets/img/weather/weather_rainpercent.png"
                alt="강수확률아이콘" />
            </div>
            <div class="textbox">
              <h3>강수확률</h3>
              <p v-if="!loading">
                {{ rainpercent + `%` }}
              </p>

              <p v-else>
                날씨 로딩중...
              </p>
            </div>
          </div>
          
          <div class="rainfall_area">
            <div class="imgbox">
              <img
                src="../../assets/img/weather/weather_rainfall.png"
                alt="강수량아이콘" />
            </div>
            <div class="textbox">
              <h3 class="rain_text">
                강수량
              </h3>
              <p v-if="!loading">
                10mm
              </p>
              <p v-else>
                날씨 로딩중...
              </p>
            </div>
          </div>
        </div>
        <div class="btns_3time">
          [ 3시간 간격 날씨 ]
        </div>

        <div class="weather_times">
          <ul v-if="!loading">
            <li
              v-for="(item, index) in weathers"
              :key="`weathers${index}`">
              <button>
                <div class="w_iconbox">
                  <img
                    :src="weatherIcon[item.sky].img"
                    :alt="weatherIcon[item.sky].alt" />
                </div>
                <p class="timebox">
                  {{ timeUpdate(item.tm) }}
                </p>
              </button>
            </li>
          </ul>
          <p
            class="load_text"
            v-else>
            날씨 로딩중...
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import moment from 'moment';

export default {
  props: {
    weathers: {
      type: Array
    },
    loading: {
      type: Boolean
    },
    spotsky: {
      type: Number
    },
    uvsensory: {
      type: Number
    },
    rainpercent: {
      type: Number
    },
    rainfall: {
      type: Number
    }
  },
  data() {
    return {
      weatherIcon: {
        1: {
          img: require("@/assets/img/weather/weather_sunny.png"),
          alt: "맑음",
        },
        2: {
          img: require("@/assets/img/weather/weather_manycloud.png"),
          alt: "구름",
        },
        3: {
          img: require("@/assets/img/weather/weather_cloudy.png"),
          alt: "흐림",
        },
        4: {
          img: require("@/assets/img/weather/weather_rain.png"),
          alt: "비",
        },
        5: {
          img: require("@/assets/img/weather/weather_shower.png"),
          alt: "소나기",
        },
        6: {
          img: require("@/assets/img/weather/weather_rainsnow.png"),
          alt: "비눈",
        },
        7: {
          img: require("@/assets/img/weather/weather_rainsnow.png"),
          alt: "눈비",
        },
        8: {
          img: require("@/assets/img/weather/weather_snow.png"),
          alt: "눈",
        }
      },
      uvSensory: {
        1: {
          uvtext : "낮음"
        },
        2: {
          uvtext : "낮음"
        },
        3: {
          uvtext : "보통"
        },
        4: {
          uvtext : "보통"
        },
        5: {
          uvtext : "보통"
        },
        6: {
          uvtext : "높음"
        },
        7: {
          uvtext : "높음"
        },
        8: { 
          uvtext : "매우 높음"
        },
        9: {
          uvtext : "매우 높음"
        },
        10: {
          uvtext : "매우 높음"
        }
      }
    }
  },
  methods: {
    // 시간 변환
    timeUpdate(date) {
      const d = moment(date).format("HH시")
      return d
    }
  }
}
</script>

<style scoped>
section {
 display: flex;
 width: 100%;
 text-align: center;
 
}
.weather-area {
  width: 100%;
  padding-top: 30px;
  border-bottom: 1px solid #333;
  font-family: "Noto Sans KR", Sans-serif;
}

.weather-area .weather_left {
  position: relative;
  width: 340px;
  height: 345px;
  float: left;
  color: #333;
  border-right: 1px solid #888;
}

.weather-area  .weather_left::after,
.weather-area  .weather_right::after {
  content: "";
  display: block;
  clear: both;
}
.weather_left .wea_box {
  position: absolute;
  top: 22%;
  left: 5%;
  width: 90%;
}
.weather_left h2 {
  margin: 0px 20px 0 33px;
  font-size: 25px;
  font-weight: 600;
}
.weather_left h2>img {
  margin: 0 0 5px 4px;
}

.weather_left .sky_condition {
  display: inline-block;
  vertical-align: middle;
  width: 140px;
  margin: 25px 25px 15px;
}
.weather_left .sky_text {
  display: inline-block;
  vertical-align: middle;
  font-size: 30px;
  font-weight: 600;
}


/* 오른쪽 영역 */
.weather-area .weather_right {
  float: left;
  width: calc(100% - 341px);
}

.weather_right .row {
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
  margin-bottom: 45px;
}
.weather_right .row > div {
  display: flex;
}

.weather_right .row h3 {
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
}
.weather_right .imgbox {
  width: 90px;
}
.weather_right .imgbox img {
  width: 85px;
}
.weather_right .sensory .imgbox img {
  width: 70px;
  margin-top: 10px;
}
.weather_right .textbox {
  margin-top: 5px;
  line-height: 3.7;
}

.weather_right .percent_area .textbox,
.weather_right .rainfall_area .textbox {
  margin-left: 10px;
}
.weather_right .percent_area .textbox >p ,
.weather_right .rainfall_area .textbox >p {
  margin-left: 10px;
}

.btns_3time {
  text-align: left;
  font-size: 17px;
  font-weight: 600;
  color: #333;
  margin-left: 30px;
}

/* 날씨 예보 */
.weather_times ul {
  margin: 20px;
  padding-bottom: 20px;
  font-size: 0;
  white-space: nowrap;
  overflow-x: auto;
}
.weather_times ul li {
  display: inline-block;
  margin: 0 10px;
}
.weather_times ul button {
  width: 100px;
  height: 140px;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
}
.weather_times ul button:hover {
  background: #f8f9fa;
}
.weather_times .w_iconbox {
  position: relative;
  width: 100%;
  height: 100px;
  margin: 0 auto;
}
.weather_times .w_iconbox img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
}
.weather_left .load_text, 
.weather_times .load_text {
  margin: 50px auto;
  font-size: 18px;
  color: #666;
  text-align: center;
}
/* 3시간 날씨 가로 스크롤바 */
::-webkit-scrollbar {
  height: 12px;
}
::-webkit-scrollbar-track {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 7px;
}
::-webkit-scrollbar-thumb {
  background: #339c5f;
  border-radius: 6px;
}

@media print {
  .weather-area .weather_left {
    width: 200px;
    height: 200px;
  }
  .weather-area .weather_right {
    width: calc(100% - 201px);
  }
  .weather_left .wea_box {
    width: 100%;
    text-align: center;
  }
  .wea_box > h2 {
    margin: 0 0;
    font-size: 20px;
  }
  .wea_box .sky_condition {
    width: 50%;
    margin: 25px 10px 15px 0;

  }
  .wea_box .sky_text {
    font-size: 20px;
  }
 
  .weather_right .row > div {
    display: block;
  }
  .weather_times ul {
    margin: 0 0;
  }
  .weather_times ul li {
    width: 50px;
  }
}


</style>