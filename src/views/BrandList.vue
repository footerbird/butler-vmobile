<template>
<div style="height: 100%;">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>品牌大全</h4>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <van-pull-refresh v-model="brand_refreshing" @refresh="refresh_brandAjax">
            <van-list class="brand-list" v-model="brand_loading" :finished="brand_finished"
             finished-text="喂喂，你触碰到我的底线了" @load="load_brandAjax">
                <template v-for="(brand, index) in brand_list">
                <router-link class="brand-item"
                :to="'/brand_detail/' + brand.brand_id" :key="index" >
                    <div class="brand-item__bd">
                        <h4 class="brand-item__title">{{ brand.brand_name }}
                        <span class="fl-r f13 col-gray9 mt5">{{ brand.industry_name }}</span></h4>
                        <p class="brand-item__desc">{{ brand.brand_lead }}</p>
                    </div>
                    <div class="brand-item__hd">
                        <img class="brand-item__thumb"
                        :src="'https://m.waitui.com/' + brand.thumb_path"
                        :alt="brand.brand_name + '怎么样'" >
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
  name: 'BrandList',
  data() {
    return {
      brand_list: [],
      brand_page: 1, // 10条一页，每次加载10条
      brand_loading: false,
      brand_finished: false,
      brand_refreshing: false,
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
    load_brandAjax() {
      const that = this;
      that.$http
        .post('/api/get_brandAjax', that.$qs.stringify({
          page: that.brand_page,
        }))
        .then(({ data }) => {
          // 清空列表数据
          if (that.brand_refreshing) {
            that.brand_list = [];
            that.brand_refreshing = false;
          }
          // es6数组的扩展
          that.brand_list.push(...data.brand_list);
          that.brand_page += 1;
          // 加载状态结束
          that.brand_loading = false;
          // 数据全部加载完成
          if (data.brand_list.length < 10) {
            this.brand_finished = true;
          }
        });
    },
    refresh_brandAjax() {
      const that = this;
      that.brand_page = 1;
      that.brand_loading = true;
      that.brand_finished = false;
      that.load_brandAjax();
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.brand-list{
    background-color: #fff;
    .brand-item{
        .display-flex;
        color: #000;
        padding: 15px;
        position: relative;
        .brand-item__bd{
            .flex-number;
            .brand-item__title{
                font-weight: 400;
                font-size: 17px;
                .ellip;
                margin-bottom: .1rem;
            }
            .brand-item__desc{
                color: #999;
                font-size: 13px;
                line-height: 1.2;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
        }
        .brand-item__hd{
            width: 1.8rem;
            height: 1.2rem;
            line-height: 1.2rem;
            margin-left: .8em;
            margin-right: 0;
            .brand-item__thumb{
                width: 100%;
                height: 100%;
                border: 1px solid #e5e5e5;
                border-radius: 4px;
                vertical-align: top;
            }
        }
    }
}
</style>
