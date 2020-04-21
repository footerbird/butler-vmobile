<template>
<div style="height: 100%;" class="bg-white">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>商标无效宣告</h4>
            <router-link class="home-icon" to="/"></router-link>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <div class="intention-page">
            <div class="intention-banner">
                <img src="../../assets/images/intention-banner.png" width="100%"
                 alt="外推网商标无效宣告服务" />
                <div class="price"><i>¥</i><font>3500</font><i>/件</i></div>
            </div>
            <intention-marquee>适用于他人已注册成功的商标侵犯自身在先权或违反《商标法》，希望宣告该商标无效
            的用户&nbsp;&nbsp;&nbsp;&nbsp;适用于他人已注册成功的商标侵犯自身在先权或违反《商标法》，希望宣
            告该商标无效的用户
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
                    <p>对核准注册的商标，自核准之日起五年内，在先权利人、利害关系人认为其侵犯了在先权利
                    或利益的，可以向商评委提出无效宣告。驰名商标不受五年的限制。 具体无效理由主要包括：
                    1. 侵犯了在先商标注册专用权； 2. 侵犯了驰名商标专用权； 3. 侵犯了在先商号权或在先
                    专利权或著作权； 4. 以不正当手段抢注他人在先使用并具有一定影响力的商标； 5. 属于未
                    经授权，以自己的名义将被代表人的商标申请注册； 6. 侵犯他人在先特殊标志权的。</p>
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
                    <div class="step-cell step-cell-4"><p>准备无效宣告材料</p></div>
                    <div class="step-cell step-cell-5"><p>向商标局提交<br>无效宣告申请</p></div>
                    <div class="step-cell step-cell-6"><p>官方审查</p></div>
                    <div class="step-cell step-cell-7"><p>官方下发裁决</p></div>
                </div>
            </div>
            <article class="vant-article">
                <section>
                    <div class="intention-title"><span>常见问题</span></div>
                    <div class="intention-sub-title">COMMON PROBLEMS</div>
                    <h4>Q：什么是商标无效宣告？</h4>
                    <p><strong>A：</strong>商标无效宣告是指商标在先权利人或者利害关系人认为已经注册的商标，
                    违反《商标法》相关规定，请求商标评审委员会撤销该注册商标的法律程序。</p>
                    <h4>Q：无效宣告只针对已经注册成功的商标吗？</h4>
                    <p><strong>A：</strong>无效宣告程序只针对已经注册成功的商标才能提起。</p>
                    <h4>Q：如何提升无效宣告的成功率？</h4>
                    <p><strong>A：</strong>商标无效宣告的成功率不仅取决于申请人提供的相关证据的效力，也依赖
                    于代理人的专业水平，，以及对方掌握的证据。而出具对方申请商标存在恶意的相关证据比较重要。</p>
                    <h4>Q：什么时候下可以提出注册商标无效宣告申请？</h4>
                    <p><strong>A：</strong>注册商标核准之日起五年内可以提出注册商标无效宣告申请，驰名商标不
                    受五年限制。</p>
                    <h4>Q：申请人向官方提出注册商标无效宣告申请除了基本的申请材料以外，还需要提供的证据材料有哪
                    些？</h4>
                    <p><strong>A：</strong>证据材料包括但不限于:企业或个人资质及荣誉方面材料；广告宣传资料、
                    宣传册或产品包装印刷合同及发票；合同、销售发票；参展服务合同及发票、展会照片等等。</p>
                    <h4>Q：注册商标无效宣告周期是多久？</h4>
                    <p><strong>A：</strong>自注册商标无效宣告申请递交之日起，12个月左右可审查完毕，如有特殊
                    情况延长6个月的审查期。</p>
                    <h4>Q：申请商标无效宣告的重要性有哪些？</h4>
                    <p><strong>A：</strong>1、商标无效宣告申请是防止已注册商标对自身商标造成淡化、弱化、丑化
                    的重要途径。
                        2、商标无效宣告能有效解决他人通过商标注册的形式损害权利人商标、版权、字号等在先权利。
                        3、商标无效宣告申请是商标法赋予社会公众对侵犯自身权益的已注册商标所能够采取的最佳法律措
                        施，当事人只有充分行使， 才能维护自身利益。
                    </p>
                    <h4>Q：商标无效宣告的理由有哪些？</h4>
                    <p><strong>A：</strong>商标无效宣告的绝对理由包括:已经注册的商标，如果不具备可视性、显著
                    性和合法性的，可以被宣告无效。另外，“以欺骗手段或者其他不正当手段取得注册”，也属于商标无效的
                    理由。
                        商标无效的相对理由包括:构成商标权相对无效的原因是商标权同在先取得的权利或其他合法权益相
                        冲突。主要包括:因与他人在先权利冲突而无效；因侵犯他人驰名商标权而无效；因抢注他人未注册
                        商标而无效；因违反代理或代表的规定而无效。
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
  name: 'IntentionWxxg',
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
      intention_product: '商标无效宣告',
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
