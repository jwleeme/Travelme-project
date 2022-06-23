// 페이지 구성 관리
import store from "@/store";
import { createWebHashHistory, createRouter } from "vue-router";


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: ()=> import ('@/pages/Home.vue')
    },
    {
      path: '/join',
      name: 'Join',
      component: () => import('@/pages/Join.vue'),
      
    },
    {
      path: '/about',
      name: 'About',
      component: () => import ('@/pages/About.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: () => import('@/pages/Mypage.vue'),
      // Vue Navigation Guard
      beforeEnter: (to, from, next) => {
        // 로그인 상태일때 (유저정보O)
        if (store.state.userStore.isLogin) {
          next();
          
        } else {
          alert("회원전용 페이지 입니다.\n로그인해주세요.")
          next("/join");
        }
      },
      meta: {
        auth: true
      },

    },
    {
      path: '/picklist',
      name: 'PickList',
      component: () => import('@/pages/PickList.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.userStore.isLogin) {
          next();
        } else {
          alert("회원전용 서비스입니다.\n회원가입 후 로그인해주세요!")
          next("/join");
        }
      },
      meta: {
        auth: true
      },
    },
    {
      path: '/review',
      name: 'Review',
      component: ()=> import ('@/pages/Review.vue')
    },
    {
      path: '/banner',
      name: 'Banner',
      component: () => import('@/pages/Banner.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.userStore.isLogin) {
          next();
        } else {
          alert("쿠폰발급은 회원전용입니다.\n신규가입 후 쿠폰혜택 받아가세요!")
          next("/join");
        }
      },
      meta: {
        auth: true
      },
    },
    
    {
      path: '/coupon',
      name: 'Coupon',
      component: () => import('@/pages/Coupon.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.userStore.isLogin) {
          next();
        } else {
          alert("쿠폰목록 페이지는 회원전용입니다.")
          next("/join");
        }
      },
      meta: {
        auth: true
      },
    },
    {
      path: '/course',
      name: 'CourseMain',
      component: () => import('@/pages/Course.vue')
    },
    {
      path: '/course/:courseID',
      name: 'Course',
      component: () => import('@/pages/CourseView.vue')
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

