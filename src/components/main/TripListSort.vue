<template>
  <section class="bg-destinations">
    <div class="swiper cardswiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="imgbox">
            <img
              src="../../assets/img/testimage1.jpg"
              alt="테스트1" />
          </div>
          <div class="textbox">
            <p class="title">
              이달의 추천 여행지
            </p>
            <p class="destination">
              춘천레일기차
            </p>
          </div>
        </div>
        
        <div class="swiper-slide">
          <div class="imgbox">
            <img
              src="../../assets/img/testimage2.jpg"
              alt="슬라이드2" />
          </div>
          <div class="textbox">
            <p class="title">
              이달의 추천 여행지
            </p>
            <p class="destination">
              독일 남해마을
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="imgbox">
            <img
              src="../../assets/img/testimage3.jpg"
              alt="테스트3" />
          </div>
          <div class="textbox">
            <p class="title">
              이달의 추천 여행지
            </p>
            <p class="destination">
              청송 주산지
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="imgbox">
            <img
              src="../../assets/img/testimage4.jpg"
              alt="슬라이드4" />
          </div>
          <div class="textbox">
            <p class="title">
              이달의 추천 여행지
            </p>
            <p class="destination">
              부산 해파랑길 코스
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="imgbox">
            <img
              src="../../assets/img/testimage5.jpg"
              alt="테스트5" />
          </div>
          <div class="textbox">
            <p class="title">
              이달의 추천 여행지
            </p>
            <p class="destination">
              제주 선사 유적지
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="imgbox">
            <img
              src="../../assets/img/testimage6.jpg"
              alt="슬라이드6" />
          </div>
          <div class="textbox">
            <p class="title">
              이달의 추천 여행지
            </p>
            <p class="destination">
              서울 키치아트 소품샵
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="imgbox">
            <img
              src="../../assets/img/testimage7.jpg"
              alt="슬라이드테스트7" />
          </div>
          <div class="textbox">
            <p class="title">
              이달의 추천 여행지
            </p>
            <p class="destination">
              공룡 박물관
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="imgbox">
            <img
              src="../../assets/img/testimage8.jpg"
              alt="슬라이드테스트8" />
          </div>
          <div class="textbox">
            <p class="title">
              이달의 추천 여행지
            </p>
            <p class="destination">
              평창 육백마지기
            </p>
          </div>
        </div>
      </div>

      <button
        @click="btnPrev"
        class="orange-prev"></button>
      <button
        @click="btnNext"
        class="hotpink-next"></button>
    </div>
  </section>
</template>



<script>
  export default {
    data() {
      return {
        swiper : null
      }
    },
    mounted() {
      this.swiper = new window.Swiper(".cardswiper", {
        slidesPerView: 4,
        spaceBetween: 60,
        centeredSlides: true,
        navigation: {
          nextEl: '.hotpink-next',
          prevEl: '.orange-prev'
        },
      })
    
    },
    methods: {
      btnPrev() {
        this.swiper.slidePrev()
      },
      btnNext() {
        this.swiper.slideNext()
      }
    }
  }
</script>

<style scoped>
.bg-destinations {
  position: relative;
  width: 100%;
  background: #F8F7F9 url("../../assets/img/bg-destinations.jpg") no-repeat 50% / cover;
}

.swiper {
  width: 100%;
  margin: 0 auto;
}
.swiper-wrapper {
  padding: 50px 0;
}
.swiper-slide {
  text-align: center;
  cursor: pointer;
  transition: all .3s ease-in;
}
.swiper-slide:hover {
  box-shadow: 0 2px 16px rgb(0 0 0 / 14%);
  transform: scale(1.2);
}

.swiper-slide .imgbox {
  position: relative;
  width: 100%;
  padding-top: 61.6%;
}
.swiper-slide img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.swiper-slide .textbox {
  padding: 15px;
  background: #fff;
  text-align: left;
}
.swiper-slide .textbox p {
  line-height: 1.8;
}
.swiper-slide .textbox .title {
  font-size: 12px;
  color: #515253;
  font-family: Arial, sans-serif;
}
.swiper-slide .textbox .destination {
  font-size: 30px;
}

.orange-prev,
.hotpink-next {
  position: absolute;
  top: calc(50% - 25px);
  display: block;
  width: 50px;
  height: 50px;
  z-index: 100;
  border-radius: 100%;
  border: none;
}

.orange-prev {
  background-color: #FF9C00;
  left: calc(((25% - 60px) / 2) + 25% - 3px);
}
.hotpink-next {
  background-color: #FF384B;
  right: calc(12.5% - 50px);
}

.orange-prev::before,
.orange-prev::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 22px;
  min-width: 2px;
  border-radius: 3px;
  background: #fff;
}

.hotpink-next::before,
.hotpink-next::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 22px;
  min-width: 2px;
  border-radius: 3px;
  background: #fff;
  
}

.orange-prev::before {
  transform: rotate(45deg);
  top: 15%;
  left: 43%;
}

.orange-prev::after {
  transform: rotate(-45deg);
  bottom: 13%;
  left: 45%;
}

.hotpink-next::before {
  transform: rotate(-45deg);
  top: 15%;
  right: 43%;
}

.hotpink-next::after {
  transform: rotate(45deg);
  bottom: 13%;
  left: auto;
  right: 43%;
}
</style>
