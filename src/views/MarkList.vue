<template>
<div style="height: 100%;">

    <div class="header"></div>
    <div class="container" style="padding-bottom: 50px;">

        <van-pull-refresh v-model="mark_refreshing" @refresh="refresh_markAjax">
            <van-list class="mark-list" v-model="mark_loading" :finished="mark_finished"
             finished-text="喂喂，你触碰到我的底线了" @load="load_markAjax">
                <template v-for="(mark, index) in mark_list">
                <router-link class="mark-item"
                :to="'/mark_detail/' + mark.regno_md" :key="index" >
                    <div class="thumb-box">
                        <img class="thumb" :src="`https://m.waitui.com/${mark.image_path}`" />
                    </div>
                    <div class="category">
                        <template v-if="mark.mark_category < 10">
                        {{ '0' + mark.mark_category }}</template>
                        <template v-else>{{ mark.mark_category }}</template>
                        <i></i>{{ mark.mark_name }}
                    </div>
                    <div class="price-btn">¥{{ mark.mark_price | number_format }}</div>
                </router-link>
                </template>
            </van-list>
        </van-pull-refresh>

    </div>

    <tabbar path="mark_list"></tabbar>

</div>
</template>

<script>
// @ is an alias to /src
import { markSalePrice } from '../util/util';
import Tabbar from '../components/Tabbar.vue';

export default {
  name: 'MarkList',
  components: {
    Tabbar,
  },
  filters: {
    number_format(value) {
      return parseInt(markSalePrice(value), 10).toLocaleString();
    },
  },
  data() {
    return {
      mark_list: [],
      mark_page: 1, // 10条一页，每次加载10条
      mark_loading: false,
      mark_finished: false,
      mark_refreshing: false,
    };
  },
  methods: {
    load_markAjax() {
      const that = this;
      that.$http
        .post('/api/get_markAjax', that.$qs.stringify({
          page: that.mark_page,
        }))
        .then(({ data }) => {
          // 清空列表数据
          if (that.mark_refreshing) {
            that.mark_list = [];
            that.mark_refreshing = false;
          }
          // es6数组的扩展
          that.mark_list.push(...data.mark_list);
          that.mark_page += 1;
          // 加载状态结束
          that.mark_loading = false;
          // 数据全部加载完成
          if (data.mark_list.length < 10) {
            this.mark_finished = true;
          }
        });
    },
    refresh_markAjax() {
      const that = this;
      that.mark_page = 1;
      that.mark_loading = true;
      that.mark_finished = false;
      that.load_markAjax();
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.mark-list{
    padding: .15rem;
    background-color: #fff;
    .after-cls;
    .mark-item{
        float: left;
        width: 3.3rem;
        position: relative;
        margin: .15rem;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        padding: 5px 10px;
        .thumb-box{
            display: block;
            width: 2.4rem;
            height: 1.8rem;
            line-height: 1.8rem;
            text-align: center;
            margin: 0 auto;
            .thumb{
                display: inline-block;
                max-width: 2.4rem;
                max-height: 1.8rem;
                vertical-align: middle;
            }
        }
        .category{
            font-size: 13px;
            color: #666;
            height: 24px;
            line-height: 24px;
            text-align: center;
            .ellip;
            i{
                display: inline-block;
                width: .5px;
                height: 12px;
                background-color: #e0e0e0;
                margin: 0 10px;
                position: relative;
                top: 2px;
            }
        }
        .price-btn{
            display: block;
            width: 90%;
            height: 30px;
            line-height: 30px;
            .border-radius(4px);
            font-size: 13px;
            color: #fff;
            background-color: #20b998;
            text-align: center;
            margin: 5px auto;
        }
    }
}
</style>
