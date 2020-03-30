'use strict';

module.exports = {
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
