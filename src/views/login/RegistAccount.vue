<template>
  <div class="div">
    <div class="content">
      <el-card class="box-card">

      <el-container v-if="!success">
        <el-header>
          <el-steps :active="active" finish-status="success" :align-center="true">
            <el-step :title="item.title" v-for="item in activeItem" :key="item.index"></el-step>
            <!--            <el-step title="步骤 2"></el-step>-->
            <!--            <el-step title="步骤 3"></el-step>-->

          </el-steps>
        </el-header>
        <el-main>
          <el-form ref="form1" :model="form1" label-width="80px">
            <transition name="el-zoom-in-center">
            <div v-show="active==0">
              <el-form-item label="邮箱"
                            prop="email"
                            :rules="[
                            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                          ]">
                <el-input v-model="form1.email"></el-input>
              </el-form-item>
              <el-form-item label="验证码" class="vcode"
                            prop="vcode"
                            :rules="{
                            required: true, message: '验证码不能为空', trigger: 'blur'
                          }">
                <el-row :gutter="0">
                  <el-col :span="15">
                    <el-input v-model="form1.vcode"></el-input>
                  </el-col>

                  <el-col :span="5" :offset="1">
                    <el-button type="primary" :disabled="vcodeDisabled" @click="sendVcode">{{vcodeMsg}}</el-button>
                  </el-col>
                </el-row>
              </el-form-item>
            </div>
            </transition>
          </el-form>

          <el-form ref="form2" :model="form2" label-width="100px" :rules="form2rules">
            <transition name="el-zoom-in-center" mode="out-in">
            <div v-show="active==1">
              
              <el-form-item label="账号" prop="account" >
                <el-input v-model="form2.account"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input type="password" v-model="form2.pwd" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPwd">
                <el-input type="password" v-model="form2.checkPwd" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
<!--                <el-input v-model="form2.sex" autocomplete="off"></el-input>-->
                <el-radio-group v-model="form2.sex">
                  <el-radio :label="0">女</el-radio>
                  <el-radio :label="1">男</el-radio>
                  <el-radio :label="2">其他</el-radio>
                </el-radio-group>
              </el-form-item>
<!--              <el-form-item label="年龄" prop="age">-->
<!--&lt;!&ndash;                <el-input v-model="form2.age"></el-input>&ndash;&gt;-->
<!--                <el-input-number v-model="form2.age"  :min="0" :max="999" label=""></el-input-number>-->
<!--              </el-form-item>-->
              <el-form-item label="出生日期" prop="birthday">
                <!--                <el-input v-model="form2.age"></el-input>-->
<!--                <el-input-number v-model="form2.birthday"  :min="0" :max="999" label=""></el-input-number>-->
                <el-date-picker
                  v-model="form2.birthday"
                  type="date"
                  placeholder="选择生日"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>

            </div>
            </transition>
          </el-form>

          <!--          <el-form ref="form" :model="form" label-width="80px">-->
          <div v-show="active==2">
            注册成功
          </div>
          <!--          </el-form>-->

        </el-main>
        <el-footer class="footer">
          <el-button style="margin-top: 12px;" v-if="active>0" @click="next(-1)">
            上一步
          </el-button>
          <el-button style="margin-top: 12px;float: right" v-if="active<activeItem.length-1" @click="next(1)">
            下一步
          </el-button>
          <el-button style="margin-top: 12px;float: right" v-if="active==activeItem.length-1" @click="submit">
            完成
          </el-button>
        </el-footer>
      </el-container>

      <div v-else>
        注册成功，开始登陆
        <el-button type="primary" @click="toLogin">主要按钮</el-button>
      </div>
    </el-card>
    </div>

  </div>
</template>

<script>
  import https from '@/api/https'
  /**注册界面
   * 步骤1：首先验证进行邮件验证码(记录邮箱)，通过进入2
   * 步骤2：表单
   * 设置头像
   * 登录账号(唯一校验)
   * 密码(双重验证)
   * 手机号(便于以后的短信发送)
   * 性别(三选一)
   *
   *
   * */
  export default {
    name: 'RegistAccount',
    data () {
      var checkAge = (rule, value, callback) => {
        // if (!value) {
        //   return callback(new Error('年龄不能为空'));
        // }
        // setTimeout(() => {
        console.log(value,Number.isInteger(value),typeof value);
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        // }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        // if (value === '') {
        //   callback(new Error('请输入密码'));
        // } else {
        //   // if (this.form2.checkPwd !== '') {
        //   //   this.$refs.ruleForm.validateField('checkPwd');
        //   // }
        //   callback();
        // }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form2.pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form2rules: {
          account:[
            { required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          pwd: [
            { required: true, message: '密码不能为空', trigger: 'blur'},
            // { validator: validatePass, trigger: 'blur' }
          ],
          checkPwd: [
            { required: true, message: '再次输入密码', trigger: 'blur'},
            { validator: validatePass2, trigger: 'blur' }
          ],
          // age: [
          //   { validator: checkAge, trigger: 'blur' }
          // ]
        },


        activeItem: [
          {index: 0, title: '邮箱验证'},
          {index: 1, title: '信息确认'},
          // {index:2,title:'完成'},
        ],//标签数,索引才从0开始
        active: 0,//索引数

        success: false,//是否注册成功

        form1: {
          email: '',
          vcode: '',
        },
        form1CheckFlag:false,//表单验证是否成功

        form2: {
          account: '',
          pwd: '',
          checkPwd: '',
          // age:0,
          sex:'',
          birthday:'',
        },
        form2CheckFlag:false,//表单验证是否成功

        vcodeDisabled: false,
        vcodeMsg: '发送验证码',
        vcodeCountDown: 60,
        vcodeCountDownInit: 60,

      }
    },
    components: {},
    created () {
    },
    mounted () {
    },
    methods: {
      next (flag) {
        if (flag === 1) {
          /**表单验证*/
          let a=this.checkForm();
          if(!this.form1CheckFlag){
            return;
          }

        } else if (flag === -1) {
          // if(!this.form2CheckFlag){
          //   return;
          // }
          this.$refs['form2'].resetFields();
          this.active--
        } else {
          alert('异常')
        }
      },
       checkForm(){

        if(this.active===0){
          /**表单验证*/
           this.$refs['form1'].validate((valid1) => {
            if (valid1) {

              let b=https.fetchPost('/spring-cloud-common-thirdparty/check/checkVcode',this.form1).then((res) => {
                console.log(res)
                // debugger
                if(res.success){
                  // return true;
                  this.form1CheckFlag=true;
                  this.active++
                }else{
                  this.$notify.error({
                    title: '验证结果',
                    message: res.msg
                  });
                  // return false;
                  this.form1CheckFlag=false;
                }
              }).catch(err=>{
                  console.log(err)
                }
              )
              // this.form1CheckFlag=b;
              /**验证码验证*/
              // alert("验证码错误！");

            } else {
              console.log('error submit!!')
              return false
            }
          })
          return;

        }else if(this.active===1){
          // debugger
         this.$refs['form2'].validate((valid2) => {
           this.form2CheckFlag=valid2;
           // console.log("222:"+valid2)
            if (valid2) {
              // alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }else{
          // this.checkFormFlag=false;
          return false;
        }
        // return true;
      },
      submit () {
        // console.log('submit!')
        this.checkForm();
        if(!this.form2CheckFlag){
          return;
      }
        let form=Object.assign(this.form1,this.form2);
        console.log(form);
        this.success = true
      },
      toLogin () {
        this.$router.push({name: 'Login'})
      },

      sendVcode () {
        // this.vcodeDisabled=true;
        // let time=this.vcodeCountDownInit;
        // this.vcodeMsg=time+"后重新发送";
        // this.vcodeCountDownInit--;
        // console.log(this.vcodeCountDownInit);
        // if(this.vcodeCountDownInit===0){
        //   this.vcodeDisabled=false;
        //   this.vcodeMsg="再次发送";
        //   this.vcodeCountDownInit=this.vcodeCountDown;
        //   // return;
        // }
        this.$refs.form1.validateField("email", errMsg => {
          if (errMsg) {
            console.log("邮箱校验未通过");
          } else {
            console.log("邮箱校验通过:"+this.form1.email);

            https.fetchPost('/spring-cloud-common-thirdparty/sendVCode/send',{"email":this.form1.email}).then((res) => {
              console.log(res);

              this.vcodeDisabled = true
              this.vcodeMsg = this.vcodeCountDownInit + 'S后重新发送'

              let clock = window.setInterval(() => {
                this.vcodeCountDownInit--
                this.vcodeMsg = this.vcodeCountDownInit + 'S后重新发送'
                console.log(this.vcodeCountDownInit)
                if (this.vcodeCountDownInit === 0) {
                  window.clearInterval(clock)
                  this.vcodeDisabled = false
                  this.vcodeMsg = '再次发送'
                  this.vcodeCountDownInit = this.vcodeCountDown
                  // return;
                }
              }, 1000)

            }).catch(err=>{
                console.log(err)
              }
            );

          }
        });
        // return ;



      },
    }
  }
</script>

<style scoped>
  .div {
    display: flex;
    justify-content: center;
    /*align-items:center;*/
    width: 100%;
    height: 100%;
  }

  .content {
    /*border: 1px solid black;*/
    align-items: center;
    margin-top: 10%;
    width: 30%;
  }

  .vcode {
    /*display: flex;*/
    /*justify-content:space-between;*/
  }
</style>
