<template>
  <div class="weather-area inner">
    <div class="weather_left">
      <h2>여행지역 날씨 (24H)</h2>
      <img
        class="wea_icon_24h"
        src="../../assets/img/weather/weather_sunny.png"
        alt="24H후 날씨" />
      <p class="sky_condition">
        맑음
      </p>
      <p class="temperature_3h">
        일 3시간 기온
      </p>
    </div>
    <div class="weather_right">
      <div class="temperatures">
        <img
          src="../../assets/img/weather/weather_sensory.png"
          alt="체감온도아이콘" />
        <h3>체감온도</h3>
        <span>26.5도</span>
        <img
          src="../../assets/img/weather/weather_uv.png"
          alt="자외선 아이콘" />
        <h3>자외선 지수</h3>
        <span>보통</span>
      </div>
      <div class="rains">
        <img
          src="../../assets/img/weather/weather_rainpercent.png"
          alt="강수확률아이콘" />
        <h3>강수확률</h3>
        <span>50%</span>
        <img
          src="../../assets/img/weather/weather_rainfall.png"
          alt="강수량아이콘" />
        <h3>강수량</h3>
        <span>80</span>
      </div>
      <div class="weather_times">
        <button>24H</button>
        <button>3Hour</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  
}
</script>

<style scoped>
.weather-area {
  font-family: "Noto Sans KR", Sans-serif;
}
.weather-area  .weather_left {
  float: left;
  width: 400px;
}
.weather-area  .weather_left::after {
  content: "";
  display: block;
  clear: both;
}

</style>