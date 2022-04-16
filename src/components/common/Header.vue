<template>
  <header>
    <router-link to="/" class="logo">
    <span>TravelME</span>
    </router-link>

    <ul class="right_area">
      <li>
        <router-link :to="{name: 'About'}">About</router-link>
      </li>
      <li>
      <router-link :to="{name:'Course'}">Travel Course</router-link>
      </li>
      <li>
        <router-link :to="{name:'Review'}">Trip Story&amp;Stars</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>

  .logo {
    font-family: 'Quarto Black','serif';
    font-weight: bold;
    font-size: 40px;
    color: #000;
    text-decoration: none;

  }
</style>