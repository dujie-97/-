import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less'

//叨叨el中的loading效果的img元素
function getLoadingImage(el){
    return el.querySelector('img[data-role=loading]');
}

//创建loading图片
function createLoadingImg(){
    const img = document.createElement('img');
    img.dataset.role = 'loading';
    img.src = loadingUrl;
    img.className = styles.loading;

    return img;
}

//导出指令的配置对象
export default function(el,binding){
    //根据binding.value的值，决定创建否则删除img元素
    const curImg = getLoadingImage(el);
    if(binding.value){
        if(!curImg){
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }else {
        if(curImg){
            curImg.remove();
        }
    }
}