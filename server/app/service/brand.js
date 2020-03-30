'use strict';

const Service = require('egg').Service;

class BrandService extends Service {
  async get_brandList(industry, start, length) {
    const { app } = this;
    let sql = '';
    sql += `select brand_id,brand_name,thumb_path,brand_lead,industry_alias,
      industry_name from brand_info where 1 = 1 `;
    if (industry !== '') {
      sql += ` and industry_alias='${industry}%'`;
    }
    sql += ` limit ${start},${length}`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async get_brandDetail(brand_id) {
    const { app } = this;
    let sql = '';
    sql += `select * from brand_info where brand_id = '${brand_id}'`;

    const query = await app.mysql.query(sql);
    return query[0];
  }

  async get_companyBrandList(company_name, start, length) {
    const { app } = this;
    let sql = '';
    sql += `select brand_id,brand_name,thumb_path,brand_lead,industry_alias,industry_name 
      from brand_info where brand_company = '${company_name}' limit ${start},${length}`;

    const query = await app.mysql.query(sql);
    return query;
  }

}

module.exports = BrandService;
