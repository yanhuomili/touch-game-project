// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../static/css/reset.css'//重置样式文件
import 'font-awesome/css/font-awesome.css'//字体图标样式
//css3样式库
import '../static/css/ec-css-animate.css'
import '../static/css/ec-css-hover.css'
//导入语言包
import langPack from './assets/language_package'
Vue.prototype.langPack = langPack; 
Vue.prototype.setLang = function(currentLangIndex){
    //获取本地偏好语言函数
    let pack = {};
    for(let k1 in this.langPack){
        pack[k1] = {};
        for(let k2 in this.langPack[k1]){
            pack[k1][k2] = this.langPack[k1][k2][currentLangIndex];
        }
    }
    this.$store.commit('setLanguage',pack);
    localStorage.setItem('currentLangIndex',currentLangIndex); //语言索引存入当地
}

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})

