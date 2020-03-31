'use strict';

const Service = require('egg').Service;

class OrderService extends Service {
  async get_myOrderCount(user_id, keyword, order_category, order_status) {
    const { app } = this;
    let sql = '';
    sql += `select count(*) as total from order_info where buyer_id = 
      ${user_id} and order_content like '%${keyword}%' `;
    if (order_category !== '' && order_category === 'domain') {
      sql += `and order_type in ('do_fixedprice','do_trustreg',
        'do_renew','do_trustbuy') `;
    }
    if (order_category !== '' && order_category === 'mark') {
      sql += `and order_type in ('mk_fixedprice','mk_trustreg',
        'mk_trustbuy') `;
    }
    if (order_category !== '' && order_category === 'other') {
      sql += `and order_type = 
        'other' `;
    }
    if (order_status !== '') {
      sql += `and order_status = '${order_status}'`;
    }

    const query = await app.mysql.query(sql);
    return query[0].total;
  }

}

module.exports = OrderService;
