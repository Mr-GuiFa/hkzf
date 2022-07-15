<template>
  <div class="dd">
    <div class="bgcimg" v-if="!user">
      <img class="imgs" src="http://liufusong.top:8080/img/profile/bg.png" alt="">
    </div>
    <div class="bgcimgs" v-else>
      <img class="imgs" src="http://liufusong.top:8080/img/avatar.png" alt="">
    </div>
     <div class="baikuang">
  <div class="touxiang"><van-image
  width="100"
  height="100"
  round
  src="http://liufusong.top:8080/img/profile/avatar.png"
/>
<div class="text" v-if="!user">{{ user1}}</div>
<div class="text" v-else>{{ userInfo.nickname}}</div>
</div>
        <div class="but">
        <button @click="gobtn" v-if="!user">去登录</button>
        <button @click="delToken" v-else>去退出</button>
        </div>
        </div>
        <div class="bodyd" router>
          <van-grid :column-num="3">
          <van-grid-item icon="star-o" to="/favorate" text="我的收藏" />
          <van-grid-item :houseList="houseList" icon="wap-home-o" to="/rent" @click="myHouse" text="我的出租" />
          <van-grid-item icon="clock-o" text="看房记录" />
          <van-grid-item icon="idcard" text="成为房主" />
          <van-grid-item icon="user-o" text="个人资料" />
          <van-grid-item icon="service-o" text="联系我们" />
        </van-grid>
        </div>
        <div class="guanggao">
          <img src="http://liufusong.top:8080/img/profile/join.png" alt="">
        </div>
  </div>
</template>
<script>
import { getList } from '@/api/mymesage'
import { mapState } from 'vuex'
import { Dialog } from 'vant'
import { getUser } from '@/api/user.js'
export default {
  name: 'Login',
  data () {
    return {
      user1: '游客',
      userInfo: {},
      houseList: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    this.getUser()
  },
  methods: {
    gobtn () {
      this.$router.push('/login')
    },
    // async  getUser (val) {
    //   try {
    //     const res = await getUser(val.status.body)
    //     console.log(res)
    //   } catch (e) {
    //     console.log(e.message)
    //   }
    // }
    async getUser () {
      try {
        const res = await getUser()
        console.log(res)
        this.userInfo = res.data.body
        const house = await getList()
        this.houseList = house.data.body
        console.log(this.houseList)
        this.$emit('houseList', this.houseList)
        console.log(res.data)
      } catch (e) {
        console.log(e)
        this.$toast('获取数据失败')
      }
    },
    delToken () {
      Dialog.confirm({
        title: '提示',
        message: '是否确定退出'
      }).then(() => {
        console.log('成功退出')
        this.$store.commit('setUser', null)
      }).catch(() => {
        console.log('退出失败')
      })
    },
    async myHouse () {
    }

  },
  mutations: {

  }
}
</script>

<style lang="less">
.bgcimg{
  position:relative;
  width: 100%;
  height: 45%;
  .imgs{
   width: 100%;
  }
}
.bgcimgs{
  position:relative;
  width: 100%;
  height: 30%;
  margin-bottom: -100px;
.imgs{
  width:100%
}
}
.baikuang{
  position:absolute;
  width: 90%;
  height: 25%;
  background-color: #fff;
  margin-left: 5%;
  margin-top: -70px;
   box-shadow: 1px 4px 10px 4px #ccc;
 .but{
  position:absolute;
  margin-left: 40%;
  margin-top: 30%;
  color: #fff;
  font-size: 12px;
  button{
  border: none;
   background: #21b97a;
   border-radius: 7px;
   padding: 5px 12px;
  }
 }
 .text{
  position:absolute;
  width: 100px;
  height: 20px;
  margin: 0 auto;
  text-align: center;
 }
 .touxiang{
  border-radius: 50%;
  position:absolute;
  margin-left: 32%;
  margin-top: -15%;
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: #fff;
}
}
.bodyd{
  margin-top: 100px;
}
.guanggao{
  width: 90%;
  margin: 0 5%;
  img{
    width: 100%;
  }
}
.dd{
  padding-bottom: -40%;
}
</style>
