<template>
<div style="height: 100%;" class="bg-white">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>商标续展</h4>
            <router-link class="home-icon" to="/"></router-link>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <div class="intention-page">
            <div class="intention-banner">
                <img src="../../assets/images/intention-banner.png" width="100%"
                 alt="外推网商标续展服务" />
                <div class="price"><i>¥</i><font>1000</font><i>/件</i></div>
            </div>
            <intention-marquee>适用于注册商标有效期（十年）满前（在规定时效内）希望向商标局提交申请，
            以保有原商标的用户&nbsp;&nbsp;&nbsp;&nbsp;适用于注册商标有效期（十年）满前（在规定时效内）
            希望向商标局提交申请，以保有原商标的用户
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
                    <p>注册商标的有效期是10年，有效期满后需要继续使用的，应当在期满前12个月内申请续展注册；
                    在此期间未能提出申请的。到期未续展的商标，则会注销其注册商标。如果因权利人疏忽，导致商标
                    权无效后被他人合法抢注的话，之前所积累的所有品牌价值和市场投入都是为他人做嫁衣裳。 商标
                    局对商标续展注册申请审查后，核发商标续展证明，不再另发商标注册证，原商标注册证与商标续展
                    证明一起使用。 商标的知名度，在很大程度上依赖于广告宣传及商标使用年限，长久持有并运营一个
                    商标权价值更大，因此商标续展尤为重要。</p>
                </div>
            </div>
            <!-- 服务流程 -->
            <div class="intention-flow pt20">
                <div class="intention-title"><span>服务流程</span></div>
                <div class="intention-sub-title">SERVICE PROCESS</div>
                <div class="flow-step flow-step6">
                    <div class="step-cell step-cell-1"><p>品牌顾问沟通<br>了解业务需求</p></div>
                    <div class="step-cell step-cell-2"><p>外推网业务下单<br>并成功付款</p></div>
                    <div class="step-cell step-cell-3"><p>准备商标续展材料</p></div>
                    <div class="step-cell step-cell-4"><p>向商标局提交<br>续展申请</p></div>
                    <div class="step-cell step-cell-5"><p>官方审查</p></div>
                    <div class="step-cell step-cell-6"><p>官方核发续展证明</p></div>
                </div>
            </div>
            <article class="vant-article">
                <section>
                    <div class="intention-title"><span>常见问题</span></div>
                    <div class="intention-sub-title">COMMON PROBLEMS</div>
                    <h4>Q：为什么要及时办理商标续展？</h4>
                    <p><strong>A：</strong>商标注册在有效期满前，商标所有人应及时在商标注册机关办理续展
                    注册手续。不要使商标过期失效，失去商标专用权。</p>
                    <h4>Q：商标续展需要多长时间？</h4>
                    <p><strong>A：</strong>1、准备申请文件，向官方提交商标续展注册申请。2、商标局审查，
                    3~6个月会核发续展注册商标证明。</p>
                    <h4>Q：商标续展后的有效期是多久？</h4>
                    <p><strong>A：</strong>商标续展可以延长商标专用权10年，不限续展次数</p>
                    <h4>Q：未在有效期内及时商标续展，怎么办？</h4>
                    <p><strong>A：</strong>已注册的商标期满之日起6个月内希望仍继续保有该商标，可以办理
                    商标宽展申请，继续保有该商标。</p>
                    <h4>Q：办理商标续展申请，商标局会发受理通知书吗？</h4>
                    <p><strong>A：</strong>续展申请不下发受理通知书，下发的是《核准续展注册证明》，上面
                    会写明续展后的商标权有效的起始日和终止日。注意原商标注册证也要妥善保管，以便和续展证明一
                    起使用。</p>
                    <h4>Q：我的商标有效期快到了，我的企业也搬迁了，可否在商标续展时同时办理商标变更？</h4>
                    <p><strong>A：</strong>可以一并办理商标续展和商标变更</p>
                    <h4>Q：我的商标有效期快到了，我可以将商标售出吗？</h4>
                    <p><strong>A：</strong>可以售出，为了保证您在售出前一直持有商标专用权，建议您尽快办理
                    商标续展，也可以在做商标转让时一并办理商标续展。</p>
                    <h4>Q：我的商标证书丢了，商标有效期快到了，我能办理续展吗？</h4>
                    <p><strong>A：</strong>可以办理续展，也可以在办理续展时一并办理补发商标证。</p>
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
  name: 'IntentionSbxz',
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
      intention_product: '商标续展',
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
