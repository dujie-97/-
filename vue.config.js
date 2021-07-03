
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://test.mysite.com'
            }
        }
    },
    configureWebpack:require('./webpack.config'),
}