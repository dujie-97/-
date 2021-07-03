import Mock from 'mockjs';

Mock.mock('/api/setting','get',{
    code:0,
    msg:'',
    data:{
        avatar:'http://www.duyiedu.com/source/img/logo.png',
        siteTitle:'我的个人空间',
        github:'https://github.com/dujie-97',
        qq: '1029957143',
        qqQrCode:"http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
        weixin:'jack',
        weixinQrCode: "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
        mail:'1029957143@qq.com',
        icp:"黑ICP备17001719号",
        githubName:'dujie-97',
        favicon:'http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f'
    }
})