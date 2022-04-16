// 페이지 구성 관리
import { createWebHistory, createRouter } from "vue-router";

export default createRouter ({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: ()=> import ('@/pages/Home.vue')
    },
    {
      path: '/join',
      name: 'Join',
      component: ()=> import ('@/pages/Join.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import ('@/pages/About.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=> import ('@/pages/Login.vue')
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: ()=> import ('@/pages/Mypage.vue')
    },
    {
      path: '/picklist',
      name: 'PickList',
      component: ()=> import ('@/pages/PickList.vue')
    },
    {
      path: '/review',
      name: 'Review',
      component: ()=> import ('@/pages/Review.vue')
    },
    {
      path: '/banner',
      name: 'Banner',
      component: ()=> import ('@/pages/Banner.vue')
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: ()=> import ('@/pages/Coupon.vue')
    },
    {
      path: '/course',
      name: 'Course',
      component: ()=> import ('@/pages/Course.vue')
    },
    
  ]
})

