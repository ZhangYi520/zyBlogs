<template>
    <div class="diva">
      <div class="content">
        <div class="logo">
          <img src="/static/img/logo.png" style="width: 130px;height: 130px;">
        </div>
        <el-form ref="form" :model="form" label-width="0px">
          <el-form-item>
            <el-input v-model="form.account" placeholder="账号/手机/邮箱"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.pwd" placeholder="密码" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.remenbme">记住我</el-checkbox>
<!--            <el-checkbox v-model="remenbme">记住密码</el-checkbox>-->
            <span  class="findPwd">找回密码</span>
            <span  class="findPwd" @click="registAccount">注册账号</span>
          </el-form-item>
          <el-divider>第三方登录</el-divider>
          <el-form-item>
            <div class="dsf">
              <el-tooltip content="微信登录" placement="bottom" effect="light">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#el-icom-umpweixin"></use>
              </svg>
              </el-tooltip>
              <el-tooltip content="qq登录" placement="bottom" effect="light">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#el-icom-umpQQ1"></use>
              </svg>
              </el-tooltip>
              <el-tooltip content="微博登录" placement="bottom" effect="light">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#el-icom-umpweibo"></use>
              </svg>
              </el-tooltip>

              <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        更多<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
                <el-dropdown-menu slot="dropdown" class="menu">
                                    <el-dropdown-item>
                                      <div>
                                        <el-tooltip content="微博登录" placement="bottom" effect="light">
                                          <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#el-icom-umpmayun"></use>
                                          </svg>
                                        </el-tooltip>
                                      </div>
                                    </el-dropdown-item>

                                    <el-dropdown-item>
                                      <div>
                                        <el-tooltip content="qq登录" placement="bottom" effect="light">
                                        <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#el-icom-umpQQ1"/>
                                        </svg>
                                        </el-tooltip>

                                      </div>

                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                      <div>
                                        <el-tooltip content="微信登录" placement="bottom" effect="light">

                                        <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#el-icom-umpweibo"/>
                                        </svg>
                                        </el-tooltip>

                                      </div>
                                    </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>


          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" @keyup.enter.native="onSubmit" style="width: 100%">登录</el-button>
<!--            <el-button>取消</el-button>-->
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  import '@/assets/icon/iconfont.css'
  import '@/assets/icon/iconfont.js'
  import https from '@/api/https'
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          account: '',
          pwd: '',
          remenbme:false,
        },
        // zddl:false,
        remenbme:false,
      };
    },
    components: {},
    created() {
      this.keyupEnter();
    },
    mounted() {},
    methods: {
      keyupEnter(){
        let that = this;
        document.onkeypress = function(e) {
          var keycode = document.all ? event.keyCode : e.which;
          if (keycode == 13) {
            that.onSubmit();// 登录方法名
            return false;
          }
        };
      },
      onSubmit() {
        console.log('submit!');
        https.fetchPost('/spring-cloud-common-login/sso/login/into',this.form).then((res) => {
          console.log(res)
          window.localStorage.setItem("accessToken","123456")
          this.$router.go(-1);
        }).catch(err=>{
            console.log(err)
          }
        )

        // https.fetchPost('/spring-cloud-common/myBlogs/blogs/login',this.form).then((res) => {
        //   console.log(res)
        // }).catch(err=>{
        //     console.log(err)
        //   }
        // )
      },
      registAccount(){
        this.$router.push({name:'RegistAccount'})
      },
    }
  }
</script>

<style scoped>
  .diva{
    display: flex;
    justify-content:center;
    /*align-items:center;*/
    width: 100%;
    height: 100%;
  }
.content{
  /*border:1px solid black;*/
  /*width: 30%;*/
  /*height: 300px;*/
  /*margin: auto;*/
  /*justify-content:center;*/
  align-items:center;
  margin-top: 10%;
}
.logo{
  display: flex;
  justify-content:center;
}
  .dsf{
    display: flex;
    justify-content: space-between ;
    align-items:center;
  }
  .menu{
    display: flex;
    justify-content: space-between ;
    align-items:center;
  }
  .menu div{
    display: flex;
    justify-content: space-between ;
    align-items:center;
  }
  .FontFamily {
    font-family: "FontFamily" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon {
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .findPwd{
    margin-left: 30px;line-height: 19px;font-size: 14px;color: #606266
  }
  .findPwd:hover{
    color: rgb(64,158,255);
    /*background-color:yellow;*/
    cursor:pointer
  }
  .el-dropdown-link:hover{
    color: rgb(64,158,255);
    /*background-color:yellow;*/
    cursor:pointer
  }
</style>
