'use strict';

const Service = require('egg').Service;

class MarkService extends Service {
  async get_markList(category, start, length) {
    const { app } = this;
    let sql = '';
    if (category === '') {
      sql += `select * from mark_info where is_onsale = 'sale' limit ${start},${length}`;
    } else {
      sql += `select * from mark_info where is_onsale = 'sale' and mark_category =
        ${category} limit ${start},${length}`;
    }

    const query = await app.mysql.query(sql);
    return query;
  }

  async get_markDetail(regno_md) {
    const { app } = this;
    let sql = '';
    sql += `select * from mark_info where regno_md = '${regno_md}'`;

    const query = await app.mysql.query(sql);
    return query[0];
  }

  async get_categoryName(category_id) {
    const { app } = this;
    let sql = '';
    sql += `select * from mark_category where category_id = ${category_id}`;

    const query = await app.mysql.query(sql);
    return query[0];
  }

  async get_markCategory() {
    const { app } = this;
    let sql = '';
    sql += `select * from mark_category where category_level = 1
      order by category_id asc`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async get_markCategoryDetail(code) {
    const { app } = this;
    let sql = '';
    sql += `select * from mark_category where category_code = '${code}'`;

    const query = await app.mysql.query(sql);
    return query[0];
  }

  async get_markCategoryChildren(pcode) {
    const { app } = this;
    let sql = '';
    sql += `select * from mark_category where category_pcode = '${pcode}'
      order by category_id asc`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async get_myMarkCount(user_id, keyword) {
    const { app } = this;
    let sql = '';
    sql += `select count(*) as total from mark_info  where mark_userid =
      ${user_id} and concat(mark_regno,mark_name,app_range) like '%${keyword}%'`;

    const query = await app.mysql.query(sql);
    return query[0].total;
  }

}

module.exports = MarkService;
