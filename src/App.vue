<template>
  <Header />
  <RouterView class="pagestyle" />
</template>


<script>
import Header from '@/components/common/Header'

export default {
  components: {
    Header
  }
}
</script>

<style>
.pagestyle {
  margin-top: 100px;
}

</style>