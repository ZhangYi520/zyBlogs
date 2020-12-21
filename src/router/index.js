import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
// import index from '@/views/index'
import BlogContent from '@/views/BlogContent'
import MyBlogsList from '@/views/user/MyBlogsList'
import MyBlogsWrite from '@/views/user/MyBlogsWrite'
import BlogsLook from '@/views/user/BlogsLook'
import BlogsOk from '@/views/user/BlogsOk'

Vue.use(Router)

export default new Router({
  base:"/myBlogs",
  // mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'BlogContent',
      component: BlogContent
    },
    {
      path: '/user/MyBlogsList',
      name: 'MyBlogsList',
      component: MyBlogsList
    },
    {
      path: '/user/MyBlogsWrite',
      name: 'MyBlogsWrite',
      component: MyBlogsWrite
    },
    {
      path: '/user/BlogsLook',
      name: 'BlogsLook',
      component: BlogsLook
    },
    {
      path: '/user/BlogsOk',
      name: 'BlogsOk',
      component: BlogsOk
    },
    {
      path: '/login/Login',
      name: 'Login',
      component: () => import('@/views/login/Login')
    },
    {
      path: '/login/RegistAccount',
      name: 'RegistAccount',
      component: () => import('@/views/login/RegistAccount')
    }
  ]
})
