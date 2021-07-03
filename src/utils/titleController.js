var routeTitle = '',
    siteTitle = '';

function setTitle() {
    if (!routeTitle && !siteTitle) {
        //网站标题和路由标题都不存在
        document.title = 'loading...';
    } else if (routeTitle && !siteTitle) {
        document.title = routeTitle;
    } else if (!routeTitle && siteTitle) {
        document.title = siteTitle;
    } else {
        document.title = `${routeTitle}-${siteTitle}`;
    }
}

export default {
    //设置路由标题
    setRouteTitle(title) {
        routeTitle = title;
        setTitle();
    },
    //设置网站标题
    setSiteTitle(title) {
        siteTitle = title;
        setTitle();
    }
}