<template>
<section class="main-video">
  <div class="video__area">
    <!-- 개선내용!
    외부에서 영상을 불러와 사용했을때 Memory 사용량이 너무많아 웹페이지 오픈 시 로딩속도도 느려서
    보다 효율적인 개선방법을 찾기위해 video 파일을 가지고와서 사용해보았더니 메모리도 적게 차지하고 로딩속도도 훨씬 빨라진것을 확인하였다. -->
    <video src="../../assets/travelvideo.mp4" autoplay loop muted></video>
  </div>
  <div class="video__cover"></div>
</section>
</template>

<script>
export default {
  
}
</script>


<style scoped>
.main-video {
  position: relative;
  height: 700px;
  background-color: #333;
  overflow: hidden;
}
.main-video .video__area {
  width: 1920px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: calc(1920px / -2);
  margin-top: calc(1920px * 9 / 16 / -2);
}
.main-video .video__area::before {
  content: "";
  display: block;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 16: 9 비율 */
}
.main-video .video__cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.2);
}

video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}


</style>