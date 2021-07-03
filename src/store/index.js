import Vue from 'vue';
import Vuex from 'vuex';
import banner from './banner';
import setting from './setting';
import about from './about';
import project from './project';

if(!window.Vuex){
    Vue.use(Vuex);
}

const store = new Vuex.Store({
   modules:{
       banner,
       setting,
       about,
       project,
   },
   strict:true
})
export default store;