import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import { MainPage, AboutPage } from './components/pages';



createApp(App).mount('#app')

Vue.config.productionTip = false

Vue.use(VueRouter); // router 기능 확장 선언

const routes = [
    // 이곳에 router 를 등록할 것 입니다.
    {
        path: '/',
        component: MainPage
     },
     {
        path: '/about',
        component: AboutPage
     }
];

// router 객체생성
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router // router 추가
}).$mount('#app')

/* other import */
