'use strict';

const Controller = require('egg').Controller;

const moment = require('moment');

class CompanyController extends Controller {
  async get_companyAjax() {
    const { ctx } = this;
    let { province, page } = ctx.request.body;
    province = province || '';
    page = page || 1;
    const page_size = 10;
    const offset = (page - 1) * page_size;

    const company_list = await ctx.service.company.get_companyList(province, offset, page_size);

    ctx.body = {
      company_list,
    };
  }

  async get_companyDetail() {
    const { ctx } = this;
    let { company_id } = ctx.request.body;
    company_id = company_id || 'd153559df7';

    const company = await ctx.service.company.get_companyDetail(company_id);
    const company_name = company.name;

    const company_certify = await ctx.service.certify.get_certifyByName(company_name);
    if (typeof (company_certify) !== 'undefined') {
      company.contact_phone = company_certify.contact_phone;
      company.contact_email = company_certify.contact_email;
      company.contact_address = company_certify.contact_address;
      company.website = company_certify.website;
      company.description = company_certify.description;
      company.certify_status = company_certify.status;
    } else {
      company.contact_phone = '';
      company.contact_email = '';
      company.contact_address = '';
      company.website = '';
      company.description = '';
      company.certify_status = '';
    }

    const brand_list = await ctx.service.brand.get_companyBrandList(company_name, 0, 5);

    const article_list = await ctx.service.article.get_companyArticleList(company_id, 0, 5);
    article_list.map(article => {
      article.create_time = moment(article.create_time).format('YYYY-MM-DD');
      return true;
    });

    ctx.body = {
      company,
      brand_list,
      article_list,
    };
  }

}

module.exports = CompanyController;
