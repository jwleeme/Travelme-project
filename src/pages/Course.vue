<template>
  <div>
    <p>{{ courseID }}</p>
  </div>
</template>

<script>

export default {
  name: 'CoursePage',
  data() {
    return {
      courseID : this.$route.params.courseID
    }
  },
  watch: {
    $route() {
        this.courseID = this.$route.params.courseID
    }
  },
    scrollBehavior() { 
    return { x: 0, y: 0 } 
  },

}
</script>


<style scoped>
p {
  font-size: 30px;
  text-align: center;
  line-height: 700px;
}
</style>