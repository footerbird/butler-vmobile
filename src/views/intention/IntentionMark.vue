<template>
<div style="height: 100%;" class="bg-white">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>外推网商标代理服务</h4>
            <router-link class="home-icon" to="/"></router-link>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <div class="intention-page">
            <div class="intention-banner">
                <img src="../../assets/images/intention-banner.png" width="100%"
                 alt="外推网商标代理服务" />
                <div class="price"><i>¥</i><font>600<em class="hot"></em></font><i>/件</i></div>
            </div>
            <intention-marquee>顾问1对1服务，通过大数据比对专业查询降低近似风险，提高注册成功率，
            托管式服务省心省力&nbsp;&nbsp;&nbsp;&nbsp;顾问1对1服务，通过大数据比对专业查询降低
            近似风险，提高注册成功率，托管式服务省心省力
            </intention-marquee>
            <van-cell-group>
                <div class="intention-page__title pt10 pb10"><span>为了更好的了解您的需求，请完善以下信息</span></div>
                <van-field v-model="intention_product" placeholder="您想注册/购买的商标" />
                <van-field v-model="intention_name" placeholder="联系姓名" />
                <van-field v-model="intention_phone" type="tel" placeholder="手机号码" />
                <van-field v-model="description" type="textarea" rows="2" autosize
                 maxlength="50" show-word-limit placeholder="请输入详细信息,例如预算" />
            </van-cell-group>

            <div class="van-button-area">
                <van-button type="primary" color="#ea6f5a" class="f18" block
                 @click="submitIntention">提交</van-button>
            </div>

            <!-- 业务介绍 -->
            <div class="intention-summary">
                <div class="summary-box">
                    <p style="text-indent: -6px;">【注释】</p>
                    <p>商标注册是商标使用人取得商标专用权的前提和条件，只有经核准注册的商标，才受法律保护。
                    商标注册原则是确定商标专用权的基本准则，不同的注册原则的选择，是各国立法者在这一个问题
                    中对法律的确定性和法律的公正性二者关系进行权衡的结果</p>
                </div>
            </div>
            <!-- 服务流程 -->
            <div class="intention-flow pt20">
                <div class="intention-title"><span>服务流程</span></div>
                <div class="intention-sub-title">SERVICE PROCESS</div>
                <div class="flow-step flow-step7">
                    <div class="step-cell step-cell-1"><p>专业代理人分析<br>商标注册成功率</p></div>
                    <div class="step-cell step-cell-2"><p>向商标局提交<br>商标注册申请</p></div>
                    <div class="step-cell step-cell-3"><p>形式审查</p></div>
                    <div class="step-cell step-cell-4"><p>下发商标申请<br>受理通知书</p></div>
                    <div class="step-cell step-cell-5"><p>实质审查</p></div>
                    <div class="step-cell step-cell-6"><p>商标公示期</p></div>
                    <div class="step-cell step-cell-7"><p>官方下发<br>商标注册证书</p></div>
                </div>
            </div>
            <article class="vant-article">
                <section>
                    <div class="intention-title"><span>常见问题</span></div>
                    <div class="intention-sub-title">COMMON PROBLEMS</div>
                    <h4>Q：注册商标多久能下来？</h4>
                    <p><strong>A：</strong>正常且顺利的流程如下：递交次日（非工作日延后）出申请号；3-5个月
                    左右受通，9-12个月左右初审公告或驳回；初审公告后3个月是异议期，这个期间无人异议，3个月后进
                    入注册公告，注册公告2个月后拿到商标注册证书。</p>
                    <h4>Q：商标注册证书有有效期吗？过期了怎么办？</h4>
                    <p><strong>A：</strong>商标有效期为10年，自注册之日起到期满前12个月内进行续展，每续展
                    一次为10年，如果想让商标持续有效，可以每10年续展一次；期满未续展的，宽展期为6个月。</p>
                    <h4>Q：商标注册产品是如何进行分类的？</h4>
                    <p><strong>A：</strong>根据世界知识产权组织《商标注册用商品和服务国际分类》的规定，商标
                    划分为45个类别。其中，1-34类为商品商标，35-45类为服务商标。
                        商品商标：是指商品的生产者或经营者为了将自己的商品与他人的商品相区别而使用的标记。
                        服务商标：指服务的提供者为了将自己提供的服务与他人提供的服务相区别而使用的标记。其中有
                        些商品和服务项目是否类似，还要结合商品的功能、用途、交易方式和具体的服务行业、服务实施
                        场所、服务的对象等实际情况进行判断。
                    </p>
                    <h4>Q：自己的商品注册商标有什么好处？</h4>
                    <p><strong>A：</strong>1、商标具有独占性。使用商标的目的就是为了区别与他人的商品或服务，
                    便于消费者识别。
                        2、注册商标所有人对其商标具有专用权、受到法律的保护，未经商标权所有人的许可，任何人不得
                        擅自使用与该注册商标相同或相类似的商标，否则将承担相应的法律责任。
                        3、商标是一种无形资产。商标所有人通过商标的创意、设计、申请注册、广告宣传及使用，使商标
                        具有了价值，也增加了商品的附加值，使商标在有偿转让时价格更高。
                        4、商标是商品信息的载体，是参与市场竞争的工具。生产经营者的竞争就是商品或服务质量与信誉
                        的竞争，其表现形式就是商标知名度的竞争，商标的知名度越高，其商品或服务的竞争力就越强。
                    </p>
                    <h4>Q：商标注册能不能有100％的成功率？</h4>
                    <p><strong>A：</strong>商标注册永远没有100％的成功率，任何人都不能保证一定能够核准注册，
                    这时由商标注册中的其客观事实决定的。其次商标有查询的盲区，申请信息还未录入商标数据库的商标，
                    根本无法查询到，这也就意味着商标不排除有近似的风险。</p>
                    <h4>Q：我的商标被抢注了怎么办？</h4>
                    <p><strong>A：</strong>商标被抢注了，可以搜集您的在先使用证据，对抢注您的商标提出异议或
                    争议，详细可以联系代理人具体咨询。</p>
                    <h4>Q：我想注册的商标在不同类别中已被注册了多个商标，如果我不注册商标，我的APP用这个名字可
                    以吗？</h4>
                    <p><strong>A：</strong>主要看是否有在先注册商标，如果您的使用范围落入了在先注册商标的保
                    护范围，对方就有可能告您侵权。即便没有在先注册商标与你想注册的商标发生冲突的情况，我们也建议
                    你尽早申请，以免在您推广以后，被他人恶意抢注。</p>
                    <h4>Q：如果我注册了一个文字的商标，以后使用的时候可以变换一下字体吗？</h4>
                    <p><strong>A：</strong>注册成功的商标，在使用过程中可以加注®；但若是您改变了注册商标的字
                    体或加了一些图形、颜色等就不可以在使用商标的时候加注®，因为加注®代表该商标为注册商标。但您仍
                    可以放心使用，因为他人是不能在相同类别上注册与您相同的文字商标，这样也就不会产生您侵权的可能
                    性；当然如何您为了更好的保护自己的权益，您有权利将变更的商标再次向商标局提交注册申请，以获得
                    可以标注®的注册商标。</p>
                    <h4>Q：如果我注册了一个图形的商标，后期在使用中图形的配色发生变化还受保护吗？</h4>
                    <p><strong>A：</strong>如果您准备申请的商标图形的显著性较高，可以进行黑白商标申请。如果
                    显著性不够需要通过彩色来提高显著性的情况下，在以后的使用过程中如果改变申请时的配色，就不能标
                    注®（只有注册商标在使用过程中才可以标注®）；但请您放心使用，虽然您改变了配色不能标注®，这也
                    不影响您的使用，且他人也不能申请和您相同图形的商标。</p>
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
  name: 'IntentionMark',
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
      intention_product: '',
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
      if (that.intention_product === '') {
        that.$toast('请输入商标名称');
        return false;
      }
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
