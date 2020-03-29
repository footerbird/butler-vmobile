const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/public.less'),
      ],
    },
  },
  outputDir: 'server/dist', // 打包文件输出目录,默认'dist'
  devServer: {
    // 改完代理配置需要重新npm run serve
    proxy: {
      '/api': {
        target: 'https://m.waitui.com/api',
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: { // rewrite path 将本地请求转发到代理地址
          '^/api': '',
        },
      },
    },
  },
};
