<template>
<div style="height: 100%;">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>关于我们</h4>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <article class="vant-article">
            <section>
                <p>外推网（杭州外推网络有限公司）奉行“每一广告都是对品牌的长期投资”的理念，
                提供专业的品牌营销服务，帮助广告主最大化的提升广告投放的效果。
                同时，外推网还提供专业的品牌管理服务，帮助企业更好的管理自己的品牌资产。
                全方位的品牌资讯让您时刻了解到品牌行业发展的最新动向。
                外推网的用户可以直接接触到企业的广告投放，并可以对企业投放的广告进行投票，
                同时也可直接领取广告投放提供的广告红包，实现用户端和广告主的双赢。</p>
            </section>
        </article>

    </div>

</div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
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
