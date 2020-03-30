'use strict';

const Service = require('egg').Service;

class DomainService extends Service {
  async get_domainList(keyword, domain_type, start, length) {
    const { app } = this;
    let sql = '';
    sql += `select * from domain_info where is_onsale = 'sale' and 
      concat(domain_name,register_registrar,domain_summary) like '%${keyword}%'`;
    if (domain_type !== '') {
      sql += ` and domain_type = '${domain_type}'`;
    }
    sql += ` limit ${start},${length}`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async get_domainDetail(domain_name) {
    const { app } = this;
    let sql = '';
    sql += `select * from domain_info where domain_name = '${domain_name}'`;

    const query = await app.mysql.query(sql);
    return query[0];
  }

}

module.exports = DomainService;
