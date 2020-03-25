<template>
<div style="height: 100%;">

    <div class="header"></div>
    <div class="container" style="padding-bottom: 50px;">

        <template v-if="userinfo !== undefined">
        <div class="account-header">
            <a class="account-header-sign" :class="{'signed':userinfo.is_signed}">
                {{ userinfo.is_signed ? '挖矿中' : '挖矿' }}
            </a>
            <div class="account-header-info">
                <a class="account-header-figure">
                    <template v-if="userinfo.user_figure == ''">
                    <img src="../assets/images/user-figure.png" />
                    </template>
                    <template v-else>
                    <img :src="'https://m.waitui.com/' + userinfo.user_figure" />
                    </template>
                </a>
                <div class="account-header-name">
                    <h4><a>{{ userinfo.user_name }}</a></h4>
                    <p><a>点击查看或编辑个人信息</a></p>
                </div>
            </div>
            <div class="account-header-tab">
                <a>
                    <h4>{{ user_balance ? user_balance : '--' }}</h4>
                    <p>钱包</p>
                </a>
                <a>
                    <h4>{{ user_score ? user_score : '--' }}</h4>
                    <p>W币</p>
                </a>
                <a>
                    <h4>{{ unreadCount ? unreadCount : '--' }}</h4>
                    <p>未读</p>
                </a>
            </div>
        </div>

        <van-cell-group class="mt15">
            <van-cell title="我的订单" :value="orderCount" is-link />
            <van-cell title="我的域名" :value="domainCount" is-link />
            <van-cell title="我的商标" :value="markCount" is-link />
        </van-cell-group>

        <van-cell-group class="mt15">
            <van-cell is-link >
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                公司认证<span class="f14 col-gray9 ml15">(开发中)</span>
              </template>
              <template #default>
                <template v-if="company_certify != ''">
                    <template v-if="company_certify.status == 'failed'">
                    <span class="f14 col-warn">认证失败</span>
                    </template>
                    <template v-else-if="company_certify.status == 'wait'">
                    <span class="f14 col-gray9">认证中</span>
                    </template>
                    <template v-else><span class="f14 col-green">已认证</span></template>
                </template>
                <template v-else><span class="f14 col-warn">未认证</span></template>
              </template>
            </van-cell>
            <van-cell title="登录日志" is-link />
        </van-cell-group>

        <van-cell-group class="mt15">
            <van-cell title="关于我们" is-link to="/about" />
            <van-cell title="用户协议" is-link to="/agreement" />
        </van-cell-group>

        <van-button type="default" class="mt15" block
          style="color: #ea6f5a;"
          @click="logoutSuccess">退出登录</van-button>
        </template>


        <template v-else>
        <div class="account-header">
            <a class="account-header-sign" @click="changePopupLogin(true)">挖矿</a>
            <div class="account-header-info">
                <a class="account-header-figure" @click="changePopupLogin(true)">
                    <img src="../assets/images/user-figure.png" />
                </a>
                <div class="account-header-name">
                    <h4><a @click="changePopupLogin(true)">登录 / 注册</a></h4>
                    <p><a @click="changePopupLogin(true)">您的一站式品牌管家</a></p>
                </div>
            </div>
            <div class="account-header-tab">
                <a @click="changePopupLogin(true)">
                    <h4>--</h4>
                    <p>钱包</p>
                </a>
                <a @click="changePopupLogin(true)">
                    <h4>--</h4>
                    <p>W币</p>
                </a>
                <a @click="changePopupLogin(true)">
                    <h4>--</h4>
                    <p>未读</p>
                </a>
            </div>
        </div>

        <van-cell-group class="mt15">
            <van-cell title="我的订单" is-link
              @click="changePopupLogin(true)" />
            <van-cell title="我的域名" is-link
              @click="changePopupLogin(true)" />
            <van-cell title="我的商标" is-link
              @click="changePopupLogin(true)" />
        </van-cell-group>

        <van-cell-group class="mt15">
            <van-cell is-link @click="changePopupLogin(true)" >
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                公司认证<span class="f14 col-gray9 ml15">(开发中)</span>
              </template>
            </van-cell>
            <van-cell title="登录日志" is-link @click="changePopupLogin(true)" />
        </van-cell-group>

        <van-cell-group class="mt15">
            <van-cell title="关于我们" is-link to="/about" />
            <van-cell title="用户协议" is-link to="/agreement" />
        </van-cell-group>
        </template>

    </div>

    <tabbar path="my_console"></tabbar>
    <popup-login @loginSuccess="load_myConsole"></popup-login>
    <popup-register></popup-register>
    <popup-findpwd></popup-findpwd>

</div>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from 'vuex';
import Tabbar from '../components/Tabbar.vue';
import PopupLogin from '../components/PopupLogin.vue';
import PopupRegister from '../components/PopupRegister.vue';
import PopupFindpwd from '../components/PopupFindpwd.vue';

export default {
  name: 'MyConsole',
  components: {
    Tabbar,
    PopupLogin,
    PopupRegister,
    PopupFindpwd,
  },
  data() {
    return {
      user_balance: '',
      user_score: '',
      unreadCount: '',
      orderCount: '',
      domainCount: '',
      markCount: '',
      company_certify: '',
    };
  },
  computed: {
    userinfo: {
      get() {
        return this.$store.state.userinfo;
      },
      set() {},
    },
  },
  mounted() {
    const that = this;
    if (that.userinfo !== undefined) {
      that.load_myConsole();
    }
  },
  methods: {
    ...mapMutations([
      'logout',
      'changePopupLogin',
    ]),
    load_myConsole() {
      const that = this;
      that.$http
        .post('/api/get_myConsole', that.$qs.stringify({
          phone: that.userinfo.user_phone,
          token: that.userinfo.user_token,
        }))
        .then(({ data }) => {
          if (!data.state) {
            that.user_balance = data.userinfo.user_balance;
            that.user_score = data.userinfo.user_score;
            that.unreadCount = data.unreadCount;
            that.orderCount = data.orderCount;
            that.domainCount = data.domainCount;
            that.markCount = data.markCount;
            that.company_certify = data.company_certify;
          }
        });
    },
    logoutSuccess() {
      const that = this;
      that.logout();
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.account-header{
    position: relative;
    background-color: #fff;
    padding-bottom: 10px;
    &:after{
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #E5E5E5;
        color: #E5E5E5;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
}
.account-header-sign{
    position: absolute;
    top: 40px;
    right: 20px;
    font-size: 14px;
    color: #ffc200;
    line-height: 32px;
    padding-left: 28px;
    background: url(../assets/images/account-header-sign.png) no-repeat;
    background-size: 24px;
    background-position: 0 center;
    &.signed{
        right: 6px;
        color: #ccc;
        background-image: url(../assets/images/account-header-signed.png);
        &:after{
            display: none;
        }
    }
    &:after{
        content: "";
        position: absolute;
        right: -8px;
        top: 14px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #ffc200;
    }
}
.account-header-info{
    .display-flex;
    padding: 30px 30px 15px 30px;
    align-items: center;
    .account-header-figure{
        width: 68px;
        height: 68px;
        margin-right: 15px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .account-header-name{
        .flex-number;
        min-width: 0;
        h4{
            font-size: 18px;
            font-weight: 400;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a{
                color: #333;
            }
        }
        p{
            font-size: 14px;
            color: #999;
            line-height: 1.4;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a{
                color: #999;
            }
        }
    }
}
.account-header-tab{
    .display-flex;
    padding: 15px;
    justify-content: space-between;
    a{
        width: 2rem;
        text-align: center;
        color: #333;
        h4{
            font-size: 16px;
            font-weight: 400;
            color: #333;
        }
        p{
            font-size: 14px;
            color: #999;
            line-height: 1.4;
        }
    }
}
</style>
