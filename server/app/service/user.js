'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async get_userByPhone(phone) {
    const { app } = this;
    let sql = '';
    sql += `select * from user_info where user_phone = '${phone}'`;

    const query = await app.mysql.query(sql);
    return query[0];
  }

  async get_phoneRegStatus(phone) {
    const { app } = this;
    let sql = '';
    sql += `select count(*) as total from user_info where user_phone = '${phone}'`;

    const query = await app.mysql.query(sql);
    return query[0].total;
  }

  async add_userOne(phone, pwd, name, create_time) {
    const { app } = this;
    let sql = '';
    sql += `insert into user_info(user_phone,user_pwd,user_name,create_time)values(
      '${phone}','${pwd}','${name}','${create_time}')`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async reset_userPassword(phone, pwd) {
    const { app } = this;
    let sql = '';
    sql += `update user_info set user_pwd='${pwd}' where user_phone='${phone}'`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async isvalid_pwdPhone(phone, pwd) {
    const { app } = this;
    let sql = '';
    sql += `select count(*) as total from user_info where user_phone =
      '${phone}' and user_pwd = '${pwd}'`;

    const query = await app.mysql.query(sql);
    return query[0].total;
  }

  async add_userLoginOne(login_userid, login_phone,
    login_name, login_client, login_ip, login_city, login_time) {
    const { app } = this;

    let sql = '';
    sql += `insert into login_record(login_userid,login_phone,login_name,
      login_client,login_ip,login_city,login_time)values('${login_userid}',
      '${login_phone}','${login_name}','${login_client}','${login_ip}',
      '${login_city}','${login_time}')`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async edit_userButler(user_id, user_butler) {
    const { app } = this;
    let sql = '';
    sql += `update user_info set user_butler='${user_butler}'
      where user_id='${user_id}'`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async get_butlerListAll() {
    const { app } = this;
    let sql = '';
    sql += `select * from butler_info
      order by create_time desc`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async add_myMessageOne(user_id, msg_title, msg_source, msg_content) {
    const { app } = this;
    let sql = '';
    sql += `insert into user_msg_info(msg_userid,msg_title,msg_source,msg_content)values(
      ${user_id},'${msg_title}','${msg_source}','${msg_content}')`;

    const query = await app.mysql.query(sql);
    return query;
  }

  async get_myMessageCount(user_id, status) {
    const { app } = this;
    let sql = '';
    if (status !== '') {
      sql += `select count(*) as total from user_msg_info where status =
        '${status}' and msg_userid = ${user_id}`;
    } else { // 全部消息(状态为0或1)
      sql += `select count(*) as total from user_msg_info where status !=
        'del' and msg_userid = ${user_id}`;
    }

    const query = await app.mysql.query(sql);
    return query[0].total;
  }

}

module.exports = UserService;
