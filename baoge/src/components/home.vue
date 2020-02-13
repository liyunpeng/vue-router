<template>
    <div>
        <el-input v-model="name" placeholder="Please input" style="width:400px;max-width:100%;" ></el-input>
        <h1>home</h1>
        <h1>{{this.$store.state.count}}</h1>
        <p>{{msg}}</p>
        <p>{{name}}</p>
        <el-radio v-model="radio" label="1">备选项1</el-radio>
        <el-radio v-model="radio" label="2">备选项2</el-radio>
        <div v-loading="isLoading">这块内容使用v-loading指令，true时loading</div>
        <el-button @click=handle>{{clickText}}</el-button>
        <el-input v-model="namea" @change="handleChange"></el-input>
        <el-input v-model="nameb" @change="actionnum6"></el-input>
         <p>{{namea}}</p>
         <p>{{nameb}}</p>
        <el-time-select v-model="value1" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"></el-time-select>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: '我是home 组件',
      radio: '1',
      name: 'namename',
      namea: 'namenam1e',
      nameb: 'nameb',
      isLoading: true,
      value1: '',
      clickText: '取消loading'
    }
  },

  methods: {
    initTotal () {
      this.$axios.get(`/geta/`, {
        params: {
          query: this.namea
        }
      }).then(res => {
        this.nameb = res.data
      })
    },
    onSubmit () {
      this.$axios.get(`/getb/`, {
        params: {
          query: this.formInline,
          limit: this.limit,
          offset: this.offset
        }
      }).then(res => {
      })
    },
    ...mapMutations({
      addnum: 'addNum'
    }),
    addnum1 () {
      this.addnum()
    },

    ...mapActions({
      actionnum: 'actionNumAdd'
    }),
    actionnum6 () {
      this.actionnum()
    },

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
  },
  created () {
    this.$store.commit('changeIsHome')
  },
  mounted () {
    this.initTotal()
    this.onSubmit()
  }
}
</script>
<style>
  @import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
</style>
