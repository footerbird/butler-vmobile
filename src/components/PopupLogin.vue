<template>
<van-popup v-model="popup" round position="bottom" :style="{ height: '100%' }">
    <div class="vant-popup__modal">
        <div class="toolbar">
            <div class="toolbar-inner">
                <template v-if="login_type == 'pwd_login'">
                <h1 class="title">密码登录</h1>
                </template>
                <template v-else>
                <h1 class="title">短信登录</h1>
                </template>
            </div>
        </div>
        <div class="modal-content">
            <div class="login-form">
                <van-cell-group>
                    <van-field v-model="phone_num" type="tel" maxlength="11" clearable
                      class="login-input" placeholder="输入手机号" />
                    <!-- 下面的显示隐藏必须用v-show,不能用v-if，不然field输入框插值无效 -->
                    <van-field v-show="login_type == 'pwd_login'"
                      v-model="pwd_num" type="password" clearable
                      class="login-input" placeholder="输入密码" />
                    <van-field v-show="login_type == 'sms_login'"
                      v-model="code_num" clearable
                      class="login-input" placeholder="输入验证码"
                    >
                      <template #button>
                        <van-button size="small" type="default" :disabled="forbid_code_btn"
                          @click="sendCodeLogin"
                          class="f14" style="border: none;">{{ code_msg }}</van-button>
                      </template>
                    </van-field>
                </van-cell-group>
                <div style="position: relative; padding-top: 1.2rem;">
                    <a class="login-forget-pwd"
                      @click="changePopupFindpwd(true)">忘记密码？</a>
                    <van-button type="primary" color="#ea6f5a" class="f18"
                      :disabled="forbid_login_btn" block :loading="sending_login"
                      @click="funcLogin">登录</van-button>
                </div>
                <div class="login-link-box">
                    <template v-if="login_type == 'pwd_login'">
                    <a class="login-link" @click="switchLoginType">短信登录</a>
                    </template>
                    <template v-else>
                    <a class="login-link" @click="switchLoginType">密码登录</a>
                    </template>
                    <a class="login-link"
                      @click="changePopupRegister(true)">注册</a>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <van-button type="default" class="f16 col-gray6" block
              @click="changePopupLogin(false)">取消</van-button>
        </div>
    </div>
</van-popup>
</template>

<script>
import { mapMutations } from 'vuex';
import { Valid } from '../util/util';

export default {
  name: 'PopupLogin',
  data() {
    return {
      login_type: 'pwd_login', // 默认密码登录
      phone_num: '',
      code_num: '',
      code_msg: '获取验证码',
      pwd_num: '',
      sending_code: false, // 正在发送验证码
      sending_login: false, // 正在登录
    };
  },
  computed: {
    popup: {
      get() {
        return this.$store.state.popup_login;
      },
      set() {},
    },
    forbid_code_btn() {
      return !Valid.isMobile(this.phone_num) || this.sending_code;
    },
    forbid_login_btn() {
      const that = this;
      if (that.login_type === 'pwd_login') { // 密码登录
        if (Valid.isMobile(that.phone_num) && that.pwd_num !== '' && !that.sending_login) {
          return false;
        }
        return true;
      } // 短信登录
      if (Valid.isMobile(that.phone_num) && Valid.isCode6(that.code_num) && !that.sending_login) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapMutations([
      'login',
      'changePopupLogin',
      'changePopupRegister',
      'changePopupFindpwd',
    ]),
    switchLoginType() {
      const that = this;
      if (that.login_type === 'pwd_login') {
        that.login_type = 'sms_login';
      } else {
        that.login_type = 'pwd_login';
      }
    },
    checkPhoneRegister(regCall, unregCall) {
      const that = this;
      that.$http
        .post('/api/check_phoneRegisterAjax', that.$qs.stringify({
          phone: that.phone_num,
        }))
        .then(({ data }) => {
          if (data.state === 'reg') {
            regCall();
          } else {
            unregCall();
          }
        });
    },
    time(seconds) {
      const that = this;
      seconds -= 1;
      if (seconds < 0) {
        that.sending_code = false;
        that.code_msg = '获取验证码';
        return false;
      }
      that.code_msg = `发送成功(${seconds})`;
      setTimeout(() => {
        that.time(seconds);
      }, 1000);
    },
    sendCode(seconds) {
      const that = this;
      if (that.forbid_code_btn) return false;
      that.$http
        .post('/api/send_smsCodeAjax', that.$qs.stringify({
          phone: that.phone_num,
        }))
        .then(({ data }) => {
          if (data.state === 'success') {
            that.sending_code = true;
            that.time(seconds);
          } else {
            that.$toast(data.msg);
          }
        });
    },
    sendCodeLogin() {
      const that = this;
      that.checkPhoneRegister(() => {
        that.sendCode(60);
      }, () => {
        that.$toast('手机号未注册');
      });
    },
    funcLogin() {
      const that = this;
      if (that.forbid_login_btn) return false;
      that.sending_login = true;
      that.$http
        .post('/api/send_phoneLoginAjax', that.$qs.stringify({
          login_type: that.login_type,
          phone_num: that.phone_num,
          pwd_num: that.pwd_num,
          code_num: that.code_num,
          ip_address: '',
          city_address: '',
        }))
        .then(({ data }) => {
          that.sending_login = false;
          if (data.state === 'success') {
            that.$toast(data.msg);
            that.login(data.userinfo);
            that.$emit('loginSuccess');
            setTimeout(() => {
              that.changePopupLogin(false);
            }, 2000);
          } else {
            that.$toast(data.msg);
          }
        });
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.vant-popup__modal{
    width: 100%;
    height: 100%;
    background-color: #fff;
    .toolbar{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: 1;
        font-size: 18px;
        background-color: #fff;
        .toolbar-inner{
            .display-flex;
            height: 44px;
            text-align: center;
            .title{
                position: absolute;
                display: block;
                width: 100%;
                padding: 0;
                font-size: 18px;
                font-weight: normal;
                line-height: 44px;
                color: #333;
                text-align: center;
                white-space: nowrap;
            }
        }
    }
    .modal-content{
        height: 100%;
        padding-top: 44px;
        overflow: auto;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
    }
    .modal-footer{
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
    }
}

.login-form{
    margin-top: 1.2rem;
    padding: 0 30px;
    .login-input{
        font-size: 16px;
        line-height: 1.1rem;
        padding: 0;
        &:after{
            left: 0;
        }
    }
    .login-link-box{
        margin-top: .6rem;
        .display-flex;
        justify-content: space-between;
        .login-link{
            font-size: 14px;
            color: #5195d5;
            line-height: 24px;
        }
    }
    .login-forget-pwd{
        position: absolute;
        top: .4rem;
        right: 0;
        font-size: 14px;
        color: #5195d5;
        line-height: 24px;
    }
}
</style>
