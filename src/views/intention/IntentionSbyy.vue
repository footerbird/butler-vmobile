<template>
<div style="height: 100%;" class="bg-white">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>商标异议</h4>
            <router-link class="home-icon" to="/"></router-link>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <div class="intention-page">
            <div class="intention-banner">
                <img src="../../assets/images/intention-banner.png" width="100%"
                 alt="外推网商标异议服务" />
                <div class="price"><i>¥</i><font>3500</font><i>/件</i></div>
            </div>
            <intention-marquee>适用于被他人申请的商标侵权，希望在其商标公示期提出异议申请，以阻止他人
            注册的用户&nbsp;&nbsp;&nbsp;&nbsp;适用于被他人申请的商标侵权，希望在其商标公示期提出异议
            申请，以阻止他人注册的用户
            </intention-marquee>
            <van-cell-group>
                <div class="intention-page__title pt10 pb10"><span>为了更好的了解您的需求，请完善以下信息</span></div>
                <van-field v-model="intention_name" placeholder="联系姓名" />
                <van-field v-model="intention_phone" type="tel" placeholder="手机号码" />
                <van-field v-model="description" type="textarea" rows="2" autosize
                 maxlength="50" show-word-limit placeholder="请输入详细信息" />
            </van-cell-group>

            <div class="van-button-area">
                <van-button type="primary" color="#ea6f5a" class="f18" block
                 @click="submitIntention">提交</van-button>
            </div>

            <!-- 业务介绍 -->
            <div class="intention-summary">
                <div class="summary-box">
                    <p style="text-indent: -6px;">【注释】</p>
                    <p>在先权利人或利害关系人对在初审公告期内的商标提出异议，以阻止他人商标的授权，维护自身
                    合法权益。 常用的异议理由主要包括： 1. 侵犯了在先注册商标专用权； 2. 侵犯了驰名商标专
                    用权； 3. 侵犯了在先商号权或在先专利权或在先著作权； 4. 以不正当手段抢注他人在先使用并
                    具有一定影响力的商标； 5. 属于未经授权，以自己的名义将被代表人的商标申请注册； 6. 侵犯
                    他人在先特殊标志权的。</p>
                </div>
            </div>
            <!-- 服务流程 -->
            <div class="intention-flow pt20">
                <div class="intention-title"><span>服务流程</span></div>
                <div class="intention-sub-title">SERVICE PROCESS</div>
                <div class="flow-step flow-step7">
                    <div class="step-cell step-cell-1"><p>品牌顾问沟通<br>了解业务需求</p></div>
                    <div class="step-cell step-cell-2"><p>专业代理人分析<br>并评估成功概率</p></div>
                    <div class="step-cell step-cell-3"><p>外推网业务下单<br>并成功付款</p></div>
                    <div class="step-cell step-cell-4"><p>准备异议申请材料</p></div>
                    <div class="step-cell step-cell-5"><p>向商标局提交<br>异议申请</p></div>
                    <div class="step-cell step-cell-6"><p>官方审查</p></div>
                    <div class="step-cell step-cell-7"><p>官方下发裁决</p></div>
                </div>
            </div>
            <article class="vant-article">
                <section>
                    <div class="intention-title"><span>常见问题</span></div>
                    <div class="intention-sub-title">COMMON PROBLEMS</div>
                    <h4>Q：什么时候可以提出商标异议申请？</h4>
                    <p><strong>A：</strong>申请的商标进入初审公告期后，在公告期三个月内，相关权利人可以向
                    国家商标局提出商标异议申请。</p>
                    <h4>Q：商标异议申请的范围有哪几种？</h4>
                    <p><strong>A：</strong>目前，商标异议的内容主要有两种：一是初审公告的商标与已注册的商
                    标相同或近似；二是认为该初审公告的商标违反禁用条款。</p>
                    <h4>Q：申请人向官方提出商标异议申请除了基本申请材料以外，还需要提供的证据材料有哪些？</h4>
                    <p><strong>A：</strong>证据材料包括但不限于:企业或个人资质及荣誉方面材料；广告宣传资
                    料、宣传册或产品包装印刷合同及发票；合同、销售发票；参展服务合同及发票、展会照片等等。</p>
                    <h4>Q：商标异议申请审查的周期是多久？</h4>
                    <p><strong>A：</strong>自商标异议申请递交之日起，12个月左右可审查完毕，如有特殊情况将
                    有可能延长6个月的审查期。</p>
                    <h4>Q：商标权利人在商标被异议后多长时间之内答辩有效？</h4>
                    <p><strong>A：</strong>国家商标局收到商标异议申请书及有关证据材料后，将商标异议申请书
                    副本有邮寄给被异议人，被异议人应在收到商标异议申请书之日起三十天内作出书面答辩。被异议人在
                    限期内未作出答辩的视为弃权，不影响异议程序的正常进行。</p>
                    <h4>Q：如果对国家商标局的商标异议裁定不服，多久之内可以申请复审？</h4>
                    <p><strong>A：</strong>商标异议当事人中任何一方对商标异议裁定不服的，可在收到商标异议
                    裁定通知书日起十五天内，向商标评审委员会申请复审。</p>
                    <h4>Q：商标异议申请有什么用？</h4>
                    <p><strong>A：</strong>1、商标异议申请是防止自身商标被淡化、被弱化、被丑化以及被他人傍
                    名牌的重要途径。
                        2、商标异议申请是商标法赋予社会公众对即将授权商标表达自己主张的法定权利，当事人只有充
                        分行使，才能维护自身利益，在办理商标异议申请方面有很多成功案例。
                        3、商标异议申请是防止他人抢注商标、版权、字号等在先权利的重要途径。
                        4、商标异议是当事人阻止初审商标不能注册的最佳途径，可以阻止或延缓竞争者推出新产品。
                    </p>
                    <h4>Q：异议申请的办理途径有哪些？</h4>
                    <p><strong>A：</strong>向商标局提出商标异议申请有以下两条途径：1、委托国家认可的商标代
                    理机构办理；2、异议人自己办理。</p>
                </section>
            </article>

            <div class="ta-c pb20">
                <div class="customer-service">联系品牌客服 - 小智&nbsp;&nbsp;18767172019</div>
                <router-link class="home-link" to="/">
                    <img src="../../assets/images/intention-logo.png" />
                </router-link>
            </div>

        </div>

    </div>

</div>
</template>

<script>
// @ is an alias to /src
import IntentionMarquee from '../../components/IntentionMarquee.vue';
import { Valid } from '../../util/util';

export default {
  name: 'IntentionSbyy',
  components: {
    IntentionMarquee,
  },
  inject: ['reload'],
  // 这里data是一个函数，这是es6对象属性的间接表示法
  // 不使用return包裹的数据会在项目的全局可见，会造成变量污染；
  // 使用return包裹后数据中变量只在当前组件中生效，不会影响其他组件。
  data() {
    return {
      intention_type: 'mark',
      intention_product: '商标异议',
      intention_name: '',
      intention_phone: '',
      description: '',
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
    submitIntention() {
      const that = this;
      if (that.intention_name === '') {
        that.$toast('请输入您的联系姓名');
        return false;
      }
      if (that.intention_phone === '') {
        that.$toast('请输入您的手机号码');
        return false;
      }
      if (!Valid.isMobile(that.intention_phone)) {
        that.$toast('手机号码格式错误');
        return false;
      }
      that.$http
        .post('/api/submit_intentionAjax', that.$qs.stringify({
          intention_type: that.intention_type,
          intention_product: that.intention_product,
          intention_name: that.intention_name,
          intention_phone: that.intention_phone,
          description: that.description,
        }))
        .then(({ data }) => {
          if (data.state === 'success') {
            that.$toast({
              message: '提交成功',
              onClose: () => {
                that.reload();
              },
            });
          } else {
            that.$toast(data.msg);
          }
        });
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.intention-page{
    .intention-banner{
        position: relative;
        width: 100%;
        height: 3rem;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
        .price{
            position: absolute;
            left: .8rem;
            top: 2rem;
            font-size: 0;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            color: #fff;
            line-height: 30px;
            i{
                position: relative;
                bottom: -4px;
                font-size: 16px;
                margin-right: 2px;
                vertical-align: middle;
            }
            font{
                position: relative;
                font-size: 30px;
                margin-right: 2px;
                vertical-align: middle;
                .hot{
                    position: absolute;
                    top: -8px;
                    right: -16px;
                    width: 18px;
                    height: 18px;
                    background: url(../../assets/images/entry/entry_subject_fire.png) no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
    }
    .intention-summary{
        background-color: #fff;
        padding-bottom: 15px;
        .summary-box{
            padding: 10px 15px;
            border-bottom: 1px dashed #dae9ee;
            p{
                font-size: 13px;
                color: #666;
                line-height: 24px;
            }

        }
    }
    .intention-flow{
        background: url(../../assets/images/intention-flow-bg.png) #fff no-repeat;
        background-position: center center;
        padding: 50px 0 50px 0;
        .flow-step{
            position: relative;
            width: 100%;
            height: 1000px;
            overflow: hidden;
            background: url(../../assets/images/intention-flow.png) no-repeat;
            background-position: top center;
            .step-cell{
                position: absolute;
                display: table;
                width: 150px;
                height: 150px;
                background: url(../../assets/images/intention-flow-cell.png) no-repeat;
                background-position: center center;
                background-size: 100% 100%;
                p{
                    display: table-cell;
                    font-size: 16px;
                    color: #999;
                    text-align: center;
                    vertical-align: middle;
                    line-height: 24px;
                }
            }
            .step-cell-1{
                right: 50%;
                top: 36px;
                margin-right: 20px;
            }
            .step-cell-2{
                left: 50%;
                top: 170px;
                margin-left: 20px;
            }
            .step-cell-3{
                right: 50%;
                top: 292px;
                margin-right: 20px;
            }
            .step-cell-4{
                left: 50%;
                top: 426px;
                margin-left: 20px;
            }
            .step-cell-5{
                right: 50%;
                top: 549px;
                margin-right: 20px;
            }
            .step-cell-6{
                left: 50%;
                top: 681px;
                margin-left: 20px;
            }
            .step-cell-7{
                right: 50%;
                top: 804px;
                margin-right: 20px;
            }
        }
        .flow-step4{
            height: 612px;
        }
        .flow-step5{
            height: 745px;
        }
        .flow-step6{
            height: 868px;
        }
        .flow-step7{
            height: 1000px;
        }
    }
    .intention-title{
        font-size: 24px;
        height: 54px;
        line-height: 54px;
        text-align: center;
        span{
            display: inline-block;
            vertical-align: middle;
            margin: 0 10px;
        }
        &:before{
            content: '';
            display: inline-block;
            width: 100px;
            height: 54px;
            vertical-align: middle;
            background: url(../../assets/images/intention-title-before.png) no-repeat;
            background-position: center left;
        }
        &:after{
            content: '';
            display: inline-block;
            width: 100px;
            height: 54px;
            vertical-align: middle;
            background: url(../../assets/images/intention-title-after.png) no-repeat;
            background-position: center right;
        }
    }
    .intention-sub-title{
        font-size: 14px;
        font-family: 'Arial';
        color: #666;
        height: 18px;
        line-height: 18px;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 40px;
    }
    .intention-page__title{
        border-bottom: 1px solid #efefef;
        span{
            border-left: 5px solid @base-color;
            padding-left: 10px;
            font-size: 14px;
        }
    }
    .van-button-area{
        padding: 10px 16px;
    }
    .home-link{
        display: block;
        width: 50%;
        margin: 20px auto;
        img{
            display: block;
            width: 80%;
            margin: 0 auto;
        }
    }
    .customer-service{
        display: inline-block;
        height: 38px;
        line-height: 38px;
        padding: 0 25px;
        font-size: 14px;
        color: #13426b;
        background: #fafafa;
        .border-radius(2px);
    }
}
.vant-article{
    padding: 20px 15px;
    font-size: 16px;
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
