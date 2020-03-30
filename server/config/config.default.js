/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585473607150_9165';

  // add your middleware config here
  config.middleware = [];

  // 静态资源配置，设置成打包文件生成的路径
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'dist'),
  };

  // 配置数据库
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '',
      // 端口号
      port: '10031',
      // 用户名
      user: 'root',
      // 密码
      password: 'pass365waitui',
      // 数据库名
      database: 'butler',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false, // 关闭csrf安全防范
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
