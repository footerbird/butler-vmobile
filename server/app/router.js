'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  // 上面的路由为api路由，其他路由都指到静态文件/dist/index.html
  router.get('/*', controller.home.index);
};
