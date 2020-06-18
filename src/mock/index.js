// 引入mockjs
const Mock = require('mockjs');
// 使用mockjs模拟数据
Mock.mock(/\/api\/get_domainAjax/, 'get', (req) => { // 当post或get请求到xxx路由时Mock会拦截请求并返回上面的数据
  console.log(req);
  return require('./domainList.json');
});
