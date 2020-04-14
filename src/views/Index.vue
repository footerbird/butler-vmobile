<template>
<div style="height: 100%;">

    <div class="header"></div>
    <div class="container" style="padding-bottom: 50px;">

        <van-swipe class="entry-banner" :autoplay="3000"
        :stop-propagation="false" indicator-color="white">
            <van-swipe-item>
                <router-link to="/intention/domain">
                    <img src="../assets/images/ad/ad-domain-entrust.png" />
                </router-link>
            </van-swipe-item>
            <van-swipe-item>
                <router-link to="/domain_list">
                    <img src="../assets/images/ad/ad-domain-market.png" />
                </router-link>
            </van-swipe-item>
        </van-swipe>

        <!--专题版块-->
        <div class="entry-subject">
             <div class="entry-subject-grids">
                <router-link class="item" to="/intention/domain">
                    <span style="padding-right: 15px;">
                        <i class="user"></i>域名经纪
                    </span>
                </router-link>
                <router-link class="item mid" to="/intention/mark">
                    <span>
                        <i class="fire"></i>商标注册<i class="hot"></i>
                    </span>
                </router-link>
                <router-link class="item" to="/brand_list">
                    <span style="padding-left: 15px;">
                        <i class="crown"></i>品牌大全
                    </span>
                </router-link>
            </div>
            <div class="entry-subject-topic">
                <router-link class="company" to="/company_list">
                    <div class="title">企业名录</div>
                    <h2>一站式品牌管家</h2>
                    <h3>企业新时代名片</h3>
                </router-link>
                <div class="company-flex">
                    <router-link class="domain" to="/domain_list">
                        <div class="title">域名市场</div>
                        <h2>让网站更好记</h2>
                        <h3>品牌大数据，全网监控</h3>
                    </router-link>
                    <router-link class="mark" to="/mark_list">
                        <div class="title">商标市场</div>
                        <h2>好产品的出路</h2>
                        <h3>一站式商标解决方案</h3>
                    </router-link>
                </div>
            </div>
        </div>

        <!--全周期品牌服务 -->
        <div class="home-circle">
            <h3 class="title">全周期的品牌服务</h3>
            <ul class="circle-tab">
                <li :class="{'cur':home_circle === 1}">
                    <a @click="switchCircle(1)"><em>初创期</em></a>
                </li>
                <li :class="{'cur':home_circle === 2}">
                    <a @click="switchCircle(2)"><em>发展期</em></a>
                </li>
                <li :class="{'cur':home_circle === 3}">
                    <a @click="switchCircle(3)"><em>成长期</em></a>
                </li>
            </ul>
            <div class="circle-content">
                <div class="circle-item" v-show="home_circle === 1">
                    <div class="circle-service">
                        <router-link class="service-block" to="/intention/gszc">
                            <div class="service-block-title">
                                <em>公司注册</em>
                                <span><i>快速拿证</i></span>
                            </div>
                            <div class="service-block-text">我们提供免费的公司起名和公司核名服务，
                            最快三天拿到营业执照，顾问全程指导，省心省力，创业无门槛，轻松当老板。</div>
                        </router-link>
                        <router-link class="service-block" to="/intention/csjz">
                            <div class="service-block-title">
                                <em>财税记账</em>
                                <span><i>资深会计</i></span>
                            </div>
                            <div class="service-block-text">专业高效的一体化财税服务，以标准化、精细化、
                            规模化、建立市场体系；在改善用户体验方面不断革新优化，提升客户的服务需求。</div>
                        </router-link>
                        <router-link class="service-block" to="/intention/mark">
                            <div class="service-block-title">
                                <em>商标注册<i class="hot"></i></em>
                                <span><i>专家辅助申请</i></span>
                            </div>
                            <div class="service-block-text">商标注册存在驳回失败风险，外推网利用大数据分析
                            和先进搜索技术快速甄别类似商标注册信息及状态，帮助提高通过率。</div>
                        </router-link>
                        <router-link class="service-block" to="/intention/domain">
                            <div class="service-block-title">
                                <em>域名注册</em>
                                <span><i>全球资源</i></span>
                            </div>
                            <div class="service-block-text">提前抢占互联网入口，有丰富的域名种类供您选择。
                            提早注册品牌域名可以防止域名被恶意抢注，保护品牌资产安全。</div>
                        </router-link>
                    </div>
                </div>
                <div class="circle-item" v-show="home_circle === 2">
                    <div class="circle-service">
                        <router-link class="service-block" to="/intention/domain">
                            <div class="service-block-title">
                                <em>主流品牌域名获取</em>
                                <span><i>网络房地产</i></span>
                            </div>
                            <div class="service-block-text">评估、分析、谈判、收购，品牌域名全程策划。域名是
                            企业重要的无形资产，有利于树立良好的品牌形象。使推广事半功倍，省下巨额广告费用。</div>
                        </router-link>
                        <router-link class="service-block" to="/intention/mark">
                            <div class="service-block-title">
                                <em>相关品类商标获取</em>
                                <span><i>防止商标侵权</i></span>
                            </div>
                            <div class="service-block-text">商标急用等不了？选好了商标名字却被驳回？外推网
                            帮您购买心仪的商标，防止因商标使用不当构成侵权。</div>
                        </router-link>
                        <router-link class="service-block" to="/intention/gwjz">
                            <div class="service-block-title">
                                <em>官网建站与小程序开发</em>
                                <span><i>重要的获客渠道</i></span>
                            </div>
                            <div class="service-block-text">官网和小程序在线上的持续曝光，极大降低了企业的
                            获客成本，面向全球客户，可以全面、详细地介绍公司产品及公司服务。</div>
                        </router-link>
                        <router-link class="service-block" to="/intention/visj">
                            <div class="service-block-title">
                                <em>企业VI形象视觉设计</em>
                                <span><i>企业文化</i></span>
                            </div>
                            <div class="service-block-text">VI设计有助于企业带来视觉的宣传作用，提升品牌
                            辨识度，同时还能提高消费者对品牌的忠诚度，加强企业文化建设。</div>
                        </router-link>
                    </div>
                </div>
                <div class="circle-item" v-show="home_circle === 3">
                    <div class="circle-service">
                        <router-link class="service-block" to="/intention/ppzx">
                            <div class="service-block-title">
                                <em>品牌发展咨询</em>
                                <span><i>未雨绸缪</i></span>
                            </div>
                            <div class="service-block-text">帮助确立品牌定位、提前做好品牌战略规划和品牌
                            营销策划等，帮助企业建立强有力的品牌从而在市场上取得竞争优势。</div>
                        </router-link>
                        <router-link class="service-block" to="/intention/pptg">
                            <div class="service-block-title">
                                <em>品牌营销推广</em>
                                <span><i>产品落地</i></span>
                            </div>
                            <div class="service-block-text">自媒体推广、短视频推广、搜索引擎推广，通过对
                            品牌产品的曝光，可以挖掘潜在客户，让客户主动找上门，掌握主动权。</div>
                        </router-link>
                        <router-link class="service-block" to="/intention/ppwq">
                            <div class="service-block-title">
                                <em>品牌确权维权</em>
                                <span><i>打击竞争对手</i></span>
                            </div>
                            <div class="service-block-text">品牌意识的确定以及相关品牌的保护，让企业可以
                            在面对品牌危机的时候临危不乱，有效使用法律武器捍卫自己的权利。</div>
                        </router-link>
                        <router-link class="service-block" to="/intention/ppyy">
                            <div class="service-block-title">
                                <em>品牌代运营</em>
                                <span><i>优化企业资源</i></span>
                            </div>
                            <div class="service-block-text">代运营可以弥补企业人手短缺以及经验不足的缺点，
                            有效降低企业运营成本，减小品牌运营风险。</div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- 商标分类入口 -->
        <div class="home-marksort">
            <div class="text">截至2020年，商标国际分类共包括45类，<br>共包含一万多个商品和服务项目</div>
            <router-link to="/mark_sort" class="btn">商标分类</router-link>
        </div>

        <!--商标解决方案 -->
        <div class="home-solution">
            <h3 class="title">商标解决方案</h3>
            <div class="solution-content">
                <div class="solution-item">
                    <div class="solution-service">
                        <div class="service-block" :class="{'cur':home_solution === 1}">
                            <div class="service-block-title" @click="switchSolution(1)">
                                <em>商标购买</em>
                            </div>
                            <div class="service-block-text">适用于急用商标（商标注册时间长）等不及或者为了企业长远发展
                            需要全面保护品牌的用户</div>
                            <div class="service-block-price"><i>¥</i>5000起
                                <router-link to="/intention/mark">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 2}">
                            <div class="service-block-title" @click="switchSolution(2)">
                                <em>商标注册</em>
                            </div>
                            <div class="service-block-text">顾问1对1服务，通过大数据比对专业查询降低近似风险，提高注册
                            成功率，托管式服务省心省力</div>
                            <div class="service-block-price"><i>¥</i>600
                                <router-link to="/intention/mark">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 3}">
                            <div class="service-block-title" @click="switchSolution(3)">
                                <em>商标设计</em>
                            </div>
                            <div class="service-block-text">适用于需要通过注册图形或独一无二的文字商标来加强品牌辨识度，
                            从而扩大品牌影响力的用户</div>
                            <div class="service-block-price"><i>¥</i>1000
                                <router-link to="/intention/sbsj">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 4}">
                            <div class="service-block-title" @click="switchSolution(4)">
                                <em>商标驳回复审</em>
                            </div>
                            <div class="service-block-text">适用于商标实质审查未通过，（在规定时效内）希望向商标局提交
                            复审申请，再次争取的用户</div>
                            <div class="service-block-price"><i>¥</i>3500
                                <router-link to="/intention/bhfs">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 5}">
                            <div class="service-block-title" @click="switchSolution(5)">
                                <em>国际商标</em>
                            </div>
                            <div class="service-block-text">这里指的注册马德里国际商标。由于商标的地域性，适用于拓展海外
                            市场增强国际竞争力的用户</div>
                            <div class="service-block-price">议价
                                <router-link to="/intention/gjsb">了解更多</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="solution-item">
                    <div class="solution-service">
                        <div class="service-block" :class="{'cur':home_solution === 6}">
                            <div class="service-block-title" @click="switchSolution(6)">
                                <em>商标变更</em>
                            </div>
                            <div class="service-block-text">适用于需要变更自有商标的注册人名义、登记地址等注册事项
                            （代理人、文件接收人）的用户</div>
                            <div class="service-block-price"><i>¥</i>600
                                <router-link to="/intention/sbbg">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 7}">
                            <div class="service-block-title" @click="switchSolution(7)">
                                <em>商标转让</em>
                            </div>
                            <div class="service-block-text">适用于需要将自有商标转让（商标权属发生改变）的用户，需依照
                            商标法规定向商标局提交转让申请</div>
                            <div class="service-block-price"><i>¥</i>1200
                                <router-link to="/intention/sbzr">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 8}">
                            <div class="service-block-title" @click="switchSolution(8)">
                                <em>商标续展</em>
                            </div>
                            <div class="service-block-text">适用于注册商标有效期（十年）满前（在规定时效内）希望向商标局
                            提交申请，以保有原商标的用户</div>
                            <div class="service-block-price"><i>¥</i>1000
                                <router-link to="/intention/sbxz">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 9}">
                            <div class="service-block-title" @click="switchSolution(9)">
                                <em>商标许可备案</em>
                            </div>
                            <div class="service-block-text">适用于需要将自有商标授权许可他人使用的用户，需向商标局提交
                            许可申请并报送备案材料</div>
                            <div class="service-block-price"><i>¥</i>600
                                <router-link to="/intention/xkba">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 10}">
                            <div class="service-block-title" @click="switchSolution(10)">
                                <em>补注册证</em>
                            </div>
                            <div class="service-block-text">适用于《商标注册证》遗失或者破损，想要申请补发证书的
                            商标注册人</div>
                            <div class="service-block-price"><i>¥</i>1000
                                <router-link to="/intention/bzcz">了解更多</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="solution-item">
                    <div class="solution-service">
                        <div class="service-block" :class="{'cur':home_solution === 11}">
                            <div class="service-block-title" @click="switchSolution(11)">
                                <em>商标异议</em>
                            </div>
                            <div class="service-block-text">适用于被他人申请的商标侵权，希望在其商标公示期提出异议申请，
                            以阻止他人注册的用户</div>
                            <div class="service-block-price"><i>¥</i>3500
                                <router-link to="/intention/sbyy">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 12}">
                            <div class="service-block-title" @click="switchSolution(12)">
                                <em>商标撤销</em>
                            </div>
                            <div class="service-block-text">适用于因商标资源被恶意占用等原因，需要撤销他人商标（已注册
                            满三年且长期不使用）的用户</div>
                            <div class="service-block-price"><i>¥</i>2500
                                <router-link to="/intention/sbcx">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 13}">
                            <div class="service-block-title" @click="switchSolution(13)">
                                <em>商标无效宣告</em>
                            </div>
                            <div class="service-block-text">适用于他人已注册成功的商标侵犯自身在先权或违反《商标法》，
                            希望宣告该商标无效的用户</div>
                            <div class="service-block-price"><i>¥</i>3500
                                <router-link to="/intention/wxxg">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 14}">
                            <div class="service-block-title" @click="switchSolution(14)">
                                <em>异议答辩</em>
                            </div>
                            <div class="service-block-text">适用于商标注册公示期被他人提出异议，（在规定时效内）希望
                            提交答辩申请，以挽回注册的用户</div>
                            <div class="service-block-price"><i>¥</i>3500
                                <router-link to="/intention/yydb">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 15}">
                            <div class="service-block-title" @click="switchSolution(15)">
                                <em>撤销答辩</em>
                            </div>
                            <div class="service-block-text">适用于商标被他人申请撤销，（在规定时效内）向商标局提交
                            答辩申请，以保留商标的使用权的用户</div>
                            <div class="service-block-price"><i>¥</i>2500
                                <router-link to="/intention/cxdb">了解更多</router-link>
                            </div>
                        </div>
                        <div class="service-block" :class="{'cur':home_solution === 16}">
                            <div class="service-block-title" @click="switchSolution(16)">
                                <em>无效宣告答辩</em>
                            </div>
                            <div class="service-block-text">适用于注册商标被宣告无效后，（在规定时效内）向商标局
                            提交答辩，以维护自身商标权益的用户</div>
                            <div class="service-block-price"><i>¥</i>3500
                                <router-link to="/intention/wxdb">了解更多</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--精准的客户定位-->
        <div class="home-topic home-topic-target">
            <div class="intro-box">
                <h2>精准的定向能力</h2>
                <p>我们根据用户的地理位置、使用设备、活跃时间以及用户的操作习惯为您描绘出精确的用户画像，帮助您选择合适的品牌营销群体</p>
            </div>
            <div class="image-box">
                <img src="../assets/images/home-topic-target.png" />
            </div>
        </div>

        <!--多样的营销方式-->
        <div class="home-topic home-topic-types">
            <div class="intro-box">
                <h2 class="col-white">多样的营销方式</h2>
                <p class="col-white">我们提供首页开屏广告、翻页刷屏广告、品牌资讯报道、品牌活动发现频道以及品牌助力拼团等多种营销方式，
                帮助企业将信息推送给真正有兴趣的用户</p>
            </div>
            <div class="image-box">
                <img src="../assets/images/home-topic-types.png" />
            </div>
        </div>

        <!--专业的品牌管理-->
        <div class="home-topic home-topic-manage">
            <div class="intro-box">
                <h2>专业的品牌管理</h2>
                <p>我们拥有来自域名、商标、知识产权等行业的专业品牌保护团队，
                可以解决在品牌建设中会遇到的各种各样的问题，从而帮助企业树立良好的企业形象、打造品牌优势、发展品牌战略。</p>
            </div>
            <div class="image-box">
                <img src="../assets/images/home-topic-manage.png" />
            </div>
        </div>

        <div class="home-copyright">
            <p>Copyright © 2020 外推网 All Rights Reserved.</p>
            <p>浙ICP备19041362号-1</p>
        </div>

    </div>

    <tabbar path="index"></tabbar>

</div>
</template>

<script>
// @ is an alias to /src
import Tabbar from '../components/Tabbar.vue';

export default {
  name: 'Index',
  components: {
    Tabbar,
  },
  data() {
    return {
      home_circle: 1, // 品牌周期
      home_solution: 1, // 商标解决方案
    };
  },
  methods: {
    switchCircle(val) {
      const that = this;
      that.home_circle = val;
    },
    switchSolution(val) {
      const that = this;
      if (that.home_solution === val) {
        that.home_solution = 0;
      } else {
        that.home_solution = val;
      }
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.entry-banner{
    display: block;
    width: 100%;
    height: 3.6rem;
    background-color: #fff;
    .van-swipe-item{
        a{
            display: block;
            width: 100%;
            height: 100%;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
}

.entry-announcement{
    display: block;
    height: 56px;
    padding: 8px 15px 8px 60px;
    box-sizing: border-box;
    background: url(../assets/images/entry/entry_announcement.jpg) #fff no-repeat;
    background-size: 40px;
    background-position: 10px center;
    .swiper-container{
        width: 100%;
        height: 100%;
        .swiper-slide{
            a{
                font-size: 13px;
                color: #3d464d;
            }
            p{
                overflow: hidden;
                white-space: nowrap;
                line-height: 20px;
                font{
                    color: #ea6f5a;
                    padding-right: 10px;
                }
            }
        }
    }
}

.entry-subject{
    margin-top: 15px;
    background-color: #fff;
    padding: 0 15px;
    .entry-subject-grids{
        .display-flex;
        position: relative;
        .item{
            .flex-number;
            position: relative;
            line-height: 70px;
            text-align: center;
            font-family: PingFang SC Bold;
            font-size: 14px;
            font-weight: bold;
            color: #333;
            &.mid{
                .flex-number(1.1);
                &:before{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 50%;
                    width: 1px;
                    height: 30px;
                    background-color: #f1f1f1;
                    margin-top: -15px;
                    -webkit-transform-origin: center center;
                    transform-origin: center center;
                    -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5);
                }
                &:after{
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 50%;
                    width: 1px;
                    height: 30px;
                    background-color: #f1f1f1;
                    margin-top: -15px;
                    -webkit-transform-origin: center center;
                    transform-origin: center center;
                    -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5);
                }
            }
            i{
                &.user{
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    background: url(../assets/images/entry/entry_subject_user.png) no-repeat;
                    background-size: 100% 100%;
                    vertical-align: -4px;
                    margin-right: 8px;
                }
                &.fire{
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    background: url(../assets/images/entry/entry_subject_fire.png) no-repeat;
                    background-size: 100% 100%;
                    vertical-align: -4px;
                    margin-right: 8px;
                }
                &.crown{
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    background: url(../assets/images/entry/entry_subject_crown.png) no-repeat;
                    background-size: 100% 100%;
                    vertical-align: -4px;
                    margin-right: 8px;
                }
                &.hot{
                    position: absolute;
                    left: 48px;
                    top: 6px;
                    width: 32px;
                    height: 18px;
                    background: url(../assets/images/entry/entry_subject_hot.png) no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
        &:after{
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            border-bottom: 1px solid #f0f0f0;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
        }
    }
}

.home-circle{
    margin-top: 15px;
    background-color: #fff;
    .title{
        font-size: 24px;
        font-weight: 400;
        height: 92px;
        line-height: 92px;
        text-align: center;
    }
    .circle-tab{
        .after-cls;
        background-color: #f5f7fa;
        border-bottom: 1px solid #e5e5e5;
        li{
            float: left;
            width: 33.33%;
            a{
                display: block;
                position: relative;
                text-align: center;
                em{
                    display: block;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 58px;
                    &:hover{
                        color: #00a4ff;
                    }
                }
            }
            &.cur{
                a{
                    em{
                        color: #00a4ff;
                    }
                    &:before{
                        content: '';
                        position: absolute;
                        z-index: 2;
                        left: 50%;
                        bottom: -4px;
                        margin-left: -4px;
                        width: 8px;
                        height: 8px;
                        background-color: #fff;
                        border-top: 1px solid #00a4ff;
                        border-left: 1px solid #00a4ff;
                        -webkit-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                    &:after{
                        content: '';
                        position: absolute;
                        z-index: 1;
                        left: 0;
                        bottom: -1px;
                        width: 100%;
                        height: 1px;
                        background-color: #00a4ff;
                    }
                }
            }
        }
    }
    .circle-content{
        .circle-item{
            .circle-service{
                .service-block{
                    display: block;
                    width: 100%;
                    height: 140px;
                    padding: 20px 15px;
                    border-bottom: 1px solid #e5e8ed;
                    background-color: #fff;
                    box-shadow: 0 2px 4px rgba(3,27,78,.06);
                    .service-block-title{
                        position: relative;
                        height: 28px;
                        em{
                            position: relative;
                            font-size: 18px;
                            color: #000;
                            line-height: 28px;
                            .hot{
                                position: absolute;
                                top: -10px;
                                right: -18px;
                                width: 18px;
                                height: 18px;
                                background: url(../assets/images/entry/entry_subject_fire.png)
                                 no-repeat;
                                background-size: 100% 100%;
                            }
                        }
                        span{
                            position: absolute;
                            right: 0;
                            top: 3px;
                            i{
                                display: inline-block;
                                font-size: 12px;
                                color: #999;
                                text-align: center;
                                line-height: 20px;
                                padding: 0 8px;
                                border: 1px solid #e5e8ed;
                                background-color: #fff;
                            }
                        }
                    }
                    .service-block-text{
                        font-size: 13px;
                        color: #666;
                        line-height: 22px;
                        margin-top: 4px;
                    }
                    &:hover{
                        .transition-all;
                        box-shadow: 0 4px 8px rgba(3,27,78,.12);
                        .service-block-title{
                            em{
                                .transition-all;
                                color: #00a4ff;
                            }
                        }
                    }
                }
            }
        }
    }
}

.home-solution{
    margin-top: 15px;
    background-color: #fff;
    .title{
        font-size: 24px;
        font-weight: 400;
        height: 92px;
        line-height: 92px;
        text-align: center;
    }
    .solution-content{
        border-top: 1px solid #e5e8ed;
        background-color: #f5f7fa;
        .solution-item{
            .solution-service{
                .service-block{
                    display: block;
                    position: relative;
                    width: 100%;
                    border-bottom: 1px solid #e5e8ed;
                    .service-block-title{
                        position: relative;
                        height: 50px;
                        padding: 0 40px 0 15px;
                        background-color: #fff;
                        em{
                            font-size: 16px;
                            color: #000;
                            line-height: 50px;
                        }
                        &:after{
                            content: '';
                            position: absolute;
                            right: 13px;
                            top: 50%;
                            width: 18px;
                            height: 18px;
                            background: url(../assets/images/home-solution-arrow.png) no-repeat;
                            background-size: 36px 18px;
                            background-position: 0 0;
                            margin-top: -9px;
                        }
                    }
                    .service-block-text{
                        display: none;
                        font-size: 14px;
                        color: #666;
                        line-height: 24px;
                        padding: 25px 15px 0 15px;
                    }
                    .service-block-price{
                        display: none;
                        font-size: 16px;
                        color: #ff6600;
                        line-height: 32px;
                        padding: 0 15px 20px 15px;
                        i{
                            font-size: 14px;
                            margin-right: 2px;
                        }
                        a{
                            float: right;
                            position: relative;
                            font-size: 14px;
                            height: 32px;
                            line-height: 32px;
                            padding-right: 20px;
                            color: #00a4ff;
                            &:after{
                                content: '';
                                position: absolute;
                                right: 0;
                                top: 50%;
                                width: 10px;
                                height: 10px;
                                margin-top: -5px;
                                background: url(../assets/images/home-solution-price.png)
                                 no-repeat;
                                background-size: 100% 100%;
                            }
                        }
                    }
                    &:hover{
                        .transition-all;
                        box-shadow: 0 4px 8px rgba(3,27,78,.12);
                        .service-block-title{
                            em{
                                .transition-all;
                                color: #00a4ff;
                            }
                        }
                    }
                    &.cur{
                        box-shadow: 0 4px 8px rgba(3,27,78,.12);
                        .service-block-title{
                            em{
                                color: #00a4ff;
                            }
                            &:after{
                                background-position: -18px 0;
                            }
                        }
                        .service-block-text{
                            display: block;
                        }
                        .service-block-price{
                            display: block;
                        }
                    }
                }
            }
        }
    }
}

.entry-subject-topic{
    .display-flex;
    padding: 12px 0;
    .company{
        display: block;
        .flex-number;
        position: relative;
        padding-top: 22px;
        box-sizing: border-box;
        background: url(../assets/images/entry/entry_topic_brand.png) #fbfbfb no-repeat;
        background-position: right bottom;
        background-size: 100% auto;
        .title{
            position: absolute;
            top: 0;
            left: 10px;
            font-size: 10px;
            color: #fff;
            background-color: #ff8c65;
            height: 21px;
            line-height: 22px;
            padding: 0 6px;
        }
    }
    .company-flex{
        width: 54%;
        margin-left: 5px;
    }
    .domain{
        display: block;
        height: 70px;
        position: relative;
        margin-bottom: 5px;
        padding-top: 22px;
        box-sizing: border-box;
        background: url(../assets/images/entry/entry_topic_domain.png) #fbfbfb no-repeat;
        background-position: right center;
        background-size: auto 80%;
        .title{
            position: absolute;
            top: 0;
            left: 10px;
            font-size: 10px;
            color: #fff;
            background-color: #ffc557;
            height: 21px;
            line-height: 22px;
            padding: 0 6px;
        }
    }
    .mark{
        display: block;
        height: 70px;
        position: relative;
        padding-top: 22px;
        box-sizing: border-box;
        background: url(../assets/images/entry/entry_topic_mark.png) #fbfbfb no-repeat;
        background-position: right center;
        background-size: auto 100%;
        .title{
            position: absolute;
            top: 0;
            left: 10px;
            font-size: 10px;
            color: #fff;
            background-color: #4dacf0;
            height: 21px;
            line-height: 22px;
            padding: 0 6px;
        }
    }
    h2{
        font-family: PingFang SC Bold;
        font-size: 15px;
        font-weight: bold;
        color: #333;
        padding-left: 10px;
    }
    h3{
        font-family: PingFang SC;
        font-size: 11px;
        font-weight: normal;
        color: #999;
        padding-left: 10px;
    }
}
.home-topic{
    &.home-topic-target{
        background-color: #f0f3f6;
    }
    &.home-topic-types{
        background-color: #5f656c;
    }
    &.home-topic-manage{
        background-color: #f0f3f6;
    }
    .intro-box{
        padding: 10px 30px;
        h2{
            font-size: 20px;
            line-height: 56px;
            text-align: center;
        }
        p{
            font-size: 14px;
            line-height: 24px;
        }
    }
    .image-box{
        img{
            display: block;
            width: 100%;
        }
    }
}

.home-marksort{
    position: relative;
    width: 100%;
    padding: 36px 16px;
    background: url(../assets/images/service-block.jpg) #0076fe no-repeat;
    background-size: 100% auto;
    .text{
        font-size: 16px;
        color: #fff;
        line-height: 26px;
        text-align: center;
    }
    .btn{
        display: block;
        width: 136px;
        height: 40px;
        line-height: 38px;
        border: 1px solid rgba(255,255,255,.6);
        .border-radius(2px);
        font-size: 14px;
        color: #fff;
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
    }
}

.home-copyright{
    padding: 10px 30px;
    font-size: 12px;
    color: #8d92a1;
    line-height: 20px;
    text-align: center;
}
</style>
