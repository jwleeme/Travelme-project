<!-- 로컬스토리지에 담긴 내용을 차례대로 뿌려줄 컴포넌트! -->

<template>
  <section class="inner">
    <h1 class="page-title">
      COURSE PICK LIST
    </h1>
    
    <div
      class="pick-list-area">
      <button
        @click="deleteAll"
        class="all_delete">
        전체삭제
      </button>
      <button
        class="selected_delete"
        @click="deleteItem()">
        선택삭제
      </button>

      <!-- 코스 찜 리스트 박스 영역 -->
      <ul
        class="pick_list_box">
        <li
          v-for="(pickItem, index) in checkableList"
          :key="`pickItem${index}`"
          class="pick_item"
          :class="{remove : pickItem.checked && removeTrigger}">
          <input
            type="checkbox"
            id="checkedbox"
            v-model="pickItem.checked" />
          <img
            :src="pickItem.image"
            alt="테스트이미지" />
          
          <router-link :to="{name: 'Course', params: {courseID : pickItem.courseID}}">
            <!-- 찜한 코스명,정보 영역 -->
            <div
              class="pick_list_contents">
              <h2 class="pick_title">
                {{ pickItem.title }}
              </h2>
              <p class="pick_address">
                {{ pickItem.area }}
              </p>
              <p class="pick_distance">
                {{ pickItem.distance }}
              </p>
              <p class="pick_tagbox">
                <span
                  v-for="(tag, tagidx) in pickItem.spotList[0].hashtag"
                  :key="`tag${tagidx}`"
                  class="pick_hashtag">
                  # {{ tag }}
                </span>
              </p>
            </div>
          </router-link>
          <!-- 정보 영역 -->
          <div class="pick_list_infos">
            <img
              src="http://localhost:8080/img/calender.b139026f.png"
              alt="캘린더이미지" />
            <p>{{ pickItem.schedule }}</p>

            <!-- 테마 부분 -->
            <img :src="pickCosThemas(pickItem).img" />
            <p>
              {{ pickCosThemas(pickItem).name }}
            </p>

            <!-- 코스 스팟이름 -->
            <div class="pick_cosnames">
              <p
                v-for="(spot,spotidx) in pickItem.spotList"
                :key="`spot${spotidx}`">
                {{ spot.name }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      pickThemaNames: [
        {
          name: "힐링여행",
          value: "healing",
          img: require("@/assets/img/healing.png")
        },
        {
          name: "가족여행",
          value: "familytour",
          img: require("@/assets/img/person3.png")
        },
        {
          name: "어드벤처",
          value: "adventure",
          img: require("@/assets/img/adventure.png")
        },
        {
          name: "먹거리여행",
          value: "foodtour",
          img: require("@/assets/img/foodtour.png")
        },
        {
          name: "친구와함께",
          value: "friends",
          img: require("@/assets/img/person2.png")
        }
        
      ],
      removeTrigger : false
    };
  },

  computed: {
    ...mapState("pickStore", { pickList: "pickList" }),
    checkableList() {
      return this.pickList.map(item => {
        item.checked = false
        return item
      })
    },
  },

  methods: {
    ...mapMutations("pickStore", {
      updatePickList: "updatePickList"
    }),
    ...mapActions("pickStore", {
      deletePickItem: "deletePickItem",
      pickListClear : "pickListClear"
    }),
    pickCosThemas(pickItem) {
      if (!this.pickList) {
        return "";
      }
      const themaName = this.pickThemaNames.find(thema => thema.value === pickItem.thema);
      return themaName;
    },
    deleteAll() {
      this.pickListClear();
    },
    deleteItem() {
      this.removeTrigger = true;

      const deletelist = this.checkableList.filter(item => item.checked === true);

      if (deletelist.length === 0) {
       return alert("선택된 찜코스가 없습니다.")
      }
      setTimeout(() => {
        deletelist.forEach(chkitem => {
          this.deletePickItem({courseID : chkitem.courseID})
        })
        this.removeTrigger = false;
      }, 400)
    },
    
  }
  
}
</script>

<style scoped>

section {
  width: 100%;
  height: 100%;
  margin-top: 65px;
  color: #283a2c;
  font-family: "Noto Sans KR", "돋움";
}
.page-title {
  font-size: 40px;
  font-weight: 800;
  line-height: 3.1;
  border-bottom: 2px solid #999;
}
.pick-list-area {
  width: 100%;
  height: 100%;
  margin: 30px auto;
  border-bottom: 2px solid #999;
}

/* 삭제 버튼 */
.pick-list-area > button {
  width: 120px;
  height: 45px;
  margin-right: 15px;
  border: none;
  border-radius: 20px;
  background: #E1E1E1;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}
.pick-list-area .all_delete {
  margin-left: 5px;
  background-color: #E34E35;
}

.pick-list-area .selected_delete {
  background-color: #3D96E1;
}
.pick-list-area .all_delete:hover {
  background-color: #F1F0ED;
  border: 2px solid #E34E35;
}
.pick-list-area .selected_delete:hover {
  background-color: #F1F0ED;
  border: 2px solid #3D96E1;
}

/* 찜 리스트 영역 */
.pick_list_box {
  width: 100%;
  min-height: 500px;
  background-color: #FBFBFB;
  border : 3px solid #00491E;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 50px;
}
.pick_item {
  display: flex;
  vertical-align: middle;
  min-height: 120px;
  border: 3px solid #F74C25;
  border-radius: 10px;
  margin: 10px 10px;
  padding: 5px;
  box-sizing: border-box;

}
.pick_item.remove {
  animation: removeAni .4s;
}

@keyframes removeAni {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100px);
    opacity: 0;
  }
}

#checkedbox {
  width: 25px;
  border-radius: 10px;
  margin: 0 10px;
}
.pick_item > img {
  width: 12%;
  max-height: 120px;
  padding-top: 10px;
  border-radius: 35px;
  object-fit: cover;
}

/* 찜한 코스 내용 영역 */
.pick_list_contents {
  max-width: 365px;
  padding: 10px 2% 10px 3%;
  border-right: 1px solid #666;
}
.pick_title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}
.pick_tagbox {
  margin-top: 10px;
}
.pick_hashtag {
  display: inline-block;
  word-break: keep-all;
  margin-right: 10px;
}
.pick_hashtag:last-child {
  margin-right: 0;
}
.pick_list_contents > p {
  font-size: 15px;
  color: #333;
  line-height: 1.6;
}

.pick_address,
.pick_distance {
  display: inline;
}
.pick_address {
  border-right: 2px solid #999;
  padding-right: 8px;
}
.pick_distance {
  margin-left: 10px;
}
.pick_list_infos {
  padding: 10px 0 10px 15px;
  
}
.pick_list_infos > img {
  width: 40px;
  vertical-align: middle;
  background-size: cover;
}
.pick_list_infos > p {
  display: inline;
  margin: 0 15px;
  color: #333;
  font-weight: 500;
}
.pick_cosnames {
  padding: 25px 0 10px;
  line-height: 1.5;
}
.pick_cosnames > p {
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  color: #4c4c4c;
  margin-right: 10px;
  word-break: keep-all;
}
.pick_cosnames > p:last-child {
  margin-right: 0;
}
.pick_cosnames > p::before {
  content: url("@/assets/img/img_dot.png");
  vertical-align: text-top;
  margin-right: 10px;
}



</style>