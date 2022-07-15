<template>
  <div><van-nav-bar
  title="收藏列表"
  left-arrow
  class="heards"
  @click-left="myList"
/>
<div>
<van-card
v-for="(item,index) in Favor"
:key="index"
  :desc="item.desc"
  :title="item.title"
  :thumb="'http://liufusong.top:8080'+item.houseImg"
><template #tags>
    <van-tag  color="#e1f5f8" text-color="#39becd">近地铁</van-tag>
    <br>
    <span style="color:red"><b class="jc">{{item.price}}</b>元/月</span>
  </template>
  </van-card>
</div>
</div>
</template>

<script>
// import { request } from '@/utils/request'
import { getFavorites } from '@/api/mymesage'
export default {
  data () {
    return {
      Favor: {}
    }
  },
  created () {
    this.getFavorites()
  },
  methods: {
    async getFavorites () {
      const res = await getFavorites()
      this.Favor = res.data.body
      console.log(res.data.body)
    }
  }
}
</script>

<style lang="less" scoped>
.heards{
    background-color: #21b97a;
/deep/.van-nav-bar__title{
        color: #fff;
    }
/deep/.van-icon{
        color: #fff;
    }
}
</style>
