<template>
  <div class="dd">
    <div class="bgcimg">
      <img class="imgs" src="http://liufusong.top:8080/img/profile/bg.png" alt="">
    </div>
<div class="baikuang">
  <div class="touxiang"><van-image
  width="100"
  height="100"
  round
  src="http://liufusong.top:8080/img/profile/avatar.png"
/>
<div class="text">{{ user}}</div>
</div>
        <div class="but"><button @click="gobtn">去登录</button></div>
        </div>
        <div class="bodyd">
          <van-grid :column-num="3">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>
        </div>
        <div class="guanggao">
          <img src="http://liufusong.top:8080/img/profile/join.png" alt="">
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '游客'
    }
  },
  methods: {
    gobtn () {
      this.$router.push('/login')
    }
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
  margin-left: 27%;
  margin-top: 5%;
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
  padding-bottom: -20%;
}
</style>
