'use strict';

const Service = require('egg').Service;

class SmsvaildService extends Service {
  async add_smsvalidOne(phone, code) {
    const { app } = this;
    const activeNum = this.isactive_smsvalidByPhone(phone);
    if (activeNum > 0) {
      this.edit_smsvalidByPhone(phone, 'inactive');// 修改为无效
    }

    let sql = '';
    sql += `insert into smsvalid_info(sms_phone,sms_code)values('${phone}','${code}')`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async edit_smsvalidByPhone(phone, status) {
    const { app } = this;
    let sql = '';
    sql += `update smsvalid_info set sms_status='${status}'
      where sms_phone='${phone}'`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async isactive_smsvalidByPhone(phone) {
    const { app } = this;
    let sql = '';
    sql += `select count(*) as total from smsvalid_info where sms_phone = 
      '${phone}' and sms_status = 'active'`;

    const query = await app.mysql.query(sql);
    return query[0].total;
  }

  async isvalid_smsCode(phone, code) {
    const { app } = this;
    let sql = '';
    sql += `select count(*) as total from smsvalid_info where sms_phone = 
      '${phone}' and sms_code = '${code}' and sms_status = 'active'`;

    const query = await app.mysql.query(sql);
    return query[0].total;
  }

}

module.exports = SmsvaildService;
