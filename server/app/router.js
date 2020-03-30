'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 域名相关
  router.post('/api/get_domainAjax', controller.domain.get_domainAjax);
  router.post('/api/get_domainDetail', controller.domain.get_domainDetail);

  // 商标相关
  router.post('/api/get_markAjax', controller.mark.get_markAjax);
  router.post('/api/get_markDetail', controller.mark.get_markDetail);

  // 企业相关
  router.post('/api/get_companyAjax', controller.company.get_companyAjax);
  router.post('/api/get_companyDetail', controller.company.get_companyDetail);

  // 品牌相关
  router.post('/api/get_brandAjax', controller.brand.get_brandAjax);
  router.post('/api/get_brandDetail', controller.brand.get_brandDetail);

  // // 用户相关
  // router.post('/api/get_myConsole', controller.user.get_myConsole);
  // router.post('/api/send_smsCodeAjax', controller.user.send_smsCodeAjax);
  // router.post('/api/check_phoneRegisterAjax', controller.user.check_phoneRegisterAjax);
  // router.post('/api/send_phoneLoginAjax', controller.user.send_phoneLoginAjax);
  // router.post('/api/send_phoneRegisterAjax', controller.user.send_phoneRegisterAjax);
  // router.post('/api/send_phoneFindpwdAjax', controller.user.send_phoneFindpwdAjax);

  // 上面的路由为api路由，其他路由都指到静态文件/dist/index.html
  router.get('/*', controller.home.index);
};
