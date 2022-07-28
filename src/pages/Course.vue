<template>
  <div>
    <course-menu />
    <p>{{ courseID }}</p>
  </div>
</template>

<script>
import courseMenu from '@/components/course/courseMenu.vue'


export default {
  components: { courseMenu },
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