import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import proxy from 'http-proxy-middleware';
import App from '../biz/web/page/ssr/app';
var webpack = require('webpack');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../build/env/webpack.express.js');
var compiler = webpack(config);
const app = new express();

// app.use(express.static(`${process.cwd()}`));

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));

app.use(WebpackHotMiddleware(compiler, {
  'log': false,
  'path': '/__webpack_hmr',
  'heartbeat': 10*1000
}));

//proxy
app.use('/web/exchange/*', proxy({ target: "http://localhost:10080/api", changeOrigin: true }));

app.listen(4000, function () {
  console.log('server is running at 4000');
});

export default app;
