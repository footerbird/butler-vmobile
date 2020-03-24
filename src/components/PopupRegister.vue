<template>
<van-popup v-model="popup" round position="bottom" :style="{ height: '100%' }">
    <div class="vant-popup__modal">
        <div class="toolbar">
            <div class="toolbar-inner">
                <h1 class="title">新用户注册</h1>
            </div>
        </div>
        <div class="modal-content">
            <div class="login-form">
                <van-cell-group>
                    <van-field v-model="phone_reg" type="tel" maxlength="11" clearable
                      class="login-input" placeholder="输入手机号" />
                    <van-field v-model="code_reg" clearable
                      class="login-input" placeholder="输入验证码"
                    >
                      <template #button>
                        <van-button size="small" type="default" :disabled="forbid_code_btn"
                          @click="sendCodeRegister"
                          class="f14" style="border: none;">{{ code_msg }}</van-button>
                      </template>
                    </van-field>
                    <van-field v-model="pwd_reg" type="password" clearable
                      class="login-input" placeholder="设置密码" />
                </van-cell-group>
                <van-button type="primary" color="#ea6f5a" class="f18"
                  :disabled="forbid_register_btn" block :loading="sending_register"
                  style="margin-top: 1.2rem;"
                  @click="funcRegister">注册</van-button>
            </div>
        </div>
        <div class="modal-footer">
            <van-button type="default" class="f16 col-gray6" block
              @click="changePopupRegister(false)">取消</van-button>
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
      phone_reg: '',
      code_reg: '',
      code_msg: '获取验证码',
      pwd_reg: '',
      sending_code: false, // 正在发送验证码
      sending_register: false, // 正在注册
    };
  },
  computed: {
    popup: {
      get() {
        return this.$store.state.popup_register;
      },
      set() {},
    },
    forbid_code_btn() {
      return !Valid.isMobile(this.phone_reg) || this.sending_code;
    },
    forbid_register_btn() {
      const that = this;
      if (Valid.isMobile(that.phone_reg) && Valid.isCode6(that.code_reg)
        && that.pwd_reg !== '' && !that.sending_register) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapMutations([
      'changePopupRegister',
    ]),
    checkPhoneRegister() {

    },
    sendCode() {

    },
    sendCodeRegister() {

    },
    funcRegister() {

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
        top: -.8rem;
        right: 0;
        font-size: 14px;
        color: #5195d5;
        line-height: 24px;
    }
}
</style>
