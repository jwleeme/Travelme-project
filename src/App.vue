<template>
  <Header />
  <RouterView />
</template>


<script>
import Header from '@/components/common/Header'
import { mapActions } from 'vuex'

export default {
  components: {
    Header
  },

  mounted() {
    this.getPickList();
  },

  methods: {
    ...mapActions('pickStore', {
      getPickList: 'getPickList'
    })
  }
}
</script>
