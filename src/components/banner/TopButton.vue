<template>
  <div class="sidetoparea">
    <span>
      <img
        class="to_top"
        src="../../assets/img/btn_top.png"
        alt="상단으로 이동" />
    </span>
  </div>
</template>

<script>
export default {
  mounted() {
    const basicArea = window.innerHeight * 0.4;
    const imgToTop = document.querySelector(".to_top");

    const imgShowLine = imgToTop.getBoundingClientRect().top - basicArea

    window.addEventListener("scroll", scrollEvent);

    function scrollEvent() {
      let scrollTop = window.scrollY;

      if (scrollTop >= imgShowLine) {
        imgToTop.classList.add('on');

        imgToTop.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  }
}
</script>

<style scoped>

.to_top {
  position: fixed;
  top: 92%;
  left: 85%;
  width: 60px;
  height: 60px;
  opacity: 0;
  transition: .6s ease-in;
  cursor: pointer;
}

.to_top.on {
  opacity: 1;
}

</style>