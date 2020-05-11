<template>
<div style="height: 100%;">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>基本资料</h4>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <template v-if="page_loading">
        <div class="loading-box">
            <van-loading size="24px" vertical>加载中...</van-loading>
        </div>
        </template>
        <template v-else>
        <van-cell-group class="mt15">
            <van-cell class="van-cell-figure" title="头像" is-link >
              <template #default>
                <template v-if="account.user_figure != ''">
                    <img class="userinfo-figure"
                    :src="`https://m.waitui.com/${account.user_figure}`" >
                </template>
                <template v-else>
                    <img class="userinfo-figure" src="../assets/images/user-figure.png" />
                </template>
              </template>
            </van-cell>
            <van-cell title="昵称" :value="account.user_name" is-link />
            <van-cell title="真实姓名" :value="account.real_name" is-link />
            <van-cell title="手机号码" :value="account.user_phone" is-link />
            <van-cell title="QQ号码" :value="account.user_qq" is-link />
            <van-cell title="电子邮箱" :value="account.user_email" is-link />
            <van-cell title="微信号" :value="account.user_wechat" is-link />
        </van-cell-group>
        </template>

    </div>

</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'MyAccount',
  data() {
    return {
      page_loading: true,
      account: {
        user_figure: '',
        user_name: '',
        real_name: '',
        user_phone: '',
        user_qq: '',
        user_email: '',
        user_wechat: '',
      },
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
    that.load_myAccount();
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    },
    load_myAccount() {
      const that = this;
      that.$http
        .post('/api/get_myAccount', that.$qs.stringify({
          phone: that.userinfo.user_phone,
          token: that.userinfo.user_token,
        }))
        .then(({ data }) => {
          if (!data.state) {
            that.account = data.userinfo;
            that.page_loading = false;
          }
        });
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.van-cell-figure{
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    .van-cell__value{
        .flex-number(none);
    }
}
.userinfo-figure{
    width: 48px;
    height: 48px;
    border-radius: 50%;
}
</style>
