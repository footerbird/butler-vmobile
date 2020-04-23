<template>
<div style="height: 100%;">

    <div class="header">
        <div class="header-container">
            <a @click="goBack" class="back-icon"></a>
            <h4>第{{ category.category_id | format_marksort_cnchar }}类
                &nbsp;&nbsp;{{ category.category_name }}</h4>
        </div>
    </div>
    <div class="container" style="padding-top: 45px;">
        <template v-if="page_loading">
        <div class="loading-box">
            <van-loading size="24px" vertical>加载中...</van-loading>
        </div>
        </template>
        <template v-else>
        <div class="sort-detail">
            <div class="info-table">
                <div class="table-left">
                    <div class="item-box">
                        <template v-for="(group, index) in category.groups">
                        <a class="item"
                         :class="{'cur':group_code === group.category_code}"
                         @click="toggleLeftMenu(group.category_code)" :key="index" >
                        【{{ group.category_code }}】
                        </a>
                        </template>
                    </div>
                </div>
                <template v-if="items.length === 0">
                <div class="loading-box">
                    <van-loading size="24px" vertical>加载中...</van-loading>
                </div>
                </template>
                <template v-else>
                <div class="table-right">
                    <div class="item-box">
                        <template v-for="(group, index) in category.groups">
                        <div class="item-title" v-if="group_code === group.category_code"
                         :key="index + 'title'" >
                        {{ group.category_name }}
                        </div>
                        </template>
                        <template v-for="(item, index) in items">
                        <a class="item" v-if="item.category_code === ''" :key="index" >
                            <div class="item-wrap">{{ item.category_code }}&nbsp;&nbsp;
                            {{ item.category_name }}</div>
                        </a>
                        <a class="item" v-else :key="index" >
                            <div class="item-wrap">{{ item.category_name }}</div>
                        </a>
                        </template>
                    </div>
                </div>
                </template>
            </div>
        </div>
        </template>

    </div>

</div>
</template>

<script>
export default {
  name: 'MarkSortItem',
  filters: {
    format_marksort_cnchar(num) {
      const cnchar = [
        '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
        '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
        '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十',
        '三十一', '三十二', '三十三', '三十四', '三十五', '三十六', '三十七', '三十八', '三十九', '四十',
        '四十一', '四十二', '四十三', '四十四', '四十五',
      ];
      return cnchar[num - 1];
    },
  },
  data() {
    return {
      page_loading: true,
      category: {
        category_id: '',
        category_name: '',
        groups: [],
      },
      group_code: '',
      items: [],
    };
  },
  mounted() {
    const that = this;
    that.load_markSortItem();
  },
  watch: {
    $route(to, from) { // 监听路由是否变化
      if (to.params.code !== from.params.code) {
        this.load_markSortItem(); // 重新加载数据
      }
    },
  },
  methods: {
    goBack() {
      this.$router.push(`/sort_group/${this.category.category_code}`);
    },
    toggleLeftMenu(code) {
      const that = this;
      that.group_code = code;
      that.$router.push(`/sort_item/${code}`);
    },
    load_markSortItem() {
      const that = this;
      that.items = [];
      that.$http
        .post('/api/get_markSortItem', that.$qs.stringify({
          code: that.$route.params.code,
        }))
        .then(({ data }) => {
          that.category = data.category;
          that.group_code = data.group_code;
          that.category.groups.map((group) => {
            if (that.group_code === group.category_code) {
              that.items = group.items;
            }
            return true;
          });
          that.page_loading = false;
        });
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.sort-detail{
    width: 100%;
    height: 100%;
    background-color: #fff;
    .info-table{
        height: 100%;
        .after-cls;
        .table-left{
            float: left;
            width: 1.8rem;
            height: 100%;
            overflow: auto;
            .item-box{
                width: 100%;
                min-height: 100%;
                background-color: #f6f6f8;
                border-right: 1px solid #e5e5e5;
                .item{
                    display: block;
                    position: relative;
                    font-size: 13px;
                    color: #333;
                    text-align: center;
                    line-height: 20px;
                    padding: 15px 0;
                    background-color: #f6f6f8;
                    border-bottom: 1px solid #e5e5e5;
                    &.cur{
                        color: #00c1de;
                        background-color: #fff;
                        &:after{
                            content: '';
                            position: absolute;
                            top: 0;
                            right: -1px;
                            width: 1px;
                            height: 100%;
                            background-color: #fff;
                        }
                    }
                }
            }
        }
        .table-right{
            float: right;
            width: 5.7rem;
            height: 100%;
            overflow: auto;
            padding: 15px 10px;
            .summary-box{
                border: 1px solid #00c1de;
                .border-radius(4px);
                .summary-title{
                    font-size: 14px;
                    font-weight: bold;
                    color: #333;
                    text-align: center;
                    line-height: 20px;
                    padding: 10px 15px;
                }
                .summary{
                    position: relative;
                    display: block;
                    font-size: 12px;
                    color: #666;
                    line-height: 20px;
                    padding: 10px 15px;
                    &:before{
                        content: '';
                        position: absolute;
                        left: 15px;
                        top: 0;
                        right: 15px;
                        height: 1px;
                        border-top: 1px solid #e5e5e5;
                        -webkit-transform: scaleY(0.5);
                        transform: scaleY(0.5);
                    }
                }
            }
            .item-box{
                border: 1px solid #ababab;
                .border-radius(4px);
                .item-title{
                    font-size: 14px;
                    font-weight: bold;
                    color: #333;
                    text-align: center;
                    line-height: 20px;
                    padding: 10px 15px;
                }
                .item{
                    position: relative;
                    display: block;
                    font-size: 12px;
                    color: #666;
                    line-height: 20px;
                    padding: 10px 25px 10px 15px;
                    .item-wrap{
                        max-height: 40px;
                        overflow: hidden;
                    }
                    &:before{
                        content: '';
                        position: absolute;
                        left: 15px;
                        top: 0;
                        right: 15px;
                        height: 1px;
                        border-top: 1px solid #e5e5e5;
                        -webkit-transform: scaleY(0.5);
                        transform: scaleY(0.5);
                    }
                    &.item-group{
                        text-indent: -5px;
                        &:after{
                        content: '';
                        position: absolute;
                        right: 15px;
                        top: 50%;
                        width: 10px;
                        height: 10px;
                        margin-top: -5px;
                        background: url(../assets/images/mark-sort-arrow.png) no-repeat;
                        background-size: 100% 100%;
                    }
                    }
                }
            }
        }
    }
}
</style>
