<!-- 찜한 코스내용을 담는 컴포넌트 -->
<template>
  <button
    @click="cosPick" 
    class="btn_pick"
    :class="{on : picked}"
    title="찜하기">
  </button>
</template>


<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    courseData: {
      type: Object
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState("pickStore", {pickList : "pickList"}),
    picked() {
      const has = this.pickList.find(i => i.courseID === this.courseData.courseID)
      if (has) {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions("pickStore", {
      addPickItem: "addPickItem",
      deletePickItem : "deletePickItem"
    }),

    // 찜 버튼 클릭시..
    cosPick() {
      if (this.picked) { // 같은 데이터가 있을때 삭제
        this.deletePickItem(this.courseData)
      } else { // 같은 데이터가 없으면 찜목록에 코스 추가
        this.addPickItem(this.courseData) 
      }
    },
   
  }

}
</script>


<style lang ="scss">
.btn_pick {
  float: left;
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: url("https://cdn.visitkorea.or.kr/resources/images/sub/ico_mpost01.png") 0 / 100% no-repeat;
  border: none;

  &.on {
  background: url("https://cdn.visitkorea.or.kr/resources/images/sub/ico_post01_on.png") 0 / 100% no-repeat;
  }
}


</style>