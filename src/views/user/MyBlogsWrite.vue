<template>
  <div class="MyBlogsWrite">
    <blog-head></blog-head>
    <div class="blogs_form">
      <el-form ref="validateForm" :model="form" label-width="100px">
        <el-form-item
          label
          label-width="0px;"
          prop="title"
          :rules="[{ required: true, message: '标题不能为空'}]"
        >
          <el-input class="write_title" v-model="form.title" placeholder="请输入文章标题"></el-input>
        </el-form-item>

        <el-card style="height: 100%;margin-bottom: 30px;">
          <quill-editor
            v-model="form.content"
            ref="myQuillEditor"
            style="height: 500px;"
            :options="editorOption"
          ></quill-editor>
        </el-card>

        <el-form-item label="文章标签：">
          <el-tag
            :key="tag.name"
            :type="tag.type"
            v-for="tag in form.tags"
            closable
            :disable-transitions="false"
            effect="plain"
            @close="handleClose(tag)"
            :id="tag.id"
          >{{tag.name}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          ></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加标签</el-button>
        </el-form-item>

        <el-form-item label="分类专栏：">
          <el-checkbox-group v-model="form.specialColumn">
            <el-checkbox
              v-for="item in classfiySpecial"
              :key="item.uuid"
              :label="item.uuid"
            >{{item.name}}
            </el-checkbox>
          </el-checkbox-group>
          <el-input
            class="input-new-tag"
            v-if="classfiyInputVisible"
            v-model="classfiyInputValue"
            ref="saveTagInputClassfiy"
            size="small"
            @keyup.enter.native="classfiyHandleInputConfirm"
            @blur="classfiyHandleInputConfirm"
          ></el-input>
<!--          <el-button v-else class="button-new-tag" size="small" @click="classfiyShowInput">+ 添加标签</el-button>-->
        </el-form-item>

        <el-form-item
          label="文章类型："
          prop="vocType"
          :rules="[
              { required: true, message: '请选择文章类型'}
            ]"
        >
          <el-select v-model="form.vocType" placeholder="请选择文章类型">
            <el-option
              v-for="item1 in articleType"
              :key="item1.uuid"
              :value="item1.uuid"
              :label="item1.name"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="发布形式："
          prop="vocForm"
          :rules="[
              { required: true, message: '请选择发布形式'}
            ]"
        >
          <el-radio-group v-model="form.vocForm">
            <el-radio v-for="item in articleFbxx"
                      :key="item.uuid"
                      :label="item.uuid">
              {{item.name}}
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label size="mini">
          <!-- <el-input class="write_title" v-model="form.name" placeholder="请输入文章标题"></el-input> -->
          <span class="wxts">温馨提示：请勿发布涉及政治、广告、营销、翻墙、违反国家法律法规等内容</span>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布博客</el-button>
          <el-button type="primary" @click="onSubmitCg">保存为草稿</el-button>

          <el-button @click="fanhui">返回</el-button>
        </el-form-item>
        <!-- <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        -->
      </el-form>
    </div>
  </div>
</template>

<script>
  import BlogHead from '../BlogHead'
  import {quillEditor} from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { randomUUID, randomNumber } from '@/utils/util'
  import https from '@/api/https'
  export default {
    name: 'MyBlogsWrite',
    data () {
      return {
        /**表单数据*******************/
        form: {
          title: '',//标题
          content: '',//内容
          tags: [],//标签
          specialColumn: [],//分类专栏
          vocType: '',//文章类型
          vocForm: '',//发布形式
        },
        content: null,
        editorOption: {},

        /**文章标签数据*******************/
        // 颜色
        typeColor: ['', 'success', 'info', 'danger', 'warning'],
        // 标签
        dynamicTags: [],
        // 标签是否点击添加
        inputVisible: false,
        // 标签输入值
        inputValue: '',

        /**分类专栏数据*******************/
        // 分类专栏数据
        classfiySpecial: [
          {name: 'java', uuid: '1'},
          {name: 'vue', uuid: '2'},
          {name: 'spring boot', uuid: '3'}
        ],
        // 标签是否点击添加
        classfiyInputVisible: false,
        // 标签输入值
        classfiyInputValue: '',

        /**文章类型*/
        articleType: [],
        /**发布形式*/
        articleFbxx: [],
      }
    },
    components: {BlogHead, quillEditor},
    created () {
      // this.initDynamicTags()
      this.init()
    },
    mounted () {
    },
    methods: {
      /**初始化词汇数据*/
      init () {
        // this.axios({
        //   method: 'get',
        //   url: 'initData/getWriteBlogsData', //会自动添加main.js里面的配置
        // }).then(res => {
        //   // console.log(res);
        //   let fbxs = res.data.data.fbxs
        //   let flzl = res.data.data.flzl
        //   let wzlx = res.data.data.wzlx
        //   // console.log(flzl)
        //   this.classfiySpecial = flzl
        //   this.articleType = wzlx
        //   this.articleFbxx = fbxs
        //
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err)
        // })

        https.fetchGet('/spring-cloud-common/myBlogs/initData/getWriteBlogsData',{aa:'aa',bb:'bb'}).then((res) => {
            // console.log(res);
            let fbxs = res.data.fbxs
            let flzl = res.data.flzl
            let wzlx = res.data.wzlx
            // console.log(flzl)
            this.classfiySpecial = flzl
            this.articleType = wzlx
            this.articleFbxx = fbxs

            // console.log(res)
        }).catch(err=>{
            console.log(err)
          }
        )
      },
      // 初始化标签
      initDynamicTags () {
        for (let i = 0; i < 5; i++) {
          this.form.tags.push({
            type: this.typeColor[
              Math.floor(Math.random() * this.typeColor.length)
              ],
            name: '标签' + i,
            uuid: randomUUID(),
            // 'type':"danger",'label':"hahaha"
          })
        }
        console.log(this.form.tags)
      },
      /**表单提交*/
      onSubmit () {
        // this.form.tags = this.dynamicTags
        // console.log(this.form)
        this.$refs['validateForm'].validate(valid => {
          if (valid) {
            https.fetchPost('/spring-cloud-common/myBlogs/article/add',this.form).then((res) => {
              console.log(res);
              let d=res.data
              this.$router.push({name:'BlogsOk',params: d});
            }).catch(err=>{
                console.log(err)
              }
            )
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      /**保存为草稿*/
      onSubmitCg(){
        /**path:可以写path  也可以写name
         * name：必须写name
         * */
        this.$router.push({name:'BlogsOk',params: {id:'1'}});
      },

      /*******************标签/*******************/
      //标签删除事件
      handleClose (tag) {
        this.form.tags.splice(this.form.tags.indexOf(tag), 1)
      },
      // 点击添加标签按钮
      showInput () {
        // alert(1);
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },
      //保存
      /**每次保存的时候去数据库查询，看改标签是否存在，存在则用数据库的，不存在则新添加*/
      handleInputConfirm () {
        let inputValue = this.inputValue
        if (inputValue) {
          for (let i = 0; i < this.form.tags.length; i++) {
            let data = this.form.tags[i].name
            // console.log(data);
            if (data === inputValue) {
              this.$message({
                type: 'warning',
                message: `该标签已存在`
              })
              // alert(2);
              return
            }
          }
          // alert(1);
          let data = {
            type: this.typeColor[
              Math.floor(Math.random() * this.typeColor.length)
              ],
            name: inputValue,
            uuid:randomUUID(),
          }
          this.form.tags.push(data)
        }
        this.inputVisible = false
        this.inputValue = ''
      },

      /*******************分类专栏*******************/
      //标签删除事件
      // handleClose(tag) {
      //   this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      // },
      // 点击添加标签按钮
      classfiyShowInput () {
        // alert(1);
        this.classfiyInputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInputClassfiy.$refs.input.focus()
        })
      },
      //保存
      classfiyHandleInputConfirm () {
        let classfiyInputValue = this.classfiyInputValue
        if (classfiyInputValue) {
          for (let i = 0; i < this.classfiySpecial.length; i++) {
            let data = this.classfiySpecial[i].label
            // console.log(data);
            if (data === classfiyInputValue) {
              this.$message({
                type: 'warning',
                message: `该标签已存在`
              })
              // alert(2);
              return
            }
          }
          // alert(1);
          let data = {
            name: classfiyInputValue,
            uuid: randomUUID(),
          }
          this.classfiySpecial.push(data)
        }
        this.classfiyInputVisible = false
        this.classfiyInputValue = ''
      },

      // 返回按钮
      fanhui () {
        alert(1)
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
  .blogs_form {
    width: 80%;
    height: 2000px;
    /*border: 1px solid black;*/
    margin: auto;
    margin-top: 1%;
    background-color: #ffffff;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  .wxts {
    color: rgb(202, 12, 22);
  }
</style>
