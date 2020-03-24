<template>
<div style="height: 100%;">

    <div class="header"></div>
    <div class="container" style="padding-bottom: 50px;">

        <van-swipe class="entry-banner" :autoplay="3000"
        :stop-propagation="false" indicator-color="white">
            <van-swipe-item>
                <router-link to="/intention_domain">
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
                <router-link class="item" to="/intention_domain">
                    <span style="padding-right: 15px;">
                        <i class="user"></i>域名经纪
                    </span>
                </router-link>
                <router-link class="item mid" to="/intention_mark">
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

.home-copyright{
    padding: 10px 30px;
    font-size: 12px;
    color: #8d92a1;
    line-height: 20px;
    text-align: center;
}
</style>
