<template>
  <section>
    <h1 class="maptitle">
      <span>지도</span>
    </h1>

    <!-- 코스 지역 메뉴 영역 -->
    <div class="map-selectbox">
      <div class="teb_menu">
        <ul>
          <li
            v-for="(mapmenu, index) in mapSelectOption"
            :key="`map_selected${index}`">
            <button
              class="btn_tebmenu"
              :class="{active: teb_on === index}"
              @click.prevent="teb_on = index">
              {{ mapmenu.name }}
            </button>
          </li>
        </ul>
      </div>
      <div class="distance">
        <p>해당 관광지로부터</p>
        <select
          name="spotdistance"
          id="dtc_search"
          data-title="500m 이내 ▼">
          <option value="0">
            500m 이내
          </option>
          <option value="1">
            1km 이내
          </option>
        </select>
      </div>
    </div>

    <!-- 지도 연결 테스트용 -->
    <div class="map_area">
      <div id="map"></div>
      <div class="btn_top"></div>
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
      map: null,
      marker: [],
      infowindow: [], 
      mapSelectOption: [
        {
          name: "관광지",
        },
        {
          name: "숙박",
        },
        {
          name: "카페",
        },
        {
          name: "음식점",
        }
      ],
      teb_on: 0,
      // 지도 영역 탭 버튼 활성화 여부 (기본값)
      // distanceOption: [
      //   {
      //     name: "500m 이내",
      //     value: 0
      //   },
      //   {
      //     name: "1km 이내",
      //     value: 1
      //   }
      // ]
    }
  },
  // mounted() {
  //   this.initmap({
  //     y: 35.30018858592251,
  //     x: 127.4627016564301
  //   })
  // },
  watch: {
    teb_on: {
      handler() {
        this.$nextTick(() => {

          // this.initmap()
        })
      }
    },
    courseData: {
      deep: true,
      handler(od, nd) {
        if (!nd.courseID) { return false }

        this.initmap(nd.spotList[0].location.position)
      }
    }
  },
  methods: {

    // 지도 만드는 함수
    initmap(points) {

      const tripspot = new window.naver.maps.LatLng(points.y, points.x);
      // const tripspot1 = new window.naver.maps.LatLng(35.19675254357139, 127.45998412209003);
      // const tripspot2 = new window.naver.maps.LatLng(35.272689270936894, 127.47655847369954);
      // const tripspot3 = new window.naver.maps.LatLng(35.18636196717531, 127.46537671043156);
        this.map = new window.naver.maps.Map('map', {
          center: tripspot.destinationPoint(0, 500),
          zoom: 15, //지도 초기 줌 레벨
          minZoom: 5,
          zoomControl: true,
          zoomControlOptions: { //줌 컨트롤 옵션
            position: window.naver.maps.Position.TOP_RIGHT
          }
        })
      
    },

    // 마커 셋팅 메소드
    setMarkers() {
      // const tripspot = new window.naver.maps.LatLng(points.y, points.x);

      this.marker = new window.naver.maps.Marker({
          map: this.map,
          position: tripspot,
          icon: {
            url: "https://www.gurye.go.kr/images/homepage/site/tour/content/icon_course.png", //50, 68 크기의 원본 이미지
            size: new window.naver.maps.Size(40, 34),
            scaledSize: new window.naver.maps.Size(25, 34),
            origin: new window.naver.maps.Point(0, 0),
            anchor: new window.naver.maps.Point(12, 34)

          }

        });
    },
    
    // 정보창 메소드
    setInfoWindows() {
      const spotContents = [
        '<div class="iw_inner" style="margin:15px;">',
        '   <h3 style="font-size:20px;">구례 산수유마을</h3><br />',
        '   <p style="font-size: 13px;">전라남도 구례군 산동면 정산길 251<br />',
        '       <br /><a href="http://sansuyoo.net/sansuyoo/#1" style="color:blue" target="_blank">http://sansuyoo.net/sansuyoo/</a>',
        '   </p><br />',
        '</div>'
      ].join('');

      var infowindow = new window.naver.maps.InfoWindow({
        content: spotContents,
        maxWidth: 300,
        backgroundColor: "#eee",
        borderColor: "#FD8727",
        borderWidth: 3,
        anchorSize: new window.naver.maps.Size(30, 10),
        anchorSkew: true,
        anchorColor: "#eee",
        pixelOffset: new window.naver.maps.Point(20, -20),
        
      });
    },

    // 이벤트 메소드
    setEventBinding() {
      window.naver.maps.Event.addListener(this.marker, "click",  (e) => {
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(this.map, this.marker);

        }
      });

      infowindow.open(this.map, this.marker);
    }
  }
}
</script>

<style scoped>
section {
  font-family: "Noto Sans KR", "Sans-serif";
  border-bottom: 1px solid #777;
}
.maptitle {
  font-size: 40px;
  font-weight: 600;
  padding: 30px 10px 10px;
}
.maptitle span {
  position: relative;
  padding: 0 24px;
  color: #2c2c2c;
}
.maptitle span::before {
  content: '';
  position: absolute;
  top: 28px;
  left: 0;
  width: 9px;
  height: 9px;
  background: url("../../assets/img/img_dot.png") center center no-repeat;
}
.maptitle span::after {
  content: '';
  position: absolute;
  top: 28px;
  right: 0;
  width: 9px;
  height: 9px;
  background: url("../../assets/img/img_dot.png") center center no-repeat;
}

/* 지도 메뉴 영역 */
.map-selectbox {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px 0;
}
.map-selectbox ul {
  display: flex;
}
.teb_menu ul li {
  position: relative;
  width: 220px;
  text-align: center;
}

.teb_menu ul li .btn_tebmenu {
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 500;
}
.teb_menu ul li .btn_tebmenu:hover,
.teb_menu ul li>button.active {
  background: #2c2c2c;
  color: #fff;
  cursor: pointer;
}

.teb_menu ul li>.btn_tebmenu.active::after {
  content: "";
  position: absolute;
  left: 81px;
  bottom: -7px;
  width: 60px;
  height: 60px;
  background: url("../../assets/img/bg_tabMenu.png") bottom no-repeat;
  
}

.distance {
  display: flex;
  position: relative;
}
.distance p {
  margin-right: 15px;
  font-size: 18px;
  line-height: 3.5;
}
#dtc_search {
  width: 110px;
  height: 50px;
  margin-top: 6px;
  border: none;
  border-radius: 10px;
  background: #f8a36b;
  color: #00491E;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
}

.distance .distance_box {
  display: none;
}

.map_area div.active {
  display: block;
}

#map {
  width: 100%;
  height: 600px;
}

.btn_top {
  width: 50px;
  height: 50px;
  background-image: url("../../assets/img/btn_top.png") 100% cover;
}

</style>