import Vue from 'vue';
import Vuex from 'vuex';
// import {mutations} from '@/store/mutations'
Vue.use(Vuex);

const state = {
    // 已登录的用户名
    userName:'',
    //通知使用模态框登录
    modalLogin:false,
    //用户偏好语言
    langPack:null
} 
const mutations = {
    //存储用户信息
    setUserName(state,name){
        state.userName = name;
    },
    setModalLogin(state,value){
        state.modalLogin = value;
    },
    //存取用户偏好语言
    setLanguage(state,languagePackage){
        state.langPack = languagePackage;
    }
}
export default new Vuex.Store({
    state,
    mutations
});

