'use strict';

const Service = require('egg').Service;

class CompanyService extends Service {
  async get_companyList(province, start, length) {
    const { app } = this;
    let sql = '';
    sql += `select company_id,name,oper_name,regist_capi,start_date,industry,province,
      address from company_info where 1 = 1 `;
    if (province !== '') {
      sql += ` and province like '${province}%'`;
    }
    sql += ` order by create_time desc limit ${start},${length}`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async get_companyDetail(company_id) {
    const { app } = this;
    let sql = '';
    sql += `select * from company_info where company_id = '${company_id}'`;

    const query = await app.mysql.query(sql);
    return query[0];
  }

  async get_companyByName(company_name) {
    const { app } = this;
    let sql = '';
    sql += `select * from company_info where name = '${company_name}'`;

    const query = await app.mysql.query(sql);
    return query[0];
  }

}

module.exports = CompanyService;
