<template>
  <div
    v-if="visible"
    class="sidebanner">
    <router-link :to="{name: 'Banner'}">
      <img
        class="banner"
        src="../../assets/img/sidebadge.png"
        alt="가입자쿠폰" />
    </router-link>
    <button @click="visible=false">
      배너닫기
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible : true
    }
  }
}
</script>

<style scoped>
.sidebanner {
  position: fixed;
  top: 250px;
  left: 15px;
  z-index: 999;
}
.sidebanner a {
  display: block;
}
.sidebanner .banner {
  display: block;
  width: 220px;
  height: 320px;
  cursor: pointer;
}
.sidebanner button {
  position: absolute;
  bottom: 0;
  left: 25px;
  width: calc(100% - 50px);
  padding: 5px 0;
  background: rgba(255, 255, 255, .5);
  border: none;
  color: #000;
  font-weight: 800;
  text-align: center;

}
</style>