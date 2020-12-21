<template>
  <div class='BlogsLook'>
    <blog-head></blog-head>
    <div class="look_cont">
      <blogs-user-left></blogs-user-left>
      <el-card class="box-card look_text">

<!--        <div class="look_text">-->
          <div class="look_title">
            <!-- <el-collapse v-model="activeNames">
            <el-collapse-item>
                <template slot="title">
                    <div class="look_title_item">
                        <div>标题</div>
                        <div>描述</div>
                        <div>标题</div>
                        <div>描述</div>
                    </div>
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            </el-collapse> -->
            <div class="look_title_t">
              {{ArticleVo.title}}
              <!-- <span></span> -->
            </div>
            <div class="look_title_m">
              <span class="yc">{{ArticleVo.vocName}}</span>
              <span class="nc"> {{ArticleVo.userName}}</span>
              <span class="zhfb">最后发布于&nbsp;&nbsp;&nbsp;<span>{{ArticleVo.updateTime|momentFilters}}</span>
                        </span>
              <span class="yds">阅读数 <span>{{ArticleVo.readNum}}</span></span>
              <span class="sc"><i class="el-icon-star-off"></i> 收藏</span>
            </div>

          </div>
          <div class="look_blogs_cont" v-html="ArticleVo.content">

          </div>

          <div class="look_blogs_3lian">
            <div>
              <el-button type="primary" icon="el-icon-thumb" circle></el-button>
              <el-button type="warning" icon="el-icon-star-off" circle></el-button>
              <el-button type="success" icon="el-icon-share" circle></el-button>
            </div>
          </div>

          <div class="look_blogs_end">
            <img class="look_blogs_end_img" src="../../../static/img/head.jpg" alt="">
            <div class="look_blogs_end_ms">
              <div class="look_blogs_end_ms_nc">毅大师</div>
              <div class="look_blogs_end_ms_num">发布了 <span>999</span> 篇原创文章 · 获赞 <span>999</span> · 访问量 <span>999</span>
              </div>
            </div>
          </div>

          <div class="look_blogs_reply">
            <dl>
              <dt>
                <img class="look_blogs_reply_img" src="../../../static/img/head.jpg" alt="">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="相对作者说点什么..."
                  v-model="textarea">
                </el-input>
              </dt>
              <dt class="look_blogs_reply_btn">
                <span>还能输入<span>1000</span>个字符</span>
                <el-button type="danger" size="small">发表评论</el-button>
              </dt>
              <div class="look_blogs_reply_one" v-for="item in 5" :key="item">
                <dt>
                  <img class="look_blogs_reply_one_img" src="../../../static/img/head.jpg" alt="">
                  <span class="look_blogs_reply_one_nc">毅大师</span>
                  <span class="look_blogs_reply_one_time">2020年3月4日16:18:39</span>

                </dt>
                <dd>
                                <span class="look_blogs_reply_one_cont">回复内容aaaaaaaaaaa啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                    啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                    回复内容aaaaaaaaaaa啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                    啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                    回复内容aaaaaaaaaaa啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                    啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                    回复内容aaaaaaaaaaa啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                                    啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</span>
                </dd>
              </div>
            </dl>
          </div>
<!--        </div>-->

<!--        <div class="right_meau_list">-->
<!--          <ul>-->
<!--            <li>-->
<!--              &lt;!&ndash; <span></span> &ndash;&gt;-->
<!--              <i class="el-icon-thumb"></i>-->
<!--              <span class="meau_list_num">999</span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <i class="el-icon-share"></i>-->
<!--            </li>-->
<!--            <li>-->
<!--              <i class="el-icon-chat-dot-round"></i>-->
<!--              <span class="meau_list_num">999</span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <i class="el-icon-star-off"></i>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->


      </el-card>

    </div>
    <!-- BlogsUserLeft -->


  </div>


</template>

<script>
  import BlogHead from '../BlogHead'
  import BlogsUserLeft from './BlogsUserLeft'
  import https from '@/api/https'

  export default {
    name: 'BlogsLook',
    data () {
      return {
        activeNames: '',
        textarea: '',

        url_articleId: this.$route.query.articleId,//界面跳转过来的参数

        /**文章基本信息*/
        ArticleVo: {
          articleUuid: '',
          content: '',
          readNum: 0,
          title: '',
          updateTime: '',
          userName: '',
          userUuid: '',
          vocName: '',
        },
      }
    },
    filters: {
      // formatDate (time) {
      //   return this.$moment(time).format("YYYY-DD-MM HH:mm:ss")
      //
      // }
    },
    components: {BlogHead, BlogsUserLeft},
    created () {
      this.init()
    },
    mounted () {
    },
    methods: {
      init () {
        console.log(this.url_articleId)
        https.fetchGet('/spring-cloud-common/myBlogs/blogLook/get', {id: this.url_articleId}).then((res) => {
          this.ArticleVo = res.data.article
          console.log(res)
        }).catch(err => {
            console.log(err)
          }
        )
      }
    }
  }
</script>
<style scoped>
  .look_cont {
    margin: auto;
    margin-top: 1%;
    width: 90%;
    /* height: 3000px; */
    /* border: 1px solid black; */
    display: flex;
    /* justify-content:center ; */
    flex-direction: row;
    background-color: rgb(245, 246, 247)
  }

  .look_text {
    width: 70%;
    /* height: 100%; */
    /*border: 1px solid green;*/
    margin-left: 1%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }

  .look_title {
    width: 100%;
    /* height: 100px; */
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
  }

  .look_title_t {
    width: 95%;
    height: 50px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: bolder;
    margin-left: 2%;
  }

  .look_title_m {
    width: 100%;
    height: 30px;
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
  }

  .look_title_m > span {
    margin-left: 15px;
    font-size: 14px;
  }

  .yc {
    background-color: rgb(249, 236, 236);
    /* font-size: 14px; */
    /* margin-right: 1%; */
    color: rgb(202, 12, 22);
  }

  .nc {
    color: rgb(120, 165, 241);
  }

  .zhfb {
    color: rgb(133, 133, 133);
  }

  .yds {
    color: rgb(133, 133, 133);
  }

  .sc {
    color: #ff700a;
  }

  .look_blogs_cont {
    width: 95%;
    /* position:relative; */
    /* height: 100px; */
    margin: auto;
    /*border: 1px solid red;*/
  }

  /* .look_title_item{
      display: flex;
      flex-direction:column;
      width: 100%;
      height: 100%;
  } */
  .look_blogs_3lian {
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
  }

  .look_blogs_3lian > div {
    margin-left: 3%;
  }

  .look_blogs_end {
    height: 80px;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
  }

  .look_blogs_end_img {
    width: 50px;
    height: 50px;
    margin-left: 2%;
  }

  .look_blogs_end_ms {
    height: 60px;
    display: flex;
    /* align-items:center; */
    justify-content: space-around;
    flex-direction: column;
    margin-left: 1%;
  }

  .look_blogs_end_ms_nc {
    color: rgb(51, 51, 51);
    font-size: 16px;
  }

  .look_blogs_end_ms_num {
    font-size: 16px;
    color: rgb(107, 107, 107);
  }

  .look_blogs_end_ms_nc:hover {
    cursor: pointer;
  }

  .look_blogs_reply {
    width: 100%;
    /* border: 1px solid black; */
    /* list-style: none; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .look_blogs_reply dl {
    width: 95%;
    /* border: 1px solid red; */
  }

  .look_blogs_reply dl dt {
    display: flex;
    /* justify-content:center; */
    align-items: center;
  }

  .look_blogs_reply_img {
    width: 25px;
    height: 25px;
    margin-right: 1%;
  }

  .look_blogs_reply_btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1%;
  }

  .look_blogs_reply_btn > span {
    margin-right: 2%;
    font-size: 14px;
    color: #999999;
  }

  .look_blogs_reply_one {
    margin-bottom: 2%;
  }

  .look_blogs_reply_one_img {
    width: 25px;
    height: 25px;
    margin-right: 1%;
  }

  .look_blogs_reply_one_nc {
    margin-right: 1%;
    font-weight: bolder;
    font-size: 14px;
    color: #2e2e2e;
  }

  .look_blogs_reply_one_time {
    margin-right: 1%;
    font-size: 12px;
    color: #999999;
  }

  .look_blogs_reply_one_cont {
    color: #4d4d4d;
    font-size: 14px;
  }

  .right_meau_list {
    width: 4%;
    border: 1px solid black;
    position: fixed;
    z-index: 2;
    height: 300px;
    right: 60px;
  }

  .right_meau_list ul {
    display: flex;
    flex-direction: column;
  }

  .right_meau_list ul li {
    list-style: none;
    width: 100%;
    height: 50px;
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(224, 224, 224);
  }

  .right_meau_list ul li i {
    color: rgb(107, 107, 107);
  }

  .meau_list_num {
    font-size: 12px;
    color: rgb(107, 107, 107);
  }

  .right_meau_list ul li:hover {
    cursor: pointer;
  }

  .right_meau_list ul li:hover i {
    color: rgb(202, 12, 22);
  }

  .right_meau_list ul li:hover .meau_list_num {
    color: rgb(202, 12, 22);
  }


</style>
