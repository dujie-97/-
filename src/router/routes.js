import 'nprogress/nprogress.css';
import { start,done,configure } from 'nprogress';
import NotFound from '@/views/NotFound';

configure({
    trickleSpeed:20,
    showSpinner:false,
})

function delay(duration){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

function getPageComponent(pageCompResolver){
    return async() =>{
        start();
        if(process.env.NODE_ENV === 'development'){
            await delay(1000);
        }
        const comp = await pageCompResolver();
        done();
        return comp;
    }
}

//路由匹配规则
const routes = [{
        path: '/',
        name: 'Home', //设置路由名字，用于router-link的to属性绑定
        component: getPageComponent(() => import('@/views/Home')),
        meta:{
            title:'首页'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: getPageComponent(() => import('@/views/About')),
        meta:{
            title:'关于我'
        }
    },
    {
        path: '/article',
        name: 'Blog',
        component: getPageComponent(() => import('@/views/Blog')),
        meta:{
            title:'文章'
        }
    },
    {
        path: '/article/:id',
        name: 'BlogDetail',
        component: getPageComponent(() => import('@/views/Blog/Detail')),
        meta:{
            title:'文章详情'
        }
    },
    {
        path:'/article/cate/:categoryId',
        name: 'CategoryBlog',
        component:getPageComponent(() => import('@/views/Blog')),
        meta:{
            title:'文章分类'
        }
    },
    {
        path: '/message',
        name: 'Message',
        component:getPageComponent(() => import('@/views/Message')),
        meta:{
            title:'留言板'
        }
    },
    {
        path: '/project',
        name: 'Project',
        component: getPageComponent(() => import('@/views/Project')),
        meta:{
            title:'项目&效果'
        }
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
    }
]

export default routes;