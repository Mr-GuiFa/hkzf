<template>
  <div>
    <van-nav-bar
  title="账号登录"
  style="background:#1cb676"
>
<template #left >
<a href="http://localhost:5545/#/home/profile" style="color:white">{{ jt }}</a>
</template>
</van-nav-bar>
<div >
  <van-form  ref="from">
  <van-field
    v-model="user.username"
    name="username"
    placeholder="请输入账号"
    :rules="rules.username"
  />
  <van-field
    v-model="user.password"
    type="password"
    name="password"
    number
    placeholder="请输入密码"
    :rules="rules.password"
  />
  <div style="margin: 16px;">
    <van-button  @click="loginUp" block native-type="button" style="background:#1cb676">登录</van-button>
  </div>
</van-form>
</div>
</div>
</template>

<script>
import { login } from '@/api/user.js'
import { Toast } from 'vant'
export default {
  data () {
    return {
      jt: '<',
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '账号或密码不能为空'
          },
          {
            pattern: /[A-Za-z0-9]{5,8}/,
            message: '用户名格式5-8位的字母和数字'
          }
        ],
        password: [
          {
            required: true,
            message: '账号或密码不能为空'
          }, {
            pattern: /[0-9]{6}/,
            message: '密码只有6位数'
          }
        ]
      }
    }
  },
  methods: {
    banck () {
      this.$router.push('/home/profile')
    },
    async loginUp () {
      try {
        const user = this.user
        console.log(user)
        const res = await login(this.user)
        console.log(res)
        this.$store.commit('setUser', res.data.body)
        Toast.success('登陆成功')
        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="less">
.van-icon{
    color: #fff;
}

</style>
