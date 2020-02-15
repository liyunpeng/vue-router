/**
 * @description  地址选择插件
 * 依赖插件 v-distpicker
 * 安装 npm install v-distpicker --save
 * 挂在到全局
 * import cityPicker from '@/components/common/city-selected.js'
 * Vue.$cityPicker = Vue.prototype.$cityPicker = window.$cityPicker = cityPicker;
 * 调用方式  返回一个Promise对象
 * this.$cityPicker()
 .then(res=>{
    console.log('res', res)
  })

 *注：文件引用一定要使用import的方式，使用require的话会加载模板失败
 *导致创建的对象模板没有 内容
 */

import Vue from 'vue'
import citySelectTem from './city-selected.vue'
//  保存Promise的resolve和reject方法
let currentMsg = null
let instance = null //  创建实例的时候使用

const Constructor = Vue.extend(citySelectTem)
//  删除dom节点方法
const removeDom = event => {
  event.target.parentNode.removeChild(event.target)
}

// eslint-disable-next-line no-unused-vars
function changeArea (option = {}) {
  // 给当前对象的原型添加callBack方法
  Constructor.prototype.callBack = defaultCallBack
  // 创建并挂在组件
  instance = new Constructor().$mount(document.createElement('div'))
  // 将组建添加到body
  document.body.appendChild(instance.$el)
  // 让当前实例监听animationend事件，就是我们在给元素添加animation的时候会触发
  instance.$el.addEventListener('animationend', removeDom, false)
  //  弹出层再次隐藏时时销毁组件

  return new Promise((resolve, reject) => {
    // 使用变量保存两个参数，后边调用
    currentMsg = { resolve, reject }
  })
}
// 父元素的callBack方法
function defaultCallBack (action) {
  if (!action) currentMsg.reject('cancel')
  currentMsg.resolve(action)
}
export default citySelect
