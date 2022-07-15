<template>
<div><van-nav-bar
  title="城市列表"
  left-arrow
  class="heards"
  @click-left="onClickLeft"
/></div>
<div>
<van-index-bar>
  <van-index-anchor index="A" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="B" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  ...
</van-index-bar>
</div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.heards {
  background-color: #21b97a;
  /deep/.van-nav-bar__title {
    color: #fff;
  }
  /deep/.van-icon {
    color: #fff;
  }
}
</style>
