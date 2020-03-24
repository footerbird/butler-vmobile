<template>
<div style="height: 100%;">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>品牌大全</h4>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <template v-if="page_loading">
        <div class="loading-box">
            <van-loading size="24px" vertical>加载中...</van-loading>
        </div>
        </template>
        <template v-else>
        <article class="vant-article">
            <h1 class="article-title">{{ brand.brand_name }}品牌怎么样</h1>
            <div class="article-summary" v-html="summary_str"></div>
            <section>
                <template v-if="brand.poster_path != ''">
                <p><img :src="'https://m.waitui.com/' + brand.poster_path"
                :alt="brand.brand_name + '怎么样'" /></p>
                </template>
                <div v-html="brand.brand_content"></div>
                <template v-if="brand.brand_phone != ''">
                <p class="f12 col-gray9">联系电话：{{ brand.brand_phone }}</p>
                </template>
            </section>
        </article>

        <div class="f14 col-gray9 lh20 mt10 bg-white" style="padding: 15px;">
          本页详细列出关于{{ brand.brand_name }}
          含品牌所属公司介绍，{{ brand.brand_name }}
          所处行业的品牌地位及优势。</div>
        </template>

    </div>

</div>
</template>

<script>
export default {
  name: 'BrandDetail',
  data() {
    return {
      page_loading: true,
      brand: {
        brand_name: '',
        brand_lead: '',
        poster_path: '',
        brand_content: '',
        brand_company: '',
        brand_legal: '',
        brand_phone: '',
        brand_origin: '',
        brand_start: '',
      },
      company: null,
    };
  },
  computed: {
    summary_str() {
      return this.join_brandSummary();
    },
  },
  mounted() {
    const that = this;
    that.load_brandDetail();
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    },
    load_brandDetail() {
      const that = this;
      that.$http
        .post('/api/get_brandDetail', that.$qs.stringify({
          brand_id: that.$route.params.brand_id,
        }))
        .then(({ data }) => {
          that.brand = data.brand;
          that.company = data.company;
          that.page_loading = false;
        });
    },
    join_brandSummary() {
      let str = '';
      const b = this.brand;
      const c = this.company;
      if (b.brand_company !== '') { // 如果有公司
        if (c != null) { // 如果有相关公司的工商信息
          str += `「${b.brand_name}」是
          <a class="col-blue" href="/company_detail/${c.company_id}">
          ${c.name}</a> 旗下著名品牌。`;
        } else {
          str += `「${b.brand_name}」是${b.brand_company}旗下著名品牌。`;
        }
        if (b.brand_origin !== '') {
          str += `该品牌发源于${b.brand_origin}，`;
        }
        if (b.brand_legal !== '') {
          str += `由创始人${b.brand_legal}`;
        }
        if (b.brand_start !== '') {
          str += `在${b.brand_start}期间创立，`;
        }
        str += '经过多年的不懈努力和高速发展，现已成为行业的标杆品牌。';
      } else {
        str += b.brand_lead;
      }
      return str;
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.vant-article{
    padding: 20px 15px;
    font-size: 18px;
    line-height: 1.8;
    background-color: #fff;
    color: #3d464d;
    .article-title{
        padding: 10px;
        font-size: 22px;
        font-weight: 600;
        text-align: center;
        margin-bottom: .5em;
    }
    .article-author{
        .display-flex;
        line-height: 48px;
        margin-bottom: 20px;
    }
    .article-author-figure{
        display: inline-block;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-left: 15px;
        margin-right: 15px;
    }
    .article-author-name{
        font-size: 16px;
        font-weight: bold;
        margin-right: 15px;
    }
    .article-author-time{
        font-size: 14px;
        color: #999;
    }
    /deep/ .article-summary{
        position: relative;
        font-size: 16px;
        color: #666;
        padding: 10px 10px 10px 36px;
        background-color: #f7f7f7;
        margin-bottom: 20px;
        &:before{
            position: absolute;
            content: "“";
            font-size: 32px;
            height: 36px;
            top: 5px;
            left: 10px;
        }
    }
    section {
        margin-bottom: 1.5em;
    }
    /deep/ h1 {
        font-size: 18px;
        font-weight:400;
        margin-bottom: .9em;
    }
    /deep/ h2 {
        font-size: 20px;
        font-weight:600;
        margin-bottom: .34em;
    }
    /deep/ h3 {
        font-size: 18px;
        font-weight:600;
        margin-bottom: .34em;
    }
    /deep/ p {
        margin: 0 0 1em;
    }
    /deep/ a{
        color: #3d464d;
    }
    /deep/ * {
        max-width: 100%;
        box-sizing: border-box;
        word-wrap: break-word;
    }
}
</style>
