<template>
  <section>
    <h1 class="maptitle">
      <span>지도</span>
    </h1>
    <!-- 지도 연결 테스트용 -->
    <div
      id="map"
      style="width:100%;height:400px;">
    </div>
  </section>
</template>


<script>

export default {
  data() {
    return {
      map : null
    }
  },
  mounted() {

  const mapOptions = {
    center: new window.naver.maps.LatLng(35.2024947, 127.4626534),
    zoom: 13, //지도 초기 줌 레벨
    minZoom: 7, 
    zoomControl: true,
    zoomControlOptions: { //줌 컨트롤 옵션
        position: window.naver.maps.Position.TOP_RIGHT
    }
  };

  this.map = new window.naver.maps.Map('map', mapOptions);

  }
}
</script>

<style scoped>
.maptitle {
  font-size: 40px;
  font-weight: 800;
  padding: 30px 10px;
}
.maptitle span {
  position: relative;
  /* display: inline-block; */
  padding: 0 24px;
  color: #2c2c2c;
}
.maptitle span::before {
  content: '';
  position: absolute;
  top: 13px;
  left: 0;
  width: 9px;
  height: 9px;
  background: url("../../assets/img/img_dot.png") center center no-repeat;
}
.maptitle span::after {
  content: '';
  position: absolute;
  top: 13px;
  right: 0;
  width: 9px;
  height: 9px;
  background: url("../../assets/img/img_dot.png") center center no-repeat;
}
</style>