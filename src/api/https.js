import axios from 'axios'
import router from '@/router'
import { Message ,Notification } from 'element-ui';
axios.defaults.timeout = 5000;                        //响应时间
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = 'http://localhost:9004';   //配置接口地址
/**微服务项目，接口url地址格式：服务名+项目名+控制层接口地址
 * 如：/spring-cloud-common-login/sso/login/into
 * */

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  let token = window.localStorage.getItem("accessToken")
  console.log("token:"+token);
  // config.headers.accessToken = token;
  config.headers['accessToken'] = token
  //在发送请求之前做某件事
  return config;
},(error) =>{
  console.log('错误的传参')
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  console.log("响应："+JSON.stringify(res))
  //对响应数据做些事
  if(!res.data.success){
    // this.$router.push({name:'Login'})
    let code=res.data.code;
    if(code===401){
      Notification({
        title: '未登录',
        message: '您还未登陆，请登陆后在操作！',
        type: 'warning',
        duration:3000,
      });
      router.push({name:'Login'});
      return null;
    }
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  fetchPost,
  fetchGet,
}
