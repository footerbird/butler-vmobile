<template>
<div style="height: 100%;">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>商标分类表</h4>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">
        <template v-if="page_loading">
        <div class="loading-box">
            <van-loading size="24px" vertical>加载中...</van-loading>
        </div>
        </template>
        <template v-else>
        <div class="sort-block">
            <div class="title">商标分类是什么？</div>
            <div class="summary">
                <p>商标是区别商品或服务来源的一种标志，每一个注册商标都是指定用于某一商品或服务上的。正是为了
                商标检索、审查、管理工作的需要，把某些具有共同属性的商品组合到一起，编为一个类，将所有商品及服
                务共划分为45个类别，形成了商标分类表——“商标注册用商品和服务分类”。</p>
            </div>
            <div class="list">
                <template v-for="(category, index) in mark_category">
                <router-link class="item"
                 :to="'/sort_group/' + category.category_code" :key="index" >
                    <img class="item-thumb"
                     :src="require(`../assets/images/sort/type${category.category_id}.png`)" />
                    <div class="item-title">{{ category.category_code }}类&nbsp;&nbsp;
                    {{ category.category_name }}</div>
                    <div class="item-summary">{{ category.description }}</div>
                </router-link>
                </template>
                <a class="item">
                    <img src="../assets/images/logo.png" class="item-thumb" />
                    <div class="item-title">基于&nbsp;&nbsp;尼斯分类</div>
                    <div class="item-summary">截至2020年，商标国际分类共包括45类，其中商品34类，服务项目
                    11类，共包含一万多个商品和服务项目。申请人所需填报的商品及服务一般说来都在其中了。不仅所有
                    尼斯联盟成员国都使用此分类表，而且，非尼斯联盟成员国也可以使用该分类表。所不同的是，尼斯联
                    盟成员可以参与分类表的修订，而非成员国则无权参与。</div>
                </a>
            </div>
        </div>
        </template>

    </div>

</div>
</template>

<script>
export default {
  name: 'MarkSort',
  data() {
    return {
      page_loading: true,
      mark_category: [],
    };
  },
  mounted() {
    const that = this;
    that.load_markSort();
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    load_markSort() {
      const that = this;
      that.$http
        .get('/api/get_markSort')
        .then(({ data }) => {
          that.mark_category = data.mark_category;
          that.page_loading = false;
        });
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.sort-block{
    margin-top: 10px;
    padding: .15rem;
    background-color: #fff;
    .title{
        position: relative;
        font-size: 16px;
        font-weight: bold;
        height: 48px;
        line-height: 50px;
        padding-left: 20px;
        border-bottom: 1px dashed #dae9ee;
        &:after{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 3px;
            height: 20px;
            background-color: #00c1de;
            margin-top: -10px;
        }
    }
    .summary{
        font-size: 13px;
        color: #666;
        text-indent: 26px;
        line-height: 24px;
        padding: 20px .15rem 15px .15rem;
    }
    .list{
        .after-cls;
        .item{
            float: left;
            position: relative;
            width: 3.3rem;
            overflow: hidden;
            padding: 10px 10px 10px 15px;
            border: 1px solid #e5e5e5;
            margin: .15rem;
            .item-thumb{
                position: absolute;
                left: 10px;
                top: 10px;
                width: 32px;
                .border-radius(50%);
            }
            .item-title{
                padding-right: 5px;
                font-size: 14px;
                font-weight: bold;
                color: #333;
                text-align: right;
                line-height: 32px;
                margin-bottom: 10px;
            }
            .item-summary{
                font-size: 12px;
                color: #666;
                line-height: 18px;
                width: 100%;
                height: 125px;
                overflow: hidden;
            }
            &:hover{
                border-color: #00c1de;
            }
            &.cur{
                .item-title{
                    color: @base-color;
                }
            }
        }
    }
}
</style>
