<template>
  <div class="blogLeftType">
    <!-- <blog-head></blog-head> -->
    <ul id="type">
      <li>全部</li>
      <li>java</li>
      <li>vue</li>
      <li>python</li>
      <li>spring boot</li>
    </ul>
  </div>
</template>

<script>
import BlogHead from "./BlogHead";

export default {
  name: "BlogLeftType",
  data() {
    return {};
  },
  components: { BlogHead },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.blogLeftType {
  display: flex;
  position: fixed;
  width: 10%;
  /* height: auto; */
  background: #ffffff;
  overflow-y: auto;
  min-height: 100%;
  /* line-height: 100%; */
  margin-left: 7%;
  margin-top: 1%;
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;
  background: #ffffff;
}
.blogLeftType #type {
  /* margin: auto; */
  width: 100%;
  height: 100%;
}
.blogLeftType #type li {
  /* margin: auto; */
  width: 100%;
  height: 40px;
  /* margin-top: 5%; */
  text-align: center;
  line-height: 250%;
  font-size: 90%;
  color: #8a8a8a;
}
.blogLeftType #type li:hover {
  color: #ffffff;
  background-color: rgb(244, 68, 68);
  cursor: pointer;
}
</style>
