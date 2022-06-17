<template>
  <section
    ref="bestreview"
    class="bg-bestreview">
    <div class="inner">
      <h2 
        ref="reviewtitle" 
        :class="{on:titlevisible}" 
        class="fade-in">
        Best Review Says
      </h2>
    </div>

    <div class="reviews">
      <div class="swiper reviewSwiper">
        <div class="swiper-wrapper">
          <div
            v-for="(review, index) in bestreviews" 
            :key="`bestreviews${index}`"
            class="swiper-slide">
            <div class="imgbox">
              <img :src="review.reviewimage" />
            </div>

            <div class="textarea">
              <div class="review_star">
                ★★★★★
              </div>
              <p class="review_title">
                {{ review.name }}
              </p>
              <p class="review_say">
                {{ review.reviewcontent }}
              </p>
            </div>
          </div>
        </div>
        <img
          @click="purpleBtnPrev"
          class="purple-btn-prev"
          src="../../assets/img/btn-prev.png"
          alt="purplebtn" />
        <img
          @click="purpleBtnNext"
          class="purple-btn-next"
          src="../../assets/img/btn-next.png"
          alt="purplebtn" />
        <div class="pagination"></div>
      </div>
    </div>
  </section>
</template>


<script>

export default {
  data() {
    return {
      titlevisible : false,
      swiper : null,
      bestreviews : []
    }
  },
  mounted() {
    window.addEventListener('scroll', this.titleon)
    this.titleon()
    this.fetchData()
  },
  methods: {
    fetchData() {
      // axios 통신을 통한 json 서버 내 데이터 내용 접근
      this.axios.get('/arr')
        .then((response) => {
          console.log(response.data);
          this.bestreviews = response.data
          // json 서버 파일에 axios로 통신할때 Swiper 라이브러리와 동시에 실행되어 Swiper가 제대로 작동하지 않는 문제가 발생!
          setTimeout(()=> {
            this.runSwiper()
          },500) // Swiper 로직 동작을 0.5초 지연시켜주었다.
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // Best Review Says 타이틀 스크롤 이벤트
    titleon() {
      if(!this.$refs.bestreview) {
        return false
      }
      const titleoffset = this.$refs.bestreview.offsetTop;
      if(window.scrollY > titleoffset - (window.innerHeight / 2)) {
          return this.titlevisible = true
      }
      return this.titlevisible = false
    },
    // Swiper
    runSwiper() {
      this.swiper = new window.Swiper('.reviewSwiper', {
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".purple-btn-next",
          prevEl: ".purple-btn-prev",
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        },
        pagination: {
          el: ".pagination",
          type: "progressbar"
        },
      })
      setTimeout(()=> {
        const progressbar = document.querySelector(".swiper-pagination-progressbar .swiper-pagination-progressbar-fill");
        // prograssbar 스타일 지정
        progressbar.style.background = '#F74C25';
      },800)
    },
    purpleBtnPrev() {
      this.swiper.slidePrev()
    },
    purpleBtnNext() {
      this.swiper.slideNext()
    },
  }
}
</script>

<style scoped>
.bg-bestreview {
  position: relative;
  left: 0;
  width: 100%;
  background: #F8F7F9 url("../../assets/img/bg-destinations.jpg") no-repeat 50% / cover;
  font-family: 'Noto Sans KR', sans-serif;
}

.bg-bestreview .fade-in {
  padding: 50px 10px;
  font-weight: 800;
  font-size: 50px;
  color: #00491E;
  opacity: 0;
  transform: translateY(80px);
  transition: all .7s cubic-bezier(.07,.51,.12,1);
}
.bg-bestreview .fade-in.on {
  opacity: 1;
  transform: translateY(0);
}

.bg-bestreview .reviews {
  width: 100%;
}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 165px;
}
.swiper-wrapper {
  padding: 50px 0;
}
.swiper-slide {
  position: relative;
  width: 300px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.swiper-slide .imgbox {
  position: relative;
  width: 100%;
  z-index: 5;
}
.swiper-slide img {
  display: block;
  width: 50%;
  padding-top: 40px;
  padding-bottom: 50px;
  
}
.swiper-slide .textarea {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0 !important;
  z-index: 4;
  padding-top: 25px;
  padding-left: 45%;
  padding-right: 15px;
  inset: 0px 11%;
  border-radius: 5px;
  border-bottom: 1rem solid rgb(225, 208, 231);
  box-shadow: rgb(0 0 0 / 14%) 0px 2px 16px;
  transition: all .3s ease-in;
}
.swiper-slide .textarea:hover {
  transform: scale(1.2);
}
.textarea .review_star {
  width: 100px;
  height: 30px;
  color: rgb(255, 187, 0);
}
.textarea .review_title {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 15px auto;
  font-size: 20px;
  font-weight: 700;
}
.textarea .review_say {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  width: 100%;
  overflow: hidden; 
  text-overflow: ellipsis;
  font-size: 13px;
  font-family: "NotoSansKR","Dotum",Sans-serif;
  color: #6A6C70;
  line-height: 1.4;

}

.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0));
}
.swiper .pagination {
  width: 100%;
  height: 30px;
  top: 95%;
}

.swiper .purple-btn-prev,
.swiper .purple-btn-next {
  display: block;
  position: absolute;
  top: calc(50% - 55px);
  z-index: 9;
}
.swiper .purple-btn-prev {
  left: 30px;
}
.swiper .purple-btn-next {
  right: 30px;
}







</style>