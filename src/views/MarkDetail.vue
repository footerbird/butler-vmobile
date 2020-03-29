<template>
<div style="height: 100%;">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>{{ mark.mark_name }}</h4>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <template v-if="page_loading">
        <div class="loading-box">
            <van-loading size="24px" vertical>加载中...</van-loading>
        </div>
        </template>
        <template v-else>
        <div class="mark-detail">

            <div class="info-top">
                <div class="thumb-box">
                    <img class="thumb" :src="'https://m.waitui.com/' + mark.image_path" />
                </div>
                <div class="thumb-right">
                    <h4>{{ mark.mark_name }}
                        <template v-if="mark.is_onsale == 'sale'">
                        <span class="status">出售中</span>
                        </template>
                    </h4>
                    <div class="price">
                        <template v-if="mark.is_onsale == 'sale'">
                        <font class="f18 col-gray9">价格：</font>
                        ¥{{ mark.mark_price | number_format }}
                        </template>
                        <template v-else>
                        <font class="col-gray9 f16">（已下架）</font>
                        </template>
                    </div>
                </div>
                <table width="100%">
                    <tbody>
                        <tr>
                            <td width="50%">第
                                <template v-if="mark.mark_category < 10">
                                {{ '0' + mark.mark_category }}</template>
                                <template v-else>{{ mark.mark_category }}</template>
                                类&nbsp;&nbsp;{{ mark.category_name }}
                            </td>
                            <td width="50%">
                                <template v-if="mark.regno_encode != ''">
                                <img :src="'https://m.waitui.com/captcha_regno_image/' + mark.regno_encode" />
                                </template>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%">{{ mark.private_limit }}</td>
                            <td width="50%">注册年限：{{ mark.reg_year }}</td>
                        </tr>
                        <tr>
                            <td colspan="2">商品服务：{{ mark.app_range }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="ta-c pt20 pb20">
                    <template v-if="mark.is_onsale == 'sale'">
                    <a class="pub-btn-blue" href="mqqwpa://im/chat?chat_type=wpa&uin=2165223868&version=1&src_type=web&web_src=oicqzone.com" target="_parent">在线咨询</a>
                    </template>
                </div>
            </div>

            <div class="info-list">
                <h4>商标详情信息</h4>
                <dl class="pt10"><dt>初审公告期号</dt><dd>{{ mark.announce_issue }}</dd></dl>
                <dl><dt>初审公告日期</dt><dd>{{ mark.announce_date | date_format }}</dd></dl>
                <dl><dt>注册公告期号</dt><dd>{{ mark.reg_issue }}</dd></dl>
                <dl><dt>注册公告日期</dt><dd>{{ mark.reg_date | date_format }}</dd></dl>
                <dl><dt>专用权期限</dt><dd>{{ mark.private_limit }}</dd></dl>
                <dl><dt>类似群</dt><dd class="ellip">{{ mark.mark_group }}</dd></dl>
                <dl><dt>商品/服务</dt><dd>{{ mark.app_range }}</dd></dl>
                <dl class="pb10"><dt>商标状态</dt>
                    <dd>
                        <template v-for="(flow, index) in mark.mark_flow">
                        {{ flow.flowDate }}&nbsp;&nbsp;&nbsp;&nbsp;
                        {{ flow.flowName }}<br :key="index" />
                        </template>
                    </dd>
                </dl>
            </div>

        </div>

        <div class="f14 col-gray9 lh20 mt10 bg-white" style="padding: 15px;">
          本页详细列出关于{{ mark.mark_name }}商标的出售信息，
          含商标分类、商标注册号、商标使用期限、商标注册年限、
          商标服务分类、商标出售价格信息。</div>
        </template>

    </div>

</div>
</template>

<script>
const moment = require('moment');

export default {
  name: 'MarkDetail',
  filters: {
    number_format(value) {
      return parseInt(value, 10).toLocaleString();
    },
    date_format(value) {
      return moment(value).format('YYYY-MM-DD');
    },
  },
  data() {
    return {
      page_loading: true,
      mark: {
        mark_regno: '',
        mark_category: '',
        mark_name: '',
        image_path: '',
        mark_group: '',
        app_range: '',
        mark_flow: [],
        announce_issue: '',
        announce_date: '',
        reg_issue: '',
        reg_date: '',
        private_limit: '',
        mark_price: 0,
        is_onsale: 'sale',
        category_name: '',
        reg_year: '',
        regno_encode: '',
      },
    };
  },
  mounted() {
    const that = this;
    that.load_markDetail();
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    },
    load_markDetail() {
      const that = this;
      that.$http
        .post('/api/get_markDetail', that.$qs.stringify({
          regno_md: that.$route.params.regno_md,
        }))
        .then(({ data }) => {
          that.mark = data.mark;
          that.page_loading = false;
        });
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.mark-detail{
    .info-top{
        margin-top: 10px;
        background-color: #fff;
        padding: 15px;
        .thumb-box{
            float: left;
            width: 2.4rem;
            height: 2.1rem;
            line-height: 2.1rem;
            text-align: center;
            border: 1px solid #e5e5e5;
            .thumb{
                display: inline-block;
                max-width: 2.3rem;
                max-height: 2rem;
                vertical-align: middle;
            }
        }
        .thumb-right{
            margin-left: 2.8rem;
            height: 2.1rem;
            h4{
                font-size: 28px;
                font-weight: normal;
                color: #5195d5;
                height: 1.2rem;
                line-height: 1.2rem;
                .ellip;
                .status{
                    display: inline-block;
                    font-size: 13px;
                    color: #fff;
                    height: 24px;
                    line-height: 25px;
                    background-color: #77abeb;
                    padding: 0 10px;
                    margin-left: 10px;
                    vertical-align: 3px;
                    .border-radius(2px);
                }
            }
            .price{
                font-size: 20px;
                font-weight: normal;
                color: @base-color;
                line-height: .9rem;
            }
        }
        table{
            table-layout: fixed;
            margin-top: 15px;
            td{
                font-size: 13px;
                line-height: 24px;
                .ellip;
            }
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
                line-height: 24px;
                padding: 3px 0;
            }
            dd{
                margin-left: 1.6rem;
                font-size: 14px;
                color: #333;
                line-height: 24px;
                padding: 3px 10px;
            }
        }
    }
}
</style>
