'use strict';

module.exports = {
  valid_is_mobile(str) { // 验证手机号码格式
    return /^1[3|4|5|8][0-9]\d{8}$/.test(str);
  },
  random_string_numlet(length) { // 生成随机字符串，包括数字和字母
    if (!length) return false;
    const pattern = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str = '';
    for (let i = 0; i < length; i++) {
      str += pattern[Math.floor(Math.random() * 62)];
    }
    return str;
  },
};
