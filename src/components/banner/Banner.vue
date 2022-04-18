<template>
  <div class="sidebanner">
    <router-link :to="{name: 'Banner'}">
        <img class="banner" src="../../assets/img/sidebadge.png" alt="가입자쿠폰"/>
    </router-link>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebanner {
  position: absolute;
  top: 250px;
  left: 15px;
  
}
.sidebanner .banner {
  position: fixed;
  width: 220px;
  height: 320px;
  cursor: pointer;
  z-index: 8;
}
</style>