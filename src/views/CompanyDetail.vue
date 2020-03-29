<template>
<div style="height: 100%;">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>{{ company.name }}</h4>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">

        <template v-if="page_loading">
        <div class="loading-box">
            <van-loading size="24px" vertical>加载中...</van-loading>
        </div>
        </template>
        <template v-else>
        <div class="company-detail">

            <div class="info-top">
                <h4>{{ company.name }}
                    <em class="tag-status ml5">在业</em>
                    <template v-if="company.certify_status != ''
                    && company.certify_status == 'success'">
                    <em class="tag-certify ml5">认证</em>
                    </template>
                </h4>
                <table width="100%">
                    <tbody>
                        <tr>
                            <td width="50%" class="col-base">
                                <i class="ico-legal"></i>{{ company.oper_name }}
                            </td>
                            <td width="50%">
                                <i class="ico-capital"></i>{{ company.regist_capi }}
                            </td>
                        </tr>
                        <tr>
                            <td width="50%">
                                <i class="ico-tel"></i>
                                <template v-if="company.contact_phone == ''">暂无</template>
                                <template v-else>{{ company.contact_phone }}</template>
                            </td>
                            <td width="50%">
                                <i class="ico-email"></i>
                                <template v-if="company.contact_email == ''">暂无</template>
                                <template v-else>{{ company.contact_email }}</template>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <i class="ico-address"></i>
                                <template v-if="company.contact_address == ''">暂无</template>
                                <template v-else>{{ company.contact_address }}</template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="info-list">
                <h4>工商信息</h4>
                <dl class="pt10"><dt>实缴资本</dt><dd>{{ company.real_capi }}</dd></dl>
                <dl><dt>经营状态</dt><dd>{{ company.status }}</dd></dl>
                <dl><dt>成立日期</dt><dd>{{ company.start_date | date_format }}</dd></dl>
                <dl><dt>社会信用代码</dt><dd>{{ company.credit_code }}</dd></dl>
                <dl><dt>纳税人识别号</dt><dd>{{ company.tax_no }}</dd></dl>
                <dl><dt>注册号</dt><dd>{{ company.no }}</dd></dl>
                <dl><dt>组织机构代码</dt><dd>{{ company.org_no }}</dd></dl>
                <dl><dt>公司类型</dt><dd>{{ company.econ_kind }}</dd></dl>
                <dl><dt>所属行业</dt><dd>{{ company.industry }}</dd></dl>
                <dl><dt>核准日期</dt><dd>{{ company.check_date | date_format }}</dd></dl>
                <dl><dt>登记机关</dt><dd>{{ company.belong_org }}</dd></dl>
                <dl><dt>所属地区</dt><dd>{{ company.province }}</dd></dl>
                <dl><dt>英文名</dt><dd>{{ company.en_name }}</dd></dl>
                <dl><dt>曾用名</dt><dd>{{ company.original_name }}</dd></dl>
                <dl><dt>参保人数</dt><dd>{{ company.insured_person }}</dd></dl>
                <dl><dt>人员规模</dt><dd>{{ company.staff_size }}</dd></dl>
                <dl><dt>营业期限</dt><dd>{{ company.business_term }}</dd></dl>
                <dl><dt>企业地址</dt><dd>{{ company.address }}</dd></dl>
                <dl><dt>经营范围</dt><dd>&nbsp;</dd></dl>
                <dl class="pb10"><dd class="ml0 pl0">{{ company.scope }}</dd></dl>
            </div>

        </div>

        <template v-if="brand_list.length != 0">
        <div class="brand-list mt10">
            <template v-for="(brand, index) in brand_list">
            <router-link class="brand-item"
            :to="'/brand_detail/' + brand.brand_id" :key="index" >
                <div class="brand-item__bd">
                    <h4 class="brand-item__title">{{ brand.brand_name }}
                    <span class="fl-r f13 col-gray9 mt5">{{ brand.industry_name }}</span></h4>
                    <p class="brand-item__desc">{{ brand.brand_lead }}</p>
                </div>
                <div class="brand-item__hd">
                    <img class="brand-item__thumb"
                    :src="'https://m.waitui.com/' + brand.thumb_path"
                    :alt="brand.brand_name + '怎么样'" >
                </div>
            </router-link>
            </template>
        </div>
        </template>

        <div class="f14 col-gray9 lh20 mt10 bg-white" style="padding: 15px;">
          本页详细列出关于{{ company.name }}的工商信息，
          含公司法定代表人、注册资本、经营状态、成立日期、纳税人识别号、
          公司类型、所属行业、所属地区、曾用名、参保人数、人员规模、
          营业期限、企业地址、经营范围等信息。</div>
        </template>

    </div>

</div>
</template>

<script>
const moment = require('moment');

export default {
  name: 'CompanyDetail',
  filters: {
    date_format(value) {
      return moment(value).format('YYYY-MM-DD');
    },
  },
  data() {
    return {
      page_loading: true,
      company: {
        name: '',
        oper_name: '',
        regist_capi: '',
        real_capi: '',
        status: '',
        start_date: '',
        credit_code: '',
        tax_no: '',
        no: '',
        org_no: '',
        econ_kind: '',
        industry: '',
        check_date: '',
        belong_org: '',
        province: '',
        en_name: '',
        original_name: '',
        insured_person: '',
        staff_size: '',
        business_term: '',
        address: '',
        scope: '',
        contact_phone: '',
        contact_email: '',
        contact_address: '',
        certify_status: '',
      },
      brand_list: [],
    };
  },
  mounted() {
    const that = this;
    that.load_companyDetail();
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    },
    load_companyDetail() {
      const that = this;
      that.$http
        .post('/api/get_companyDetail', that.$qs.stringify({
          company_id: that.$route.params.company_id,
        }))
        .then(({ data }) => {
          that.company = data.company;
          that.brand_list = data.brand_list;
          that.page_loading = false;
        });
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.company-detail{
    .info-top{
        margin-top: 10px;
        background-color: #fff;
        padding: 15px;
        h4{
            font-size: 18px;
            height: 28px;
            line-height: 28px;
            margin-bottom: 10px;
            .ellip;
            .tag-status{
                display: inline-block;
                height: 20px;
                line-height: 18px;
                font-size: 12px;
                color: #5182bb;
                border: 1px solid #5182bb;
                text-align: center;
                padding: 0 6px;
                .border-radius(2px);
                vertical-align: text-top;
            }
            .tag-certify{
                display: inline-block;
                height: 20px;
                line-height: 18px;
                font-size: 12px;
                color: #06c594;
                border: 1px solid #06c594;
                text-align: center;
                padding: 0 6px;
                .border-radius(2px);
                vertical-align: text-top;
            }
        }
        table{
            td{
                font-size: 13px;
                line-height: 24px;
                .ellip;
                .ico-tel{
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    .company-ico-tel;
                    background-size: 100% 100%;
                    vertical-align: middle;
                    margin-right: 5px;
                }
                .ico-email{
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    .company-ico-email;
                    background-size: 100% 100%;
                    vertical-align: middle;
                    margin-right: 5px;
                }
                .ico-address{
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    .company-ico-address;
                    background-size: 100% 100%;
                    vertical-align: middle;
                    margin-right: 5px;
                }
                .ico-legal{
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    .company-ico-legal;
                    background-size: 100% 100%;
                    vertical-align: middle;
                    margin-right: 5px;
                }
                .ico-capital{
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    .company-ico-capital;
                    background-size: 100% 100%;
                    vertical-align: middle;
                    margin-right: 5px;
                }
            }
        }
    }
    .info-list{
        margin-top: 10px;
        background-color: #fff;
        padding: 0 15px;
        h4{
            font-size: 16px;
            font-weight: normal;
            height: 48px;
            line-height: 50px;
            border-bottom: 1px solid #e5e5e5;
        }
        dl{
            .after-cls;
            dt{
                float: left;
                width: 1.6rem;
                font-size: 13px;
                color: #999;
                line-height: 24px;
                padding: 3px 0;
            }
            dd{
                margin-left: 1.6rem;
                font-size: 14px;
                color: #333;
                line-height: 24px;
                padding: 3px 10px;
            }
        }
    }
}

.brand-list{
    background-color: #fff;
    .brand-item{
        .display-flex;
        color: #000;
        padding: 15px;
        position: relative;
        .brand-item__bd{
            .flex-number;
            .brand-item__title{
                font-weight: 400;
                font-size: 17px;
                .ellip;
                margin-bottom: .1rem;
            }
            .brand-item__desc{
                color: #999;
                font-size: 13px;
                line-height: 1.2;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
        }
        .brand-item__hd{
            width: 1.8rem;
            height: 1.2rem;
            line-height: 1.2rem;
            margin-left: .8em;
            margin-right: 0;
            .brand-item__thumb{
                width: 100%;
                height: 100%;
                border: 1px solid #e5e5e5;
                border-radius: 4px;
                vertical-align: top;
            }
        }
    }
}
</style>
