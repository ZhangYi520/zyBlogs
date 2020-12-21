
/**
 * 随机生成数字
 *
 * 示例：生成长度为 12 的随机数：randomNumber(12)
 * 示例：生成 3~23 之间的随机数：randomNumber(3, 23)
 *
 * @param1 最小值 | 长度
 * @param2 最大值
 * @return int 生成后的数字
 */
export function randomNumber() {
  // 生成 最小值 到 最大值 区间的随机数
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  if (arguments.length === 1) {
    let [length] = arguments
  // 生成指定长度的随机数字，首位一定不是 0
    let nums = [...Array(length).keys()].map((i) => (i > 0 ? random(0, 9) : random(1, 9)))
    return parseInt(nums.join(''))
  } else if (arguments.length >= 2) {
    let [min, max] = arguments
    return random(min, max)
  } else {
    return Number.NaN
  }
}

/**
 * 随机生成字符串
 * @param length 字符串的长度
 * @param chats 可选字符串区间（只会生成传入的字符串中的字符）
 * @return string 生成的字符串
 */
export function randomString(length, chats) {
  if (!length) length = 1
  if (!chats) chats = '0123456789qwertyuioplkjhgfdsazxcvbnm'
  let str = ''
  for (let i = 0; i < length; i++) {
    let num = randomNumber(0, chats.length - 1)
    str += chats[num]
  }
  return str
}

/**
 * 随机生成uuid
 * @return string 生成的uuid
 */
export function randomUUID() {
  let chats = '0123456789abcdef'
  return randomString(32, chats)
}

/**
 * 下划线转驼峰
 * @param string
 * @returns {*}
 */
export function underLine2CamelCase(string){
  return string.replace( /_([a-z])/g, function( all, letter ) {
    return letter.toUpperCase();
  });
}

/**
 * 判断是否显示办理按钮
 * @param bpmStatus
 * @returns {*}
 */
export function showDealBtn(bpmStatus){
  if(bpmStatus!="1"&&bpmStatus!="3"&&bpmStatus!="4"){
    return true;
  }
  return false;
}

/**
 * 增强CSS，可以在页面上输出全局css
 * @param css 要增强的css
 * @param id style标签的id，可以用来清除旧样式
 */
export function cssExpand(css, id) {
  let style = document.createElement('style')
  style.type = "text/css"
  style.innerHTML = `@charset "UTF-8"; ${css}`
  // 清除旧样式
  if (id) {
    let $style = document.getElementById(id)
    if ($style != null) $style.outerHTML = ''
    style.id = id
  }
  // 应用新样式
  document.head.appendChild(style)
}

/**
 * 判断变量是否为空，
 * @param  {[type]}  param 变量
 * @return {Boolean}      为空返回true，否则返回false。
 */
export function isEmpty(param) {
  if (param) {
    let param_type = typeof(param)
    if (param_type == 'object') {
      //要判断的是【对象】或【数组】或【null】等
      if (typeof(param.length) === 'undefined') {
        if (JSON.stringify(param) === '{}') {
          return true//空值，空对象
        }
      } else if (param.length === 0) {
        return true//空值，空数组
      }
    } else if (param_type === 'string') {
      //如果要过滤空格等字符
      let new_param = param.trim()
      if (new_param.length === 0) {
        //空值，例如:带有空格的字符串" "。
        return true
      }
    } else if (param_type === 'boolean') {
      if (!param) {
        return true
      }
    } else if (param_type === 'number') {
      if (!param) {
        return true
      }
    }
    return false//非空值
  } else {
    //空值,例如：
    //(1)null
    //(2)可能使用了js的内置的名称，例如：var name=[],这个打印类型是字符串类型。
    //(3)空字符串''、""。
    //(4)数字0、00等，如果可以只输入0，则需要另外判断。
    return true
  }
}
