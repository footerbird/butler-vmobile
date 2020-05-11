'use strict';

const Controller = require('egg').Controller;

const moment = require('moment');
const md5 = require('js-md5');
const util = require('../util/util.js');
const sms = require('../util/sms.js');

class UserController extends Controller {
  async check_phoneRegister(phone) {
    const { ctx } = this;

    const regStatus = await ctx.service.user.get_phoneRegStatus(phone);
    return regStatus;
  }

  async check_phoneRegisterAjax() {
    const { ctx } = this;
    let { phone } = ctx.request.body;
    phone = phone || '';

    const regStatus = await ctx.service.user.get_phoneRegStatus(phone);
    const state = regStatus ? 'reg' : 'unreg';

    ctx.body = {
      state,
    };
  }

  async send_smsCodeAjax() {
    const { ctx } = this;
    let { phone } = ctx.request.body;
    phone = phone || '';
    if (!util.valid_is_mobile(phone)) {
      const state = 'failed',
        msg = '手机号码格式错误';
      ctx.body = {
        state,
        msg,
      };
      return false;
    }

    const randCode = Math.random().toString().slice(-6); // 生成6位随机数

    const addStatus = await ctx.service.smsvalid.add_smsvalidOne(phone, randCode);
    let state,
      msg;
    if (addStatus) {
      state = 'success';
      msg = '发送成功';
      sms.send_sms_api(phone, randCode);
    } else {
      state = 'failed';
      msg = '程序错误，请重试';
    }

    ctx.body = {
      state,
      msg,
    };
  }

  async record_user_login_info(userinfo, ip_address, city_address) {
    const { ctx } = this;

    if (typeof (userinfo) !== 'undefined' && userinfo.user_id !== '') {
      const login_userid = userinfo.user_id,
        login_phone = userinfo.user_phone,
        login_name = userinfo.user_name,
        login_client = 'eggjs',
        login_ip = ip_address,
        login_city = city_address,
        login_time = moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss');
      // add_userLoginOne方法记录用户登录信息
      await ctx.service.user.add_userLoginOne(login_userid, login_phone,
        login_name, login_client, login_ip, login_city, login_time);

      // 设session
      ctx.session.userinfo = userinfo;
      // 设cookie
      ctx.cookies.set('user_phone', userinfo.user_phone, {
        expires: 259200,
      });
      ctx.cookies.set('user_name', userinfo.user_name, {
        expires: 259200,
      });
    }
  }

  async send_phoneLoginAjax() {
    const { ctx } = this;
    let {
      login_type, phone_num, pwd_num, code_num,
    } = ctx.request.body;
    login_type = login_type || '';
    const phone = phone_num || '',
      pwd = pwd_num || '',
      code = code_num || '',
      ip_address = '',
      city_address = '';

    const regStatus = this.check_phoneRegister(phone);
    if (regStatus === 0) { // 提示未注册
      const state = 'failed',
        msg = '该手机号未注册，请先注册';
      ctx.body = {
        state,
        msg,
      };
      return false;
    }

    let login_success;
    if (login_type === 'sms_login') { // 如果当前是验证码登录
      // isvalid_smsCode方法判断短信验证码是否正确
      login_success = await ctx.service.smsvalid.isvalid_smsCode(phone, code);
    } else {
      // isvalid_pwdPhone方法判断用户名密码是否正确
      login_success = await ctx.service.user.isvalid_pwdPhone(phone, md5(pwd));
    }

    let state,
      msg,
      userinfo;
    if (login_success === 1) { // 如果正确，则登录
      // 根据手机号拿到用户信息
      userinfo = await ctx.service.user.get_userByPhone(phone);

      if (typeof (userinfo) !== 'undefined') {
        // 记录用户登录日志
        this.record_user_login_info(userinfo, ip_address, city_address);

        // 判断当天是否签到
        let is_signed;
        if (userinfo.sign_time === '') { // 如果没签到过，则可以签到
          is_signed = 0;// 设置未签到过
        } else { // 否则只能当天没签到过才能签到
          if (new Date().getTime() - new Date(userinfo.sign_time).getTime() > 0) { // 如果当天签到过，则相等
            is_signed = 0;// 设置未签到过
          } else {
            is_signed = 1;// 设置签到过
          }
        }

        state = 'success';
        msg = '登录成功';
        userinfo = {
          user_phone: userinfo.user_phone,
          user_token: userinfo.user_pwd,
          user_name: userinfo.user_name,
          user_figure: userinfo.user_figure,
          is_signed,
        };
      } else {
        state = 'failed';
        msg = '程序错误，请重试';
      }
    } else {
      state = 'failed';
      if (login_type === 'sms_login') { // 如果当前是验证码登录
        msg = '验证码错误，请重试';
      } else {
        msg = '账号密码错误，请重试';
      }
    }

    ctx.body = {
      state,
      msg,
      userinfo,
    };
  }

  async send_phoneRegisterAjax() {
    const { ctx } = this;
    const { phone_reg, pwd_reg, code_reg } = ctx.request.body;
    const phone = phone_reg || '',
      pwd = pwd_reg || '',
      code = code_reg || '',
      ip_address = '',
      city_address = '',
      create_time = moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss');

    const regStatus = this.check_phoneRegister(phone);
    if (regStatus === 1) { // 提示已注册
      const state = 'failed',
        msg = '该手机号已被注册，请更换';
      ctx.body = {
        state,
        msg,
      };
      return false;
    }

    // isvalid_smsCode方法判断短信验证码是否正确
    const smsValid = await ctx.service.smsvalid.isvalid_smsCode(phone, code);

    let state,
      msg,
      userinfo;
    if (smsValid === 1) { // 如果正确，则添加新账户
      // add_userOne方法添加新账户
      const createStatus = await ctx.service.user.add_userOne(phone, md5(pwd), phone, create_time);
      if (createStatus) { // 如果添加成功
        // 根据手机号拿到用户信息
        userinfo = await ctx.service.user.get_userByPhone(phone);
        if (typeof (userinfo) !== 'undefined' && userinfo.user_id !== '') {
          // get_butlerListAll方法获取所有品牌管家信息
          const butler_list = await ctx.service.user.get_butlerListAll();
          const rad_butler = butler_list[Math.floor(Math.random() * butler_list.length)];
          // 随机给用户分配品牌管家
          await ctx.service.user.edit_userButler(userinfo.user_id, rad_butler.butler_id);

          // 给用户发送用户注册成功的消息
          await ctx.service.user.add_myMessageOne(userinfo.user_id, '用户注册成功', '用户注册',
            `尊敬的用户您好，恭喜您成功注册外推网！您的登录账号为${phone}，请妥善保管。`);

          // 记录用户登录日志
          this.record_user_login_info(userinfo, ip_address, city_address);

          state = 'success';
          msg = '注册成功';
          const is_signed = 0; // 设置未签到过,新注册用户
          userinfo = {
            user_phone: userinfo.user_phone,
            user_token: userinfo.user_pwd,
            user_name: userinfo.user_name,
            user_figure: userinfo.user_figure,
            is_signed,
          };
        } else {
          state = 'failed';
          msg = '程序错误，请重试';
        }
      } else {
        state = 'failed';
        msg = '程序错误，请重试';
      }
    } else {
      state = 'failed';
      msg = '验证码错误，请重试';
    }

    ctx.body = {
      state,
      msg,
      userinfo,
    };
  }

  async send_phoneFindpwdAjax() {
    const { ctx } = this;
    const { phone_find, pwd_find, code_find } = ctx.request.body;
    const phone = phone_find || '',
      pwd = pwd_find || '',
      code = code_find || '';

    const regStatus = this.check_phoneRegister(phone);
    if (regStatus === 0) { // 提示未注册
      const state = 'failed',
        msg = '该手机号未注册，请先注册';
      ctx.body = {
        state,
        msg,
      };
      return false;
    }

    // isvalid_smsCode方法判断短信验证码是否正确
    const smsValid = await ctx.service.smsvalid.isvalid_smsCode(phone, code);

    let state,
      msg,
      userinfo;
    if (smsValid === 1) { // 如果正确，则重设密码
      // reset_userPassword方法重设密码
      const resetStatus = await ctx.service.user.reset_userPassword(phone, md5(pwd));
      if (resetStatus) { // 如果重设密码成功
        // 根据手机号拿到用户信息
        userinfo = await ctx.service.user.get_userByPhone(phone);
        if (typeof (userinfo) !== 'undefined' && userinfo.user_phone !== '') {
          state = 'success';
          msg = '密码已重设';
          userinfo = {
            user_phone: userinfo.user_phone,
            user_name: userinfo.user_name,
          };
        } else {
          state = 'failed';
          msg = '程序错误，请重试';
        }
      } else {
        state = 'failed';
        msg = '程序错误，请重试';
      }
    } else {
      state = 'failed';
      msg = '验证码错误，请重试';
    }

    ctx.body = {
      state,
      msg,
      userinfo,
    };
  }

  async get_myConsole() {
    const { ctx } = this;
    let { authorization } = ctx.request.header;
    const token = authorization || '';
    
    let { phone } = ctx.request.body;
    phone = phone || '';

    // 判断手机号是否已注册,1为已注册，0为未注册
    const regStatus = this.check_phoneRegister(phone);
    if (regStatus === 0) { // 提示未注册
      const state = 'failed',
        msg = '该手机号未注册，请先注册';
      ctx.body = {
        state,
        msg,
      };
      return false;
    }

    const userinfo = await ctx.service.user.get_userByPhone(phone);
    if (typeof (userinfo) === undefined) { // 未获取到用户信息
      const state = 'failed',
        msg = '程序错误，请重试';
      ctx.body = {
        state,
        msg,
      };
      return false;
    }
    // 验证登录令牌,这里用户的令牌为用户密码的md5值
    if (typeof (userinfo) !== undefined && userinfo.user_pwd !== token) {
      const state = 'failed',
        msg = '用户令牌错误，请重试';
      ctx.body = {
        state,
        msg,
      };
      return false;
    }

    const user_id = userinfo.user_id;

    // get_myMessageCount方法得到我的消息
    const unreadCount = await ctx.service.user.get_myMessageCount(user_id, 'unread');

    // 判断当天是否签到
    let is_signed;
    if (userinfo.sign_time === '') { // 如果没签到过，则可以签到
      is_signed = 0;// 设置未签到过
    } else { // 否则只能当天没签到过才能签到
      if (new Date().getTime() - new Date(userinfo.sign_time).getTime() > 0) { // 如果当天签到过，则相等
        is_signed = 0;// 设置未签到过
      } else {
        is_signed = 1;// 设置签到过
      }
    }

    // get_myOrderCount方法得到我的订单总数
    const orderCount = await ctx.service.order.get_myOrderCount(user_id, '', '', '');

    // get_myDomainCount方法得到我的域名总数
    const domainCount = await ctx.service.domain.get_myDomainCount(user_id, '');

    // get_myMarkCount方法得到我的商标总数
    const markCount = await ctx.service.mark.get_myMarkCount(user_id, '');

    // get_certifyByUser方法得到用户企业认证信息
    const certify_list = await ctx.service.certify.get_certifyByUser(user_id);
    let company_certify;
    if (certify_list.length === 0) {
      company_certify = '';
    } else {
      company_certify = certify_list[0];
    }

    ctx.body = {
      userinfo,
      unreadCount,
      is_signed,
      orderCount,
      domainCount,
      markCount,
      company_certify,
    };
  }

  async get_myAccount() {
    const { ctx } = this;
    let { authorization } = ctx.request.header;
    const token = authorization || '';

    let { phone } = ctx.request.body;
    phone = phone || '';

    // 判断手机号是否已注册,1为已注册，0为未注册
    const regStatus = this.check_phoneRegister(phone);
    if (regStatus === 0) { // 提示未注册
      const state = 'failed',
        msg = '该手机号未注册，请先注册';
      ctx.body = {
        state,
        msg,
      };
      return false;
    }

    const userinfo = await ctx.service.user.get_userByPhone(phone);
    if (typeof (userinfo) === undefined) { // 未获取到用户信息
      const state = 'failed',
        msg = '程序错误，请重试';
      ctx.body = {
        state,
        msg,
      };
      return false;
    }
    // 验证登录令牌,这里用户的令牌为用户密码的md5值
    if (typeof (userinfo) !== undefined && userinfo.user_pwd !== token) {
      const state = 'failed',
        msg = '用户令牌错误，请重试';
      ctx.body = {
        state,
        msg,
      };
      return false;
    }

    ctx.body = {
      userinfo,
    };
  }

}

module.exports = UserController;
