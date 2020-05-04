<template>
<div style="height: 100%;">

    <div class="header"></div>
    <div class="container" style="padding-bottom: 50px;">

        <van-pull-refresh v-model="domain_refreshing" @refresh="refresh_domainAjax">
            <van-list class="domain-list" v-model="domain_loading" :finished="domain_finished"
             finished-text="喂喂，你触碰到我的底线了" @load="load_domainAjax">
                <template v-for="(domain, index) in domain_list">
                <router-link class="domain-item"
                :to="'/domain_detail/' + domain.domain_name | domain_format" :key="index" >
                    <h3>{{ domain.domain_name }}</h3>
                    <div class="summary">{{ domain.domain_summary }}</div>
                    <div class="item-row">
                        <div class="item-cols ta-l col-base">
                            <template v-if="domain.domain_price == 0">议价</template>
                            <template v-else>{{ domain.domain_price | number_format }}元</template>
                        </div>
                        <div class="item-cols ta-r col-gray9">{{ domain.expired_date }}天</div>
                    </div>
                </router-link>
                </template>
            </van-list>
        </van-pull-refresh>

    </div>

    <tabbar path="domain_list"></tabbar>

</div>
</template>

<script>
// @ is an alias to /src
import Tabbar from '../components/Tabbar.vue';

export default {
  name: 'DomainList',
  components: {
    Tabbar,
  },
  filters: {
    domain_format(value) {
      return value.replace(/\./g, '_');
    },
    number_format(value) {
      return parseInt(value, 10).toLocaleString();
    },
  },
  data() {
    return {
      domain_list: [],
      domain_page: 1, // 20条一页，每次加载20条
      domain_loading: false,
      domain_finished: false,
      domain_refreshing: false,
    };
  },
  methods: {
    load_domainAjax() {
      const that = this;
      that.$http
        .get('/api/get_domainAjax', {
          params: {
            page: that.domain_page,
          },
        })
        .then(({ data }) => {
          // 清空列表数据
          if (that.domain_refreshing) {
            that.domain_list = [];
            that.domain_refreshing = false;
          }
          // es6数组的扩展
          that.domain_list.push(...data.domain_list);
          that.domain_page += 1;
          // 加载状态结束
          that.domain_loading = false;
          // 数据全部加载完成
          if (data.domain_list.length < 20) {
            this.domain_finished = true;
          }
        });
    },
    refresh_domainAjax() {
      const that = this;
      that.domain_page = 1;
      that.domain_loading = true;
      that.domain_finished = false;
      that.load_domainAjax();
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.domain-list{
    padding: .15rem;
    background-color: #fff;
    .after-cls;
    .domain-item{
        float: left;
        width: 3.3rem;
        position: relative;
        margin: .15rem;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        padding: 5px 10px;
        h3{
            font-size: 18px;
            color: #5195d5;
            font-weight: normal;
            height: 30px;
            line-height: 30px;
            .ellip;
        }
        .summary{
            font-size: 13px;
            color: #666;
            height: 24px;
            line-height: 24px;
            .ellip;
        }
        .item-row{
            .display-flex;
            .item-cols{
                .flex-number;
                font-size: 13px;
            }
        }
    }
}
</style>
