'use strict';

const Service = require('egg').Service;

class CertifyService extends Service {
  async get_certifyByName(company_name) {
    const { app } = this;
    let sql = '';
    sql += `select * from company_certify where company_name = '${company_name}' and status = 'success'`;

    const query = await app.mysql.query(sql);
    return query[0];
  }

  async get_certifyByUser(user_id) {
    const { app } = this;
    let sql = '';
    sql += `select * from company_certify  where certify_userid = 
      ${user_id} order by create_time desc`;

    const query = await app.mysql.query(sql);
    return query;
  }

}

module.exports = CertifyService;
