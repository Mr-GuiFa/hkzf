<template>
<div>
    <van-nav-bar
  title="房屋管理"
  left-arrow
  class="heards"
  @click-left="onClickLeft"
/>
<div>
<van-card
v-for="(item,index) in houseList"
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
import { getList } from '@/api/mymesage'
export default {
  data () {
    return {
      houseList: []
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    onClickLeft () {
      this.$router.push('/home/profile')
    },
    async getUser () {
      const res = await getList()
      this.houseList = res.data.body
      console.log(res.data.body)
      console.log(res)
      console.log(this.houseList)
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
.van-card__title{
    font-size: 15px;
    font-weight:bold;
}
.jc{

    font-size: 15px;
}
.van-card__desc{
    color: #ccc;
}
</style>
