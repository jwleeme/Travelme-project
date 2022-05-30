<template>
  <section>
    <div class="inner">
      <p class="fade-in">
        About
      </p>
      <div class="textbox">
        <p class="subtitle">
          사이트 소개 & 이용방법
        </p>
        <p class="introduce">
          <span>여행은 가고싶은데 좋은 코스를 찾기는 어렵고<br />
            한번에 여행코스 정보를 찾아보고 싶으신가요?</span><br /><br />

          쉽고 간편한 여행 코스 찾기 & 공유 서비스로<br />
          원하는 여행지를 찾아보고 코스목록을 공유할수있는 여행지 코스 추천 사이트입니다.<br /><br />
          ( + 추후 현지 가이드 만남 서비스 & 여행코스 일정 스케쥴링 기능 제공 예정. )
        </p>
      </div>
    </div>


    <section class="secgap inner">
      <div class="left_area">
        <h3 class="sec_title">
          ▷ 이보다 쉬울 수 없는 편리한 여행코스보기
        </h3>
        <p class="sec_subtitle">
          누구나 할 수 있는<br />간편한 여행 코스 찾기
        </p>
        <p class="sec_description">
          계절별, 지역별, 테마별로 일정에 맞는 <br />
          여행 코스를 검색하면 알맞은 여행 코스 목록들을 제공합니다.
        </p>
      </div>
      <div class="right_area">
        <img
          src="../assets/img/testimage5.jpg"
          alt="임시용이미지" />
      </div>
    </section>

    <section class="secgap inner">
      <div class="left_area">
        <h3 class="sec_title">
          ▷ 원하는 코스 담아두기
        </h3>
        <p class="sec_subtitle">
          마음에 드는<br />여행코스 찜, 공유하기
        </p>
        <p class="sec_description">
          마음에 드는 여행코스를 선택, 찜 목록 페이지에서 확인하고 <br /> 
          선택한 코스를 공유하기만 하면 되는 간편한 기능.
        </p>
      </div>
      <div class="right_area">
        <img
          src="../assets/img/testimage5.jpg"
          alt="임시용이미지" />
      </div>
    </section>

    <section class="secgap inner">
      <div class="left_area">
        <h3 class="sec_title">
          ▷ 여행 후기 & 현지 가이드 만남
        </h3>
        <p class="sec_subtitle">
          한눈에 볼수있는 여행 후기와<br />현지 가이드 만남 기능
        </p>
        <p class="sec_description">
          여행코스 리뷰 & 별점 내용을 남기고 <br /> 
          일정에 맞는 현지 가이드를 만나 더 알차고 풍부한 여행을 즐겨보세요.<br /> <br /> 
          ( + 현지 가이드 연결 기능은 추후 오픈 예정입니다. )
        </p>
      </div>
      <div class="right_area">
        <img
          src="../assets/img/testimage5.jpg"
          alt="임시용이미지" />
      </div>
    </section>
    <section class="secgap inner">
      <div class="left_area">
        <h3 class="sec_title">
          ▷ 신규 회원 전용 쿠폰
        </h3>
        <p class="sec_subtitle">
          신규 회원가입 시<br />회원 전용 쿠폰 발급
        </p>
        <p class="sec_description">
          트래블미와 제휴한 관광지들의 <br /> 
          입장권 할인 혜택을 받을 수 있는 회원전용 쿠폰 발급.
        </p>
      </div>
      <div class="right_area">
        <img
          src="../assets/img/testimage5.jpg"
          alt="임시용이미지" />
      </div>
    </section>


    <Footer />
  </section>
</template>

<script>
import Footer from '@/components/common/Footer.vue'
export default {
  components: { 
    Footer 
  },
  data() {
    return {
      titlevisible: false
    }
  },
  name: 'AboutPage'
}
</script>


<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  background-color: #FAFAFA;
  font-family: 'Noto Sans KR','돋움';
  .fade-in {
    padding: 60px 10px;
    font-weight: 800;
    font-size: 60px;
    color: #00491E; 
  }
  .textbox {
    padding-left: 10px;
  }
  .subtitle {
    padding-bottom: 30px;
    font-size: 25px;
    font-weight: 700;
  }
  .introduce {
    color: #333;
    font-size: 15px;
    line-height: 1.5;
    padding-bottom: 50px;
    span {
      font-size: 20px;
    }
  }

}

// 사이트 소개 섹션영역
.secgap {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #F1F0ED;
  margin-bottom: 50px;
  overflow: hidden;
  .left_area {
    float: left;
    position: absolute;
    top: 18%;
    left: 5%;
    .sec_title {
      font-size: 21px;
      color: rgb(56, 54, 54);
    }
    .sec_subtitle {
      font-size: 27px;
      margin: 30px 15px;
      line-height: 1.3;
      font-weight: 500;
    }
    .sec_description {
      padding: 0 15px;
      line-height: 1.3;
      font-size: 15px;
      color: #343A40;
    }
  }
  .right_area {
    float: right;
    position: relative;
    top: 10%;
    right: 5%;
    
    img {
    width: 500px;
    padding: 40px 10px;
    }
  }
}



</style>