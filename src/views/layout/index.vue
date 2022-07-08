<template>
<div class="hezi">
    <div>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item name="list" icon="search" to="/home/list">找房</van-tabbar-item>
        <van-tabbar-item name="news" icon="friends-o" to="/home/news">资讯</van-tabbar-item>
        <van-tabbar-item name="profile" icon="setting-o" to="/home/profile">我的</van-tabbar-item>
</van-tabbar>
<router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style>
.hezi{
  padding:0 0 150px 0;
}
</style>
