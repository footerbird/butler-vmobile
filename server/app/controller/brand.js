'use strict';

const Controller = require('egg').Controller;

class BrandController extends Controller {
  async get_brandAjax() {
    const { ctx } = this;
    let { industry_alias, page } = ctx.request.body;
    industry_alias = industry_alias || '';
    page = page || 1;
    const page_size = 10;
    const offset = (page - 1) * page_size;

    const brand_list = await ctx.service.brand.get_brandList(industry_alias, offset, page_size);

    ctx.body = {
      brand_list,
    };
  }

  async get_brandDetail() {
    const { ctx } = this;
    let { brand_id } = ctx.request.body;
    brand_id = brand_id || '8260f6dea';

    const brand = await ctx.service.brand.get_brandDetail(brand_id);

    const company = await ctx.service.company.get_companyByName(brand.brand_company);

    ctx.body = {
      brand,
      company,
    };
  }

}

module.exports = BrandController;
