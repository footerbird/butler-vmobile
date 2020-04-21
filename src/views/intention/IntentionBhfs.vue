<template>
<div style="height: 100%;" class="bg-white">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>商标驳回复审</h4>
            <router-link class="home-icon" to="/"></router-link>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <div class="intention-page">
            <div class="intention-banner">
                <img src="../../assets/images/intention-banner.png" width="100%"
                 alt="外推网商标驳回复审服务" />
                <div class="price"><i>¥</i><font>3500</font><i>/件</i></div>
            </div>
            <intention-marquee>适用于商标实质审查未通过，（在规定时效内）希望向商标局提交复审申请，
            再次争取的用户&nbsp;&nbsp;&nbsp;&nbsp;适用于商标实质审查未通过，（在规定时效内）希望
            向商标局提交复审申请，再次争取的用户
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
                    <p>商标局在对商标进行实质审查时存在主观性，因此，申请注册的商标只要没有违反《商标法》的
                    禁令条款，都可以申请商标驳回复审。商标驳回复审申请递交后，商标评审委员会会根据注册申请人
                    提交的书面材料、使用证据等情况依法做出是否核准注册的决定。 目前从商标驳回复审案件判决结果
                    整体情况来看，通过商标驳回复审取得商标权利的申请人数量不在少数，成功率较高。 在驳回复审阶
                    段，如果可以提供以下证据，则可以极大提升复审成功率： 商标构思及使用情况（主要突出知名度）、
                    企业简介、企业所获得的各项荣誉、企业最近三年销售、广告费用及相关财务情况、以及企业媒体
                    报道或图片。</p>
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
                    <div class="step-cell step-cell-4"><p>准备复审申请材料</p></div>
                    <div class="step-cell step-cell-5"><p>向商标局提交<br>复审申请</p></div>
                    <div class="step-cell step-cell-6"><p>官方审查</p></div>
                    <div class="step-cell step-cell-7"><p>官方下发裁决</p></div>
                </div>
            </div>
            <article class="vant-article">
                <section>
                    <div class="intention-title"><span>常见问题</span></div>
                    <div class="intention-sub-title">COMMON PROBLEMS</div>
                    <h4>Q：什么情况下需要申请商标驳回复审？</h4>
                    <p><strong>A：</strong>当收到商标局下发的驳回通知书时，您对驳回理由不服，十五日之内可以
                    向国家商标评审委员会提起驳回复审程序。</p>
                    <h4>Q：商标驳回复审需要多少时间?</h4>
                    <p><strong>A：</strong>商标申请人在收到驳回通知书之日起15天内可以向国家商标评审委员会提
                    起驳回复审申请，商评委会在9个月内发出复审的裁决决定</p>
                    <h4>Q：商标复审不成功怎么办?</h4>
                    <p><strong>A：</strong>如果针对国家商评委下发的商标复审决定不服，可以向知识产权法院提起
                    行政诉讼启动司法程序；如果是由于引证在先注册商标而被驳回，也可以重新提交注册申请，同时针对引
                    证的在先注册商标提起撤三、无效宣告等手段扫清注册障碍。</p>
                    <h4>Q：为什么商标被驳回了，还能通过申请复审获得成功？</h4>
                    <p><strong>A：</strong>驳回复审之所以可能会成功，是因为商标驳回是国家商标局作出的审查决
                    定，但是商标驳回复审申请是向商评委提出的，商标局与商评委的审查标准有所不同，表现在:
                        商标局审查完全是根据递交的材料，不会考虑商标的实际使用情况；而如果提驳回复审的理由中有涉
                        及商标实际使用情况的，商评委会考虑。对商标是否近似的判断，商标局与商评委的标准也略有不同
                        :商标局基本是按照审查标准来审核，而商评委考虑的会比较全面。商标审查存在一定的主观性，不
                        同审查员得出的结果可能有所不同。鉴于商标审查的存在一定的主观性，申请商标驳回复审是有可能
                        获得商标成功注册的。当然，需要针对个案分析以制定保护策略。
                    </p>
                    <h4>Q：商标为什么会被驳回?</h4>
                    <p><strong>A：</strong>在注册的过程中，经过商标局实质审核后，认为有不能通过的理由，就会
                    驳回，如:与在先申请过的商标近似或相同，或者商标中存在通用词等。</p>
                    <h4>Q：收到商标驳回通知书后应该做什么?</h4>
                    <p><strong>A：</strong>企业注册申请的商标被驳回时会收到商标局发出的《商标驳回通知书》或
                    《商标部分驳回通知书》后，我们的建议是:
                        1、将《商标驳回通知书》或《商标部分驳回通知书》复印一份，并且保管好原件，也要保管好用来
                        邮寄通知书的信封。如果是直接到商标局领取的，就没有信封，保管好通知书原件即可。
                        2、根据信封上的邮戳或者是通知书背面左下角打印的收到时间计算出复审的截止日期，需要做驳回
                        复审的一定要在截止日期之前提交驳回复审申请。
                    </p>
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
  name: 'IntentionBhfs',
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
      intention_product: '商标驳回复审',
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
