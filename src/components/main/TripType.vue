<template>
  <!-- 여행 타입 검색 영역 -->
  <section class="marquee-area">
    <marquee
      class="marquee-text"
      scrollamount="20"
      scrollmount="100">
      Let's choose our own fun travel course.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TravelME!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Let's choose our own fun travel course.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TravelME!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Let's choose our own fun travel course.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TravelME!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Let's choose our own fun travel course.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TravelME!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Let's choose our own fun travel course.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TravelME!
    </marquee>
  </section>
  <section class="type-filters">
    <div class="inner">
      <!-- 선호 지역 선택 -->
      <div
        class="location-type typeSelect"
        :class="{active: selected1}">
        <button
          class="selectButton"
          @click="selectToggle(1)">
          <img
            src="../../assets/img/location.png"
            alt="가고싶은 지역" />
          <div class="textBox">
            <p class="select-text-en">
              A Travel area
            </p>
            <p class="select-text">
              선호하는 여행 지역을 선택하기!
            </p>
          </div>
          <div class="arrow"></div>
        </button>

        <!-- PLACE SELECT BOX -->
        <ul class="selectbox">
          <li
            class="options"
            v-for="(option, index) in selectedOptions1"
            :key="`locationOption_${index}`">
            <button @click="bestlist(option.value, 'region')">
              {{ option.name }}
            </button>
          </li>
        </ul>
      </div>

      <!-- 선호 테마 -->
      <div
        class="thema-type typeSelect"
        :class="{active: selected2}">
        <button
          class="selectButton"
          @click="selectToggle(2)">
          <img
            src="../../assets/img/thema.png"
            alt="가고싶은 테마" />
          <div class="textBox">
            <p class="select-text-en">
              My favorite travel thema
            </p>
            <p class="select-text">
              선호하는 여행 테마를 선택하기!
            </p>
          </div>
          <div class="arrow"></div>
        </button>

        <!-- THEMA SELECT BOX -->
        <ul class="selectbox">
          <li
            class="options"
            v-for="(option, index) in selectedOptions2"
            :key="`themaOption_${index}`">
            <button @click="bestlist(option.value, 'thema')">
              {{ option.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      areaname: '',
      themaname: '',
      number: 10,
      
      selectedOptions1: [
        {
          name: '전체',
          value: ''
        },
        {
          name: '서울',
          value: 'seoul'
        },
        {
          name: '경기',
          value: 'gyeongi'
        },
        {
          name: '강원도',
          value: 'gangwon'
        },
        {
          name: '경상도',
          value: 'gyeongsang'
        },
        {
          name: '전라도',
          value: 'jeonla'
        }
      ],
      selectedOptions2: [
        {
          name: '전체',
          value: ''
        },
        {
          name: '어드벤처',
          value: 'adventure'
        },
        {
          name: '먹거리',
          value: 'foodtour'
        },
        {
          name: '가족',
          value: 'familytour'
        },
        {
          name: '힐링',
          value: 'healing'
        },
        {
          name: '친구',
          value: 'friends'
        }
      ],

      selected1: false,
      selected2: false,
    }
  },

  methods: {
    ...mapMutations('triptypeStore', ['setChoiced']),

    selectToggle (num) {
      this[`selected${num}`] = !this[`selected${num}`];
    },

    bestlist (key, type) {
      this.setChoiced({choicedType : type , choicedValue : key})
      this.selected1 = false;
      this.selected2 = false;
      
    },
    
  }
}
</script>



<style scoped>
.marquee-area {
  width: 100%;
  height: 150px;
  background-color: #F1F0ED;
}
section>.marquee-text {
  width: 100%;
  line-height: 1.5;
  font-family: 'Quarto Black','serif';
  color: #F74C25;
  font-size: 100px;
}
.type-filters {
  width: 100%;
  background-color: #faf0e1;
}
.type-filters>.inner {
  height: auto;
  margin-top: 20px;
  padding: 15px;
  box-sizing: border-box;

}
.type-filters>.inner::after {
  content: "";
  display: block;
  clear: both;
}

.location-type {
  float: left;
  width: calc(50% - 8px);
  box-sizing: border-box;
}
.thema-type {
  float: right;
  width: calc(50% - 7px);
  margin-left:15px;
}
.typeSelect {
  position: relative;
  z-index: 8;
  transition: all .4s linear;
}
.typeSelect.active {
  transform: translateY(-40px);
}

.selectButton {
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  border: 2px solid #FFB025;
  border-radius: 15px;
  background-color: #FDF6E6;
  font-size:0;
  text-align: center;
  cursor: pointer;
}
.selectButton img {
  display:inline-block;
  width: 80px;
  height: 80px;
  padding-top: 15px;
  vertical-align: middle;
}
.selectButton .textBox {
  display:inline-block;
  margin: 0 40px;
  vertical-align: middle;
  text-align: left;
}
.selectButton .select-text-en {
  color: #6A6C70;
  font-size: 13px;
}
.selectButton .select-text {
  font-family: 'Noto Sans KR','돋움';
  margin-top:20px;
  font-size: 16px;
  font-weight: 500;
}

.selectButton ~ .selectbox {
  position: absolute;
  left: 0;
  top: 135px;
  z-index: 9;
  overflow: hidden;
  width: 100%;
  height: 0;
  border: 3px solid #f5bc86;
  background-color: #fff;
  border-radius: 3px;
  border-top: none;
  box-sizing: border-box;
  transition: all .3s linear;
  opacity: 0;
}
.active .selectButton ~ .selectbox {
  height: 200px;
  opacity: 1;
  overflow:auto;
  -ms-overflow-style: none;
}

.selectbox li {
  display: block;
  text-align: center;
  border-bottom: 1px solid #d7d7d7;

}
.selectbox li:last-child {
  border-bottom: none;
}
.selectbox li button {
  display: block;
  width: 100%;
  padding: 10px 0;
  border:none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
}
.selectbox li button:hover {
  background-color: #D1B3DC;
}

.arrow {
  display:inline-block;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid #b464c0;
  vertical-align: middle;
}

</style>