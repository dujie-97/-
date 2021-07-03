import getComponentRootDom from './getComponentRootDom'
import Icon from '@/components/Icon';
import styles from './showMessage.module.less';

export default function(options = {}){
    const content = options.content || '';
    const type = options.type || 'info';
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    //1.创建消息元素
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon,{type});
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
    //2.设置样式
    const typeClassName = styles[`message-${type}`]; //类型样式名
    div.className = `${styles.message} ${typeClassName}`

    //3.将div加到容器中
    //容器的positin是否改动过
    if(options.container){
        if(getComputedStyle(container).position === 'static'){
            container.style.position = 'relative';
        }
    }
    container.appendChild(div);
    //浏览器强行渲染
    div.clientHeight; //导致reflow

    //回归到正常的位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`

    //等一段时间，消失
    setTimeout(()=>{
        div.opacity = 1;
        div.style.transform = `translate(-50%,-50%) translateY(-25px)`
        div.addEventListener('transitionend',function(){
            div.remove(); //移除元素
            //运行回调函数
            options.callback && options.callback();

        },{once:true})
    },duration)
}