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
              :class="{active: teb_on === mapmenu.value}"
              @click.prevent="teb_on = mapmenu.value">
              {{ mapmenu.name }}
            </button>
          </li>
        </ul>
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
      infowindow: {}, 
      mapSelectOption: [
        {
          name: "관광지",
          value: "spotList"
        },
        {
          name: "숙박",
          value: "accoms"
        },
        {
          name: "카페",
          value: "cafes"
        },
        {
          name: "음식점",
          value: "foods"
        }
      ],
      teb_on: "spotList"
    }
  },
  
  watch: {
    selectedList: {
      handler() {
        // 기존 마커 해제
        this.removeMarkers();

        this.$nextTick(() => {
          // 지도 영역 메소드
          this.setBounds();
          // 지도 마커 찍기 메소드
          this.setMarkers();
          // 이벤트 메소드
          this.setEventBinding();

          // infowindow 재설정 (선택된 목록이 변경될때)
          if (this.infowindow.getMap()) {
          this.infowindow.close();
          } 
          this.setInfoWindows(this.selectedList[0])
          this.infowindow.open(this.map, this.marker[0]);

        
        })
      }
    },
    
  },
  computed: {
    // 선택된 목록 가져오기
    selectedList() {
      if (!this.courseData.courseID) { return [] }
      return this.courseData[this.teb_on]
    }
  },

  mounted() {
    if (!this.courseData.courseID) { return false }

    this.initmap(this.selectedList[0].location.position)
    this.setBounds();
    this.setMarkers();
    this.setInfoWindows(this.selectedList[0]);
    this.setEventBinding();

  },
  methods: {
    // 지도 바운더리 설정
    setBounds() {
      let points = this.selectedList.map(point => {
        return new window.naver.maps.LatLng(point.location.position)
        
      })

      const bounds = new window.naver.maps.LatLngBounds(...points);

      this.map.fitBounds(bounds)

    },

    // 지도 초기 생성
    initmap(points) {

      const tripspot = new window.naver.maps.LatLng(points.y, points.x);
        this.map = new window.naver.maps.Map('map', {
          center: tripspot.destinationPoint(0, 500),
          zoom: 10, //지도 초기 줌 레벨
          minZoom: 6,
          zoomControl: true,
          zoomControlOptions: { //줌 컨트롤 옵션
            position: window.naver.maps.Position.TOP_RIGHT
          }
        })
      
    },
    // 기존의 선택된 마커 해제
    removeMarkers() {
      this.marker.map((m) => {
        m.setMap(null);
      })
    },
    // 마커 셋팅
    setMarkers() {
      this.marker = this.selectedList.map(mk => {
        return new window.naver.maps.Marker({
          map: this.map,
          position: new window.naver.maps.LatLng(mk.location.position),
          icon: {
            url: "https://www.gurye.go.kr/images/homepage/site/tour/content/icon_course.png",
            size: new window.naver.maps.Size(34, 40),
            scaledSize: new window.naver.maps.Size(34, 40),
            origin: new window.naver.maps.Point(0, 0),
            anchor: new window.naver.maps.Point(12, 34)

          }

        });
      })

    },
    
    // 정보창 설정 메소드
    setInfoWindows(info) {
      
      let spotContents = 
        `<div class="iw_inner" style="margin:15px;">
          <h3 style="font-size:20px;">${info.name}</h3><br />
           <p style="font-size: 13px;">${info.location.address}<br />
               <br />`
            if (info.guideTexts?.homepage) {
                spotContents += '<a href="'+ info.guideTexts.homepage +'" style="color:blue" target="_blank">'+ info.guideTexts.homepage +'</a>'
               }
           spotContents += `</p><br />
        </div>`

      this.infowindow = new window.naver.maps.InfoWindow({
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
      this.marker.forEach((x,index) => {
        window.naver.maps.Event.addListener(x, "click", (e) => {
          // 정보 창 온오프
        if (this.infowindow.getMap()) {
          this.infowindow.close();
        } else {
          console.log(index)
          this.setInfoWindows(this.selectedList[index])
          this.infowindow.open(this.map, x);

        }
      });
      })
      

      this.infowindow.open(this.map, this.marker[0]);
    }
  }
}
</script>

<style scoped>
section {
  font-family: "Noto Sans KR", "Sans-serif";
  border-bottom: 1px solid #777;
}
@media print {
  section {
    display: none;
  }
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
.teb_menu {
  width: 100%;
}
.teb_menu ul li {
  position: relative;
  width: 25%;
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
  left: calc(50% - 30px);
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
  counter-reset: spotNumber;
  width: 100%;
  height: 600px;
}

#map::v-deep div[title]::after {
  position: absolute;
  top: 7px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
  counter-increment: spotNumber;
  content: counter(spotNumber);
  pointer-events: none;
  font-weight: 700;

}

.btn_top {
  width: 50px;
  height: 50px;
  background-image: url("../../assets/img/btn_top.png") 100% cover;
}

</style>