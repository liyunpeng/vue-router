<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是home 组件',
      radio: '1'
    }
  },
  name: 'data外的变量',
  age: 12,
  func1 () {
    console.log('func1')
  },
  created () {
    console.log(this.$options.name)
    console.log(this.$options.age)
    this.$options.func1()
  }
}
</script>
