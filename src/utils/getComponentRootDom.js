import Vue from 'vue';

/**
 * 获取某个组件渲染的dom元素
 * @param {*} comp  组件实例
 * @param {*} props 组件属性
 * @returns 
 */
export default function(comp,props){
    const vm = new Vue({
        render: (h) => h(comp,{props}),
    });
    vm.$mount();
    return vm.$el;
}