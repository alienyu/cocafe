let webpack = require('webpack');
let path =require("path");
console.log("this is cocafe page")
module.exports = {
    resolve: {
        alias: {
            '@mobileCocafeRoutes': `${path.resolve(__dirname, 'routes')}`,
            '@mobileCocafeImgs': `${path.resolve(__dirname, 'static/imgs')}`,
            '@mobileCocafeFiles': `${path.resolve(__dirname, 'static/files')}`,
            'mobileCocafeConstants': `${path.resolve(__dirname, 'static/module/config/index.ts')}`,
            'mobileCocafeGlobalConf': `${path.resolve(__dirname, 'static/global/index.ts')}`,
            'mobileCocafeAjax': `${path.resolve(__dirname, process.env.NODE_ENV == "production" ? 'static/module/ajax/prod.ts' : 'static/module/ajax/dev.ts')}`,
            'mobileCocafeRenderRoutes': `${path.resolve(__dirname, 'static/module/renderRoutes.tsx')}`
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            mobileCocafeConstants: ['mobileCocafeConstants', 'default'],
            mobileCocafeAjax: ['mobileCocafeAjax', 'default'],
            mobileCocafeRenderRoutes: ['mobileCocafeRenderRoutes', 'default']
        })
    ]
}