<template>
<div style="height: 100%;" class="bg-white">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>国际商标</h4>
            <router-link class="home-icon" to="/"></router-link>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <div class="intention-page">
            <div class="intention-banner">
                <img src="../../assets/images/intention-banner.png" width="100%"
                 alt="外推网国际商标服务" />
                <div class="price"></div>
            </div>
            <intention-marquee>这里指的注册马德里国际商标。由于商标的地域性，适用于拓展海外市场增强
            国际竞争力的用户&nbsp;&nbsp;&nbsp;&nbsp;这里指的注册马德里国际商标。由于商标的地域性，
            适用于拓展海外市场增强国际竞争力的用户
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
                    <p>申请人向海外申请注册商标主要有两种途径：一种是逐一国家/地区注册，即分别向各国/地区
                    商标主管机关申请注册；另一种是马德里国际商标注册，即根据《商标国际注册马德里协定》或
                    《商标国际注册马德里协定有关协议书》的规定，在马德里联盟成员间所进行的商标注册。我们所
                    说的商标国际注册，指的就是马德里国际商标注册。</p>
                </div>
            </div>
            <!-- 服务流程 -->
            <div class="intention-flow pt20">
                <div class="intention-title"><span>服务流程</span></div>
                <div class="intention-sub-title">SERVICE PROCESS</div>
                <div class="flow-step flow-step7">
                    <div class="step-cell step-cell-1"><p>品牌顾问沟通<br>了解业务需求</p></div>
                    <div class="step-cell step-cell-2"><p>对指定的缔约方<br>进行可注册性分析</p></div>
                    <div class="step-cell step-cell-3"><p>外推网业务下单<br>并成功付款</p></div>
                    <div class="step-cell step-cell-4"><p>准备申请材料</p></div>
                    <div class="step-cell step-cell-5"><p>向商标局国际处<br>提交注册申请</p></div>
                    <div class="step-cell step-cell-6"><p>官方审查</p></div>
                    <div class="step-cell step-cell-7"><p>决定驳回或<br>获得注册保护</p></div>
                </div>
            </div>
            <article class="vant-article">
                <section>
                    <div class="intention-title"><span>常见问题</span></div>
                    <div class="intention-sub-title">COMMON PROBLEMS</div>
                    <h4>Q：马德里商标注册和单一国家商标注册的区别</h4>
                    <p><strong>A：</strong>单一国家注册只在单个国家受到保护，马德里商标在马德里成员国内都可以
                    受到保护。</p>
                    <h4>Q：注册马德里商标与直接在单一国家注册的哪个合算</h4>
                    <p><strong>A：</strong>马德里商标注册是根据《商标国际注册马德里协定》这一国际间的协定进行
                    注册保护。申请人可以通过一次注册，在选取并且注册成功的成员国全部受到保护。缺点是各个国家文字
                    不同，海关稽查起来比较困难，商标受保护的力度就比较弱，所以更适宜战略性覆盖保护。 单一国家注册
                    由于申请人是把商标递交给申请国当地商标局去直接申请，保护力度当然是最强的。假如需要注册国家比
                    较少，并且都是商标重要出口地的话，单一国家注册是比较好的选择。</p>
                    <h4>Q：马德里商标注册的流程是什么？</h4>
                    <p><strong>A：</strong>1、准备申请书件；2、向商标局国际注册处提交申请书件；3、国际处进行
                    形式审查；4、提交国际局进行形式审查；5、国际局可颁发商标国际注册证明；6、指定国审查；7、指定
                    各国核准保护。</p>
                    <h4>Q：马德里商标注册和欧盟商标注册的区别是什么？</h4>
                    <p><strong>A：</strong>1)马德里注册需要基础申请，欧盟注册不需要;
                        2)在时间方面，顺利的情况下，通过马德里指定欧盟注册比直接通过欧盟申请注册完成所需的时间长。
                        马德里注册指定欧盟的申请前期需要经过层层转交才能到达各欧盟成员国。
                        3)在注册证书方面，通过马德里指定欧盟注册成功后，国际局不会颁发相应的注册证书;而通过欧盟
                        直接注册完成后欧盟内部市场协调局将核发注册证作为商标的权利凭证。
                        4)在费用方面，通过马德里指定欧盟的费用要比直接通过欧盟申请的费用低。
                    </p>
                    <h4>Q：马德里商标注册的申请人需要什么资格？</h4>
                    <p><strong>A：</strong>申请人必须具有一定的主体资格。申请人应在我国设有真实有效的工商营业
                    场所；或在我国境内有住所；或拥有我国国籍。另外，台湾省的法人或自然人均可通过商标局提出国际注册
                    申请。而香港和澳门特别行政区的法人或自然人目前还不能通过商标局提出国际注册申请。</p>
                    <h4>Q：马德里商标注册需要多久？</h4>
                    <p><strong>A：</strong>1.国际局如果在商标局收到国际注册申请之日起，两个月之内收到商标局递
                    交的商标注册申请，商标局的收文日期便是国际局的收文日期，也就是该商标的国际注册日;如国际局在两
                    个月之后收到该申请，国际局则将实际收到该申请的日期作为国际注册日;
                        2.国际局通知各指定国家的日期为审查起算时间，马德里纯协定书国与既是协定又是议定书国的审查
                        时间为自通知日起12个月;马德里纯议定书国审查时间为自通知日起18个月。以上审查期限仅指各国
                        的审查周期，个别国家在审查周期完毕后会进行异议公告，第三方仍然有可能提出异议;
                    </p>
                    <h4>Q：马德里商标的保护期限是多少？</h4>
                    <p><strong>A：</strong>分两种情况:
                        (1)从国际局收到后期指定文件并通过形式审查的日期视为后期指定日期，保护期从各指定成员国核准
                        保护日起算(个别成员国按照后期指定日期起算)至国际注册有效期届满日。即保护期限短于10年;
                        (2)申请人在后期指定时在提交文件中选择该后期指定的生效日期从原国际注册日有效期届满日生效
                        ，则保护期从各指定成员国核准保护日(个别成员国按照原国际注册有效期届满日起算)至下一个有效
                        期届满日。
                    </p>
                    <h4>Q：马德里协定在外国获得注册商标与原属国商标注册是什么关系?</h4>
                    <p><strong>A：</strong>商标国际注册获准5年之内，国际注册与国内注册存在依存关系。
                        如果商标国内注册的部份或全部权利不再受到法律保护，则该商标国际注册所产生的权利也将部分或
                        全部不再享有。在此期间，如果商标在本国的注册被撤梢，则该商标在其它各指定国的注册也将随之
                        撤销，只有在国际注册满5年之后，商标在本国的注册与其它指定国的注册才是独立的.即国际注册满
                        5年后，商标所有人所属国对商标的任何判决，才不对国际注册产生影响。需要指出的是，商标所有人
                        所属国对商标注册的撤销并不能自动导致该商标国际注册的撤梢，只有应商标所有人所属国商标主管
                        机关的请求，国际局才会撤钠它。
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
  name: 'IntentionGjsb',
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
      intention_product: '国际商标',
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
