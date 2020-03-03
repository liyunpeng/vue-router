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
        <el-input v-model="axiosget" @change="handleChange"></el-input>
        <el-input v-model="nameb" @change="mapaction"></el-input>
         <p>axios get : {{axiosget}}</p>
         <p>{{nameb}}</p>
        <el-time-select v-model="value1" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"></el-time-select>
        <div class="div1">
          <p class="p1">text </p>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
import {mixin} from '../mixin/mixin'
export default {
  mixins: [ mixin ],
  data () {
    return {
      msg: '我是home 组件',
      radio: '1',
      name: 'namename',
      axiosget: 'namenam1e',
      nameb: 'nameb',
      isLoading: true,
      value1: '',
      clickText: '取消loading'
    }
  },

  methods: {
    initTotal () {
      this.$axios.get(`http://localhost:8082/api/user/2`, {
      // this.$axios.get(`/v1/admin/resps_json/'`, {
        params: {
        }
      }).then(res => {
        this.axiosget = res.data
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
    mapaction () {
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
    console.log('mounted ok')
  }
}
</script>
<style>
  @import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
  .div1 > .p1 {
    color: red;
  }
</style>
