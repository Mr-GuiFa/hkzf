<template>
  <div>
    <van-nav-bar
  title="账号登录"
  style="background:#1cb676"
>
<template #left >
<a href="/" style="color:white">{{ jt }}</a>
</template>
</van-nav-bar>
<div ref="from">
  <van-form @submit="onSubmit" >
  <van-field
    v-model="username"
    name="username"
    placeholder="请输入账号"
    :rules="rules.username"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    number
    placeholder="请输入密码"
    :rules="rules.password"
  />
  <div style="margin: 16px;">
    <van-button @click="loginUp"  block type="info" native-type="submit" style="background:#1cb676">登录</van-button>
  </div>
</van-form>
</div>
</div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      jt: '<',
      username: '',
      password: '',
      onSubmit: '',
      rules: {
        username: [
          {
            required: true,
            message: '账号或密码不能为空'
          },
          {
            pattern: /[A-Za-z0-9]{8}/,
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
      this.$store.push('/profile')
    },
    loginUp () {
      try {
        this.$refs.from.validata('mobile')
        Toast.success('登陆成功')
      } catch (error) {

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
