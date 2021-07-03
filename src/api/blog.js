import request from './request';


/**
 * 获取博客列表数据
 * @param {*} page 
 * @param {*} limit 
 * @param {*} category 
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryid,
        }
    })
}


/**
 * 获取博客分类
 * @returns 
 */
export async function getBlogCategories() {
    return await request.get('/api/blogtype')
}

/**
 * 获取博客详情
 * @param {*} id 
 * @returns 
 */
export async function getBlog(id){
    return await request.get(`/api/blog/${id}`);
}


/**
 * 提交评论
 * @param {*} commentInfo 
 * @returns 
 */
export async function postComment(commentInfo){
    return await request.post(`/api/comment`,commentInfo);
}


/**
 * 获取评论列表
 * @param {*} blogid 
 * @param {*} page 
 * @param {*} limit 
 * @returns 
 */
export async function getComments(blogid,page=1,limit=10){
    return await request.get('/api/comment',{
        params:{
            page,
            blogid,
            limit
        }
    })
}