<template>
<div style="height: 100%;" class="bg-white">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>商标撤销</h4>
            <router-link class="home-icon" to="/"></router-link>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <div class="intention-page">
            <div class="intention-banner">
                <img src="../../assets/images/intention-banner.png" width="100%"
                 alt="外推网商标撤销服务" />
                <div class="price"><i>¥</i><font>2500</font><i>/件</i></div>
            </div>
            <intention-marquee>适用于因商标资源被恶意占用等原因，需要撤销他人商标（已注册满三年且长期
            不使用）的用户&nbsp;&nbsp;&nbsp;&nbsp;适用于因商标资源被恶意占用等原因，需要撤销他人商标
            （已注册满三年且长期不使用）的用户
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
                    <p>任何人可以以连续三年停止使用为由提出撤销他人的注册商标。国家商标局在收到撤销申请
                    后应当通知商标注册人，限商标注册人自收到通知之日起2个月内提交该商标的使用证据或者说
                    明不使用的正当理由。 对撤销连续三年不使用商标申请的答辩是指商标权利人在法定期限内向
                    商标局提供商标使用证据或者说明不使用的正当理由的行为。商标权利人在限定期限内未作出书
                    面答辩的，商标将被撤销注册。</p>
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
                    <div class="step-cell step-cell-4"><p>准备撤销申请材料</p></div>
                    <div class="step-cell step-cell-5"><p>向商标局提交<br>撤销申请</p></div>
                    <div class="step-cell step-cell-6"><p>官方审查</p></div>
                    <div class="step-cell step-cell-7"><p>官方下发裁决</p></div>
                </div>
            </div>
            <article class="vant-article">
                <section>
                    <div class="intention-title"><span>常见问题</span></div>
                    <div class="intention-sub-title">COMMON PROBLEMS</div>
                    <h4>Q：什么是撤销连续三年不使用注册商标？</h4>
                    <p><strong>A：</strong>如果已注册商标连续三年没有使用的话，任何人都可以向国家商标局提
                    出撤销连续三年不使用注册商标申请，国家商标局受理撤三申请后，会发信通知该商标权利人在法定期
                    限内提供能够证明被撤销商标的有效实际使用证据进行答辩，如果该商标权利人未能够在法定期限内提
                    供合法、有效、完整的注册商标使用证据并进行答辩，那么该注册商标将会被无效。</p>
                    <h4>Q：商标撤三申请的周期是多久？</h4>
                    <p><strong>A：</strong>自商标撤三申请递交之日起，9-12个月左右可审查完毕。</p>
                    <h4>Q：什么人可以向官方提出商标撤三申请？</h4>
                    <p><strong>A：</strong>注册商标连续三年不使用的情况下，任何人可以向商标局提出注册商标
                    连续三年不使用撤销申请。</p>
                    <h4>Q：自然人向官方提出商标撤三申请，是否需要提供个体户营业执照？</h4>
                    <p><strong>A：</strong>不需要。</p>
                    <h4>Q：提出商标撤三申请后需要怎么证明对方没有去用商标？</h4>
                    <p><strong>A：</strong>一般来讲，撤三申请人不需要证明，被撤三商标的权利人需要证明被撤
                    三商标进行了实际商业使用，包括但不限于:交易文件、广告材料、合同、发票等。</p>
                    <h4>Q：注册商标权利人收到撤销注册商标连续三年停止使用申请通知后如何答辩？</h4>
                    <p><strong>A：</strong>撤销注册商标连续三年停止使用答辩建议委托专业的商标代理机构进行
                    处理，因为举证证明注册商标合法使用的证据需要注册商标权利人提供并有效组织答辩材料。按照国家
                    商标局的要求，合法有效的组织使用证据证明商标的使用情况非常重要，只有有理有据的答辩文件结合
                    有效、完整的证据材料，才能有效保护权利人的注册商标，避免被撤销。</p>
                    <h4>Q：申请商标撤三对申请人有什么好处？</h4>
                    <p><strong>A：</strong>如果申请人提交的商标注册申请因为在先注册商标被驳回，或者申请人
                    在提交商标注册申请前发现有在先注册商标对自己商标的注册申请造成了阻碍，那么在符合撤三条件的
                    前提下，申请人可以向国家商标局针对该在先注册商标提起撤三申请，撤三成功后，可以为自己的商标
                    注册申请获得授权而扫清障碍。</p>
                    <h4>Q：撤销三年不使用中全部撤销申请和部分撤销申请有什么区别？</h4>
                    <p><strong>A：</strong>“撤销三年不使用”申请，既可以针对注册商标的全部核定使用商品，也
                    可以针对该商标的一项或者其中几项核定使用商品。如果“撤销三年不使用”是针对注册商标的其中一项
                    或者几个项目，那么注册人所举实际使用证据，必须针对该项或该几项商品进行证明，就其他商品项目
                    的举证是无效的。</p>
                    <h4>Q：商标权利人在撤三答辩时提供的证据材料需要满足什么要求？</h4>
                    <p><strong>A：</strong>商标的使用证据材料首先要符合以下要求：
                        第一、证据材料上要有被申请商标的标识。否则，不能证明被申请商标的使用情况。
                        第二、证据材料上要能够显示被申请撤三商标的使用者。
                        第三、证据材料必须能够证明该商标使用在被国家商标局核定使用的商品上。
                        第四、证据材料发生的时间必须是在从申请撤三之日起向前推算三年的时间段内。
                        第五、证据材料必须是原件或者经过公证的复印件。
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
  name: 'IntentionSbcx',
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
      intention_product: '商标撤销',
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
