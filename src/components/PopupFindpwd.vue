<template>
<van-popup v-model="popup" round position="bottom" :style="{ height: '100%' }">
    <div class="vant-popup__modal">
        <div class="toolbar">
            <div class="toolbar-inner">
                <h1 class="title">找回密码</h1>
            </div>
        </div>
        <div class="modal-content">
            <div class="login-form">
                <van-cell-group>
                    <van-field v-model="phone_find" type="tel" maxlength="11" clearable
                      class="login-input" placeholder="输入手机号" />
                    <van-field v-model="code_find" clearable
                      class="login-input" placeholder="输入验证码"
                    >
                      <template #button>
                        <van-button size="small" type="default" :disabled="forbid_code_btn"
                          @click="sendCodeFindpwd"
                          class="f14" style="border: none;">{{ code_msg }}</van-button>
                      </template>
                    </van-field>
                    <van-field v-model="pwd_find" type="password" clearable
                      class="login-input" placeholder="重设密码" />
                </van-cell-group>
                <div style="position: relative; padding-top: 1.2rem;">
                    <van-button type="primary" color="#ea6f5a" class="f18"
                      :disabled="forbid_findpwd_btn" block :loading="sending_findpwd"
                      @click="funcFindpwd">完成</van-button>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <van-button type="default" class="f16 col-gray6" block
              @click="changePopupFindpwd(false)">取消</van-button>
        </div>
    </div>
</van-popup>
</template>

<script>
import { mapMutations } from 'vuex';
import { Valid } from '../util/util';

export default {
  name: 'PopupRegister',
  data() {
    return {
      phone_find: '',
      code_find: '',
      code_msg: '获取验证码',
      pwd_find: '',
      sending_code: false, // 正在发送验证码
      sending_findpwd: false, // 正在重设
    };
  },
  computed: {
    popup: {
      get() {
        return this.$store.state.popup_findpwd;
      },
      set() {},
    },
    forbid_code_btn() {
      return !Valid.isMobile(this.phone_find) || this.sending_code;
    },
    forbid_findpwd_btn() {
      const that = this;
      if (Valid.isMobile(that.phone_find) && Valid.isCode6(that.code_find)
        && that.pwd_find !== '' && !that.sending_findpwd) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapMutations([
      'changePopupFindpwd',
    ]),
    checkPhoneRegister(regCall, unregCall) {
      const that = this;
      that.$http
        .post('/api/check_phoneRegisterAjax', that.$qs.stringify({
          phone: that.phone_find,
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
          phone: that.phone_find,
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
    sendCodeFindpwd() {
      const that = this;
      that.checkPhoneRegister(() => {
        that.sendCode(60);
      }, () => {
        that.$toast('手机号未注册');
      });
    },
    funcFindpwd() {
      const that = this;
      if (that.forbid_findpwd_btn) return false;
      that.sending_findpwd = true;
      that.$http
        .post('/api/send_phoneFindpwdAjax', that.$qs.stringify({
          phone_find: that.phone_find,
          pwd_find: that.pwd_find,
          code_find: that.code_find,
        }))
        .then(({ data }) => {
          that.sending_findpwd = false;
          if (data.state === 'success') {
            that.$toast(data.msg);
            setTimeout(() => {
              that.changePopupFindpwd(false);
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
