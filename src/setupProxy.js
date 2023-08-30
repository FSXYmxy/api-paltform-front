const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://101.34.243.75:8101', // 后台服务地址以及端口号
      changeOrigin: true, // 是否开启代理
      pathRewrite: {
        '/api': '', // 代理名称
      },
    }),
  );
};
