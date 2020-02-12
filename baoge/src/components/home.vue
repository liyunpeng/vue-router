<template>
    <div>
        <el-input v-model="name" maxlength="10"></el-input>
        <h1>home</h1>
        <p>{{msg}}</p>
        <p>{{name}}</p>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <div v-loading="isLoading">这块内容使用v-loading指令，true时loading</div>
        <el-button @click=handle>{{clickText}}</el-button>
        <el-input v-model="name" @change="handleChange"></el-input>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是home 组件',
      radio: '1',
      name: 'namename',
      isLoading: true,
      clickText: '取消loading'
    }
  },

  methods: {
    handle () {
      this.isLoading = !this.isLoading
      if (this.isLoading) {
        this.clickText = '取消loading'
      } else {
        this.clickText = '继续loading'
      }
    },
    handleChange (value) {
      // 监听事件的处理方法，回调时会获取到修改后的值
      alert(`值被修改为：${value}`)
    }
  }
}
</script>
