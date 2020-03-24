<template>
<div style="height: 100%;">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>企业名录</h4>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <van-pull-refresh v-model="company_refreshing" @refresh="refresh_companyAjax">
            <van-list class="company-list" v-model="company_loading" :finished="company_finished"
             finished-text="喂喂，你触碰到我的底线了" @load="load_companyAjax">
                <template v-for="(company, index) in company_list">
                <router-link class="company-item"
                :to="'/company_detail/' + company.company_id" :key="index" >
                    <h3>{{ company.name }}</h3>
                    <div class="item-row">
                        <div class="item-cols ta-l">
                            <h4>法定代表人</h4>
                            <p>{{ company.oper_name }}</p>
                        </div>
                        <div class="item-cols ta-c">
                            <h4>注册资本</h4>
                            <p>{{ company.regist_capi }}</p>
                        </div>
                        <div class="item-cols ta-r">
                            <h4>成立日期</h4>
                            <p>{{ company.start_date | date_format }}</p>
                        </div>
                    </div>
                </router-link>
                </template>
            </van-list>
        </van-pull-refresh>

    </div>

</div>
</template>

<script>
export default {
  name: 'CompanyList',
  filters: {
    date_format(value) {
      return value.substr(0, 10);
    },
  },
  data() {
    return {
      company_list: [],
      company_page: 1, // 10条一页，每次加载10条
      company_loading: false,
      company_finished: false,
      company_refreshing: false,
    };
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    },
    load_companyAjax() {
      const that = this;
      that.$http
        .post('/api/get_companyAjax', that.$qs.stringify({
          page: that.company_page,
        }))
        .then(({ data }) => {
          // 清空列表数据
          if (that.company_refreshing) {
            that.company_list = [];
            that.company_refreshing = false;
          }
          // es6数组的扩展
          that.company_list.push(...data.company_list);
          that.company_page += 1;
          // 加载状态结束
          that.company_loading = false;
          // 数据全部加载完成
          if (data.company_list.length < 10) {
            this.company_finished = true;
          }
        });
    },
    refresh_companyAjax() {
      const that = this;
      that.company_page = 1;
      that.company_loading = true;
      that.company_finished = false;
      that.load_companyAjax();
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.company-list{
    margin-top: 10px;
    .company-item{
        display: block;
        position: relative;
        background-color: #fff;
        padding: 15px;
        margin-bottom: 10px;
        h3{
            font-size: 18px;
            color: #5195d5;
            font-weight: normal;
            height: 28px;
            line-height: 28px;
            .ellip;
            margin-bottom: 10px;
        }
        .item-row{
            .display-flex;
            .item-cols{
                .flex-number;
                h4{
                    font-size: 13px;
                    font-weight: normal;
                    color: #999;
                    line-height: 24px;
                }
                p{
                    font-size: 14px;
                    color: #333;
                }
            }
        }
    }
}
</style>
