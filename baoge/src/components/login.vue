<template>
  <div class="main">
    <div class="bg">
    </div>
    <div class="box_3d">

      <transition name="page" mode="out-in">
        <div class="login" v-if="sideLogin" key="login">
          <el-input placeholder="邮箱账号" v-model="username" style="margin-top:70px;z-index:18;" @input="checkEmailEmp" @keyup.enter.native="checkEmail">
            <template slot="append">
              <el-button ttype="primary" icon="el-icon-check" circle @click="checkEmail" v-if="showButton"></el-button>
            </template>
          </el-input>
          <transition name="fade">
            <el-input type="password" placeholder="密码" v-model="password" v-if="showpsd" key="pwd-open" @keyup.enter.native="dologin">
              <template slot="append">
                <el-button type="primary" icon="el-icon-check" circle @click="dologin" v-if="!showButton"></el-button>
              </template>
            </el-input>
          </transition>
        </div>

        <div class="register" v-else key="register">
          <el-form :model="register_form" status-icon :rules="rules" ref="ruleForm" label-width="70px">
            <el-form-item label="用户名" prop="username" style="margin-top:70px">
              <el-input type="text" v-model="register_form.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email" style="margin-top:40px">
              <el-input type="text" v-model="register_form.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" style="margin-top:40px">
              <el-input type="password" v-model="register_form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" style="margin-top:40px">
              <el-input type="password" v-model="register_form.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item style="margin-top:40px;">
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </transition>
    </div>
    <div class="footer">
      <p style="font" @click="changePage">{{sideLogin? "注册账号": "登录账号"}}</p >
    </div>
  </div>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      showpsd: false,
      showButton: true,
      sideLogin: true,
      view: 'login',
      register_form: {
        username: '',
        email: '',
        password: '',
        checkpass: ''
      },
      rules: {
        username: [
          {
            validator: (rule, value, callback) => {
              // eslint-disable-next-line eqeqeq
              if (value == '') {
                callback(new Error('请输入用户名'))
              }
              callback()
            },
            trigger: 'blur'
          }
        ],
        email: [
          {
            validator: (rule, value, callback) => {
              // eslint-disable-next-line no-useless-escape
              var pattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
              if (!pattern.test(value)) {
                callback(new Error('请输入正确的邮箱格式'))
              }
              callback()
            },
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入密码'))
              }
              callback()
            },
            trigger: 'blur'
          }
        ],
        checkPass: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.register_form.password) {
                callback(new Error('两次输入密码不一致!'))
              }
              callback()
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    checkEmail () {
      // eslint-disable-next-line no-useless-escape
      var pattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      if (pattern.test(this.username)) {
        this.showpsd = true
        this.showButton = false
      } else {
        this.$message.error('邮箱格式不正确！')
      }
    },
    checkEmailEmp (newstr) {
      // eslint-disable-next-line eqeqeq
      if (newstr == '') {
        this.showpsd = false
        this.showButton = true
      }
    },
    dologin () {
      this.$axios.get('http://127.0.0.1:3000/api/v1/user/me').then((res) => {
        // eslint-disable-next-line handle-callback-err
      }).catch(err => {
      }).finally(() => {
      })
    },
    changePage () {
      this.sideLogin = !this.sideLogin
      if (this.sideLogin) {
        this.view = 'login'
      } else {
        this.view = 'register'
      }
    },
    submitForm () {

    },
    resetForm () {

    }
  }
}
</script>

<style>
  .main{
    width:99vw;
    height:95vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bg{
    width: 100%;
    height: 100%;
    background: url("https://i.loli.net/2019/09/28/ytGhbzr3Xe7TsAc.png") no-repeat;
    background-size: cover;
    position: absolute;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    -o-filter: blur(5px);
    filter: blur(5px);
  }

  .login{
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 8px;
    background-color: rgba(255,255,255,0.6);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    overflow: hidden;
    z-index: 2;
    padding: 30px;
    box-sizing: border-box;
  }

  .register{
    width: 400px;
    height: 500px;
    position: relative;
    border-radius: 8px;
    background-color: rgba(255,255,255,0.6);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    overflow: hidden;
    z-index: 2;
    padding: 10px 50px 10px 20px;
    box-sizing: border-box;
  }

  .fade-enter-active,.fade-leave-active{
    transition: all .5s ease;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(-40px);
    /* opacity: 0; */
  }

  .footer{
    width: 200px;
    height: 30px;
    position: absolute;
    top: 90%;
    left: 49%;
  }

  .footer > p{
    color: floralwhite;
    text-shadow:5px 2px 6px #000;
  }

  .footer >p:hover{
    cursor: pointer;
  }

  .page-enter-active, .page-leave-active {
    transition: all .5s linear;
  }

  .page-leave-to{
    transform: rotateY(-90deg);
  }

  .page-enter{
    transform: rotateY(90deg);
  }

  .box_3d{
    perspective: 500px;
    -webkit-perspectiv: 500px;
    transform-style: preserve-3d;
  }
</style>
