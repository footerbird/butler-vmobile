<template>
<div class="intention-marquee">
    <h3 ref="summary_marquee"><slot></slot></h3>
</div>
</template>

<script>
export default {
  name: 'IntentionMarquee',
  mounted() {
    const that = this;
    that.showMarqueeLeft(25);
  },
  methods: {
    showMarqueeLeft(time) {
      const that = this;
      const wait = time || 25;
      const scroll = that.$refs.summary_marquee;
      setInterval(() => {
        if (Math.abs(scroll.scrollWidth - scroll.clientWidth - scroll.scrollLeft) < 1) {
          scroll.scrollLeft = 1;
        }
        scroll.scrollLeft += 1;
      }, wait);
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.intention-marquee{
    position: relative;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    background-color: #f6f9fb;
    h3{
        font-size: 14px;
        font-weight: normal;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
    }
}
</style>
