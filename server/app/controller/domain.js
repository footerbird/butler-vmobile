'use strict';

const Controller = require('egg').Controller;

const moment = require('moment');

class DomainController extends Controller {
  async get_domainAjax() {
    const { ctx } = this;
    let { keyword, domain_type, page } = ctx.request.body;
    keyword = keyword || '';
    domain_type = domain_type || '';
    page = page || 1;
    const page_size = 20;
    const offset = (page - 1) * page_size;

    const domain_list = await ctx.service.domain.get_domainList(keyword, domain_type, offset, page_size);
    domain_list.map(domain => {
      domain.expired_date = moment(domain.expired_date).diff(moment(), 'days') + 1;
      return true;
    });

    ctx.body = {
      domain_list,
    };
  }

  async get_domainDetail() {
    const { ctx } = this;
    let { domain_name_str } = ctx.request.body;
    domain_name_str = domain_name_str || 'tdo_cn';
    const domain_name = domain_name_str.replace(/_/g, '.');

    const domain = await ctx.service.domain.get_domainDetail(domain_name);
    domain.expired_date = moment(domain.expired_date).diff(moment(), 'days') + 1;

    const article_list = await ctx.service.article.get_articleList('domain', 0, 3);
    article_list.map(article => {
      article.create_time = moment(article.create_time).format('YYYY-MM-DD');
      return true;
    });

    ctx.body = {
      domain,
      article_list,
    };
  }

}

module.exports = DomainController;
