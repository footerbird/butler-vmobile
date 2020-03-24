<template>
<div style="height: 100%;">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>{{ domain.domain_name }}</h4>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <template v-if="page_loading">
        <div class="loading-box">
            <van-loading size="24px" vertical>加载中...</van-loading>
        </div>
        </template>
        <template v-else>
        <div class="domain-detail">

            <div class="info-top">
                <h4>{{ domain.domain_name }}
                    <template v-if="domain.is_onsale == 'unsale'">
                    <font class="col-gray9 f20">（已下架）</font>
                    </template>
                </h4>
                <div class="summary">域名简介:{{ domain.domain_summary }}</div>
            </div>

            <div class="info-list">
                <h4>whois信息</h4>
                <template v-if="domain.is_onsale == 'sale'">
                <dl class="pt10">
                    <dt>价格</dt>
                    <dd><font class="col-base f16">
                    <template v-if="domain.domain_price == 0">议价</template>
                    <template v-else>{{ domain.domain_price | number_format }}元</template>
                    </font></dd>
                </dl>
                </template>
                <dl><dt>域名分类</dt><dd>{{ domain.domain_type }}</dd></dl>
                <dl><dt>委托机构</dt><dd>外推网</dd></dl>
                <dl><dt>注册日期</dt><dd>{{ domain.created_date | date_format }}</dd></dl>
                <dl><dt>过期日期</dt><dd>{{ domain.expired_date | date_format }}</dd></dl>
                <dl class="pb10"><dt>距到期</dt><dd>{{ domain.expired_distance }}天</dd></dl>
                <div class="ta-c pb50">
                    <template v-if="domain.is_onsale == 'sale'">
                    <a class="pub-btn-blue" href="mqqwpa://im/chat?chat_type=wpa&uin=2165223868&version=1&src_type=web&web_src=oicqzone.com" target="_parent">在线咨询</a>
                    </template>
                </div>
            </div>

        </div>

        <div class="f14 col-gray9 lh20 mt10 bg-white" style="padding: 15px;">
          本页详细列出关于{{ domain.domain_name }}域名的出售信息，
          含域名分类、域名注册日期、域名过期日期、域名到期天数、域名出售价格、域名简介含义信息。</div>
        </template>

    </div>

</div>
</template>

<script>
export default {
  name: 'DomainDetail',
  filters: {
    number_format(value) {
      return parseInt(value, 10).toLocaleString();
    },
    date_format(value) {
      return value.substr(0, 10);
    },
  },
  data() {
    return {
      page_loading: true,
      domain: {
        domain_name: '',
        created_date: '',
        expired_date: '',
        domain_type: '',
        domain_price: 0,
        domain_summary: '',
        is_onsale: 'sale',
        expired_distance: '',
      },
    };
  },
  mounted() {
    const that = this;
    that.load_domainDetail();
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    },
    load_domainDetail() {
      const that = this;
      that.$http
        .post('/api/get_domainDetail', that.$qs.stringify({
          domain_name_str: that.$route.params.domain_name_str,
        }))
        .then(({ data }) => {
          that.domain = data.domain;
          that.page_loading = false;
        });
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.domain-detail{
    .info-top{
        margin-top: 10px;
        background-color: #fff;
        padding: 15px;
        h4{
            font-size: 28px;
            font-weight: normal;
            color: #5195d5;
            height: 28px;
            line-height: 28px;
            margin-bottom: 10px;
        }
        .summary{
            font-size: 13px;
            color: #666;
            line-height: 20px;
            padding: 2px 0;
        }
    }
    .info-list{
        margin-top: 10px;
        background-color: #fff;
        padding: 0 15px;
        h4{
            font-size: 16px;
            font-weight: normal;
            height: 48px;
            line-height: 50px;
            border-bottom: 1px solid #e5e5e5;
        }
        dl{
            .after-cls;
            dt{
                float: left;
                width: 1.6rem;
                font-size: 13px;
                color: #999;
                line-height: 32px;
                padding: 3px 0;
            }
            dd{
                margin-left: 1.6rem;
                font-size: 14px;
                color: #333;
                line-height: 32px;
                padding: 3px 10px;
            }
        }
    }
}
</style>
