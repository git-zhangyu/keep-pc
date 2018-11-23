import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Explore from '@/views/Explore'
import Details from '@/views/Details'
import UserDetails from '@/views/UserDetails'
import TopicDetails from '@/views/TopicDetails'
import DiaryDetails from '@/views/DiaryDetails'
import Login from '@/views/Login'
import Swiper from '@/components/Swiper'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/userDetails/:uid',
      name: 'UserDetails',
      component: UserDetails,
      meta: {
        requireAuth: true
      }
    },
    /*
    {
      path: '/userDetails',
      name: 'UserDetails',
      component: UserDetails,
      meta: {
        requireAuth: true
      }
    },*/
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/topicDetails/:id/:uid',
      name: 'TopicDetails',
      component: TopicDetails 
    },
    {
      path: '/diaryDetails/:id/:uid',
      name: 'DiaryDetails',
      component: DiaryDetails,
      meta: {
        requireAuth: true
      }
    }
  ]
})

//如何在vue-router的beforeEach钩子里做页面访问权限验证
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
     if(sessionStorage.getItem("uid")){
        next()
     }else{
      next({
        path:"/login",
        query:{redirect: to.path}
      })
     }
  }else{
    next()
  }
})


export default router
