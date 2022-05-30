<template>
  <section class="bg-destinations">
    <div class="swiper cardswiper">
      <div class="swiper-wrapper">
        <div
          v-for="item in slideitems" 
          :key="item.title"
          class="swiper-slide">
          <div class="imgbox">
            <img 
              :src="item.image"
              alt="베스트이미지" />
          </div>
          <div class="textbox">
            <p class="title">
              Best 추천 여행지
            </p>
            <p class="destination">
              {{ item.title }}
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
import { mapState } from 'vuex'

  export default {
    data() {
      return {
        swiper : null
      }
    },
    computed: {
      ...mapState('triptypeStore', ['bestTripList', 'choicedType', 'choicedValue']),

      // 지역별, 테마별 Best 여행지 리스트 필터 기능
      slideitems() {
        if(this.choicedValue) {
          return this.bestTripList.filter(item => {
            if(item[this.choicedType] === this.choicedValue) {
              return item
            }
          })
        }
        return this.bestTripList // 전체 데이터 (35개) 반환

      }
    },
    watch: {
      slideitems : {
        handler() {
          this.$nextTick(()=> {
            this.swiper.slideTo(0)
            this.swiper.update()
          })
        }
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
