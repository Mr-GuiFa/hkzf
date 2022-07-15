<template>
  <div>
    <!-- 头部搜索 -->
<van-nav-bar class="heards" left-arrow>
  <template #right>
    <van-icon name="map-marked" />
  </template>
  <template #title>
    <van-search v-model="value" placeholder="请输入搜索关键词">
    <template #label>
      <span @click="goCityList">北京<span style="color:#ccc">▼|</span></span>
    </template>
    </van-search>
  </template>
</van-nav-bar>
<!-- 下拉 -->
<div>
  <van-dropdown-menu>
  <van-dropdown-item @click="isSho=true" title="区域">
  <van-picker show-toolbar title="标题" :columns="columns" /></van-dropdown-item>
  <van-dropdown-item @click="isSho!=isSho"  title="方式" />
  <van-dropdown-item  title="租金" />
  <van-dropdown-item @click="isSho=true"  title="筛选">
  <van-picker show-toolbar title="标题" :columns="columns" /></van-dropdown-item>
  <div class="fanzi" v-if="isSho" ></div>
</van-dropdown-menu>
</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isSho: false,
      zuojt: '<',
      value: '',
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ]
    }
  },

  methods: {
    goCityList () {}
  }
}
</script>

<style lang="less" scoped>
.heards{
  background-color: #21b97a;
.van-icon-map-marked:before {
    content: '\e6de';
    color: #fff;
}
/deep/.van-icon-arrow-left:before {
    content: '\e668';
    color: #fff;
}
.van-search{
  padding: 2px 0px
}
}
.fanzi{
  position: absolute;
  z-index: 999999999999;
  width: 100%;
  height: 350px;
  background-color: red;
}
</style>
