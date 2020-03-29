'use strict';

const Controller = require('egg').Controller;

const fs = require('fs');
const path = require('path');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 设置默认访问静态文件根目录中的index.html
    ctx.response.type = 'html';
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../../dist/index.html'));
  }
}

module.exports = HomeController;
