'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async get_articleList(category, start, length) {
    const { app } = this;
    let sql = '';
    if (category === '') {
      sql += `select article_id,article_title,thumb_path,article_lead,article_tag,author_id,
        create_time from article_info where status = 'active' order by create_time desc 
        limit ${start},${length}`;
    } else {
      sql += `select article_id,article_title,thumb_path,article_lead,article_tag,author_id,
        create_time from article_info where status = 'active' and article_category = 
        '${category}' order by create_time desc limit ${start},${length}`;
    }

    const query = await app.mysql.query(sql);
    return query;
  }

  async get_companyArticleList(company_id, start, length) {
    const { app } = this;
    let sql = '';
    sql += `select article_id,article_title,thumb_path,article_lead,article_tag,author_id,
      create_time from company_article where status = 'active' and company_id = 
      '${company_id}' order by create_time desc limit ${start},${length}`;

    const query = await app.mysql.query(sql);
    return query;
  }

}

module.exports = ArticleService;
