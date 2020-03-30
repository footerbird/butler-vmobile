'use strict';

const Controller = require('egg').Controller;

const moment = require('moment');
const Base64 = require('js-base64').Base64;
const util = require('../util/util.js');

class MarkController extends Controller {
  async get_markAjax() {
    const { ctx } = this;
    let { category, page } = ctx.request.body;
    category = category || '';
    page = page || 1;
    const page_size = 10;
    const offset = (page - 1) * page_size;

    const mark_list = await ctx.service.mark.get_markList(category, offset, page_size);
    for (const mark of mark_list) {
      // get_categoryName获取大类名称
      const category = await ctx.service.mark.get_categoryName(mark.mark_category);
      mark.category_name = category.category_name;
    }

    ctx.body = {
      mark_list,
    };
  }

  async get_markDetail() {
    const { ctx } = this;
    let { regno_md } = ctx.request.body;
    regno_md = regno_md || '10039763_19';

    const mark = await ctx.service.mark.get_markDetail(regno_md);
    // get_categoryName获取大类名称
    const category = await ctx.service.mark.get_categoryName(mark.mark_category);

    mark.category_name = category.category_name;
    mark.reg_year = moment(mark.reg_date).diff(moment(), 'years') + 1;
    mark.mark_flow = JSON.parse(mark.mark_flow);
    mark.regno_encode = util.random_string_numlet(6).toUpperCase() + Base64.encode(mark.mark_regno).replace(/=/g, ''); // 把非法字符'='替换掉

    const article_list = await ctx.service.article.get_articleList('mark', 0, 5);
    article_list.map(article => {
      article.create_time = moment(article.create_time).format('YYYY-MM-DD');
      return true;
    });

    ctx.body = {
      mark,
      article_list,
    };
  }

}

module.exports = MarkController;
