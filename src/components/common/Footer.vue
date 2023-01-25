<template>
  <footer>
    <div class="inner">
      <div class="footer-left">
        <div class="email">
          E-MAIL
          <p>imherejw @ gmail.com</p>
        </div>

        <div class="call_us">
          Call-Us
          <p>+82-10-5437-1259</p>
        </div>
      </div>
      
      <div class="footer-right">
        <ul>
          <li>
            <a
              href="#"
              title="PR 사이트">
              <img
                src="../../assets/img/resume-icon96.png"
                alt="Resume Site" /></a>
          </li>
          <li>
            <a
              href="#"
              title="Github 저장소">
              <img
                src="../../assets/img/github-icon96.png"
                alt="github Site" />
            </a>
          </li>
          <li>
            <a
              href="#"
              title="blog 예정">
              <img
                src="../../assets/img/blog-icon96.png"
                alt="blog Site" />
            </a>
          </li>
        </ul>
        <button class="contact_us">
          CONTACT US!
        </button>
      </div>
    </div>
    <!-- footer 하단영역 -->
    <div class="footer-bottom">
      <ul class="mini-menus">
        <li><a href="#">개인정보처리방침</a></li>
        <li><a href="#">이용약관</a></li>
        <li><a href="#">저작권정책</a></li>
        <li><a href="#">고객서비스현장</a></li>
        <li><a href="#">전자우편무단수집거부</a></li>
        <li><a href="#">Q&amp;A</a></li>
        <li><a href="#">찾아오시는 길</a></li>
      </ul>

      <p class="footer-logo">
        TravelME!
      </p>

      <!-- footer banner -->
      <div class="reference-banner">
        <a
          href="https://www.mcst.go.kr/kor/main.jsp"
          target="_blank"
          title="새창열기">        
          <img
            src="../../assets/img/reference-logo2.png"
            alt="문화체육관광부" /></a>
        <a
          href="https://www.mois.go.kr/frt/a01/frtMain.do"
          target="_blank"
          title="새창열기">
          <img
            src="../../assets/img/reference-logo1.png"
            alt="행정안전부" />
        </a>
        <a
          href="https://kto.visitkorea.or.kr/kor.kto"
          target="_blank"
          title="새창열기">
          <img
            src="http://tong.visitkorea.or.kr/ktobiz/images/common/head/logoTop.gif"
            alt="한국관광공사" />
        </a>
        <img
          src="../../assets/img/copyright-logo.jpg"
          alt="공공데이터 저작권표시" />
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  
}
</script>

<style scoped>
footer {
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  background-color: #283a2c;
  font-family: 'Quarto Black','serif';
  color: #fff;
}
footer>.inner {
  width: 100%;
  padding-top: 10%;
  overflow: hidden;
}
.footer-left {
  position: relative;
  float: left;
  border-right: 3px solid #b1b886;
  
}

.footer-left .email,
.footer-left .call_us {
  display: inline-block;
  box-sizing: border-box;
  font-size: 50px;
  color: #b1b886;
}

.footer-left .call_us {
  padding-left: 100px;
  padding-right: 120px;
}

.footer-left .email p,
.footer-left .call_us p {
  font-size: 30px;
  line-height: 4.0;
  color: #F8F7F9;
}

.footer-right {
  float: right;
  width: 35%;
}

.footer-right ul {
  display: flex;
  width: 100%;
  
}
.footer-right ul li {
  width: 100%;
  padding: 0 35px;
  border-right: 1px solid #b1b886;
  box-sizing: border-box;
}
.footer-right ul li:last-child {
  border: none;
}
.footer-right ul li a img {
  width: 75px;
  transition: all .2s cubic-bezier(.51,.92,.24,1.15);
}
.footer-right ul li a img:hover {
  transform: scale(1.2);
  border-radius: 15px;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0,.24);
}

.footer-right button {
  display: block;
  width: 60%;
  margin: 40px auto;
  padding: 15px 30px;
  border-radius: 5px;
  background-color: #F74C25;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  transition: all, .2s ease-in;
}

.footer-right button:hover {
  color: #283a2c;
  background: #b1b886;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0,.24), 0 17px 20px 0 rgba(0,0,0,0.19);
}

/* footer 하단영역 */

.footer-bottom {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.mini-menus {
  display: flex;
  font-size: 13px;
  border-top: 1px solid #b1b886;
}
.footer-bottom .mini-menus li {
  margin: 15px;
}
.footer-bottom .mini-menus li:first-child {
  margin-left: 0;
}
.footer-logo {
  float: left;
  padding-top: 100px;
  padding-bottom: 40px;
  font-size: 20px;
}
.reference-banner {
  width: 470px;
  float: right;
  padding-top: 7%;
}
.reference-banner img {
  width: 20%;
  padding-left: 22px;
}

</style>