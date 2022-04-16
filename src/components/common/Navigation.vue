<template>
  <div>
    <router-link :to="{name: 'Banner'}">
      쿠폰발급 배너
    </router-link>

    <router-link :to="{name: 'Coupon'}">
      보유쿠폰목록
    </router-link>

    <router-link :to="{name: 'Course'}">
      여행추천코스
    </router-link>

    <router-link :to="{name: 'Home'}">
      홈
    </router-link>

    <router-link :to="{name: 'Join'}">
      회원가입
    </router-link>

    <router-link :to="{name: 'Login'}">
      로그인
    </router-link>

    <router-link :to="{name: 'Mypage'}">
      마이페이지
    </router-link>

    <router-link :to="{name: 'PickList'}">
      찜목록
    </router-link>

    <router-link :to="{name: 'Review'}">
      리뷰&amp;별점
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'navigationComponent'
}
</script>