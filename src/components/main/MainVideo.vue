<template>
<section class="main-video">
  <div class="video__area">
    <iframe width="100%" height="700" 
    src="https://www.youtube.com/embed/aJ4o0n7yFMA?amp;loop=1&playlist=aJ4o0n7yFMA&t=18s&start=18&end=85&autoplay=1&mute=1&controls=0" 
    title="TravelME Main Video" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  background-color: rgba(0,0,0,.3);
}

iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}


</style>