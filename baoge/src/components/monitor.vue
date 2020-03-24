<template>
  <div>
  <div id='app'>
      <el-select v-model='value' placeholder='请选择'
                 popper-class = 'optionsContent'
                 filterable :filter-method='filter'
                 @change='showMessage($event)'
                 @keyup.native = 'showOption'
                 default-first-option>
        <template slot = 'prefix'>
          <span class = 'prefixSlot'>监控地址</span>
        </template>
        <template>
          <div class = 'tableHeader' v-show = 'optionVisible'>
            <span style='float: left'>key</span>
            <span style='float: left;'>label</span>
            <span style='float: left;'>value</span>
          </div>
        </template>
        <el-option
          v-show = 'optionVisible'
          v-for='item in options'
          :key='item.value'
          :label='item.label'
          :value='item'
          :disabled='item.disabled'
        >
          <span style='float: left'>{{ item.key}}</span>
          <span style='float: left'>{{ item.label }}</span>
          <span style='float: left'>{{ item.value }}</span>
        </el-option>
      </el-select>
  </div>
    <div class='content'>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
// import { mapState } from 'vuex'
// import axios from './axios.js'
// import {mapMutations, mapState} from 'vuex'
import axios from './axios.js'
export default {
  data () {
    return {
      optionVisible: true,
      v_company: '',
      v_label: '',
      v_school: '',
      options: [
        // {
        //   value: '1',
        //   key: '2',
        //   label: '3'
        // },
        // {
        //   value: '1',
        //   key: '2',
        //   label: '3'
        // }
      ],
      value: '',
      counta: 1,
      master_user: {
        sel: null,
        columns: [
          {field: 'filename', title: '文件名', width: 120},
          {field: 'filesize', title: '大小', width: 150},
          {field: 'filekeywords', title: '关键字', width: 150}
        ],
        data: []
      }
    }
  },
  // computed: {
  //   ...mapState({
  //     key: state => state.etcd.key
  //   })
  // },
  mounted () {
    var apikeylistaddress = `http://localhost:8082/api/etcd/listallkeys`
    axios.get(apikeylistaddress).then(res => {
      for (let k in res.data.data) {
        var v = res.data.data[k]
        let j = {
          'value': v.etcdvalue,
          'key': v.etcdkey,
          'label': v.label
        }
        this.options.push(j)
      }
    })
    //     axios.interceptors.request.use(config => {
    //   // 设置以 form 表单的形式提交参数，如果以 JSON 的形式提交表单，可忽略
    //   if(config.method  === 'post'){
    //     // JSON 转换为 FormData
    //     // const formData = new FormData()
    //     // Object.keys(config.data).forEach(key => formData.append(key, config.data[key]))
    //     // config.data = formData
    //   }

    //   // config.headers.Authorization = 'Bearer ' + this.jwtToken
    //   config.headers.Authorization = state.user.jwtToken
    //   return config
    //   },error =>{
    //     alert('错误的传参', 'fail')
    //     return Promise.reject(error)
    // })

    // var logAddress = `/logagent/192.168.0.142/logconfig`
    // var logAddress = `a`
    // var fileAddress = `http://localhost:8082/api/etcd/` + logAddress
    // axios.get(fileAddress).then(res => {
    //   for (let k in res.data.data) {
    //     var v = res.data.data[k]
    //     let j = {
    //       'filename': v.filename,
    //       'filesize': v.filesize,
    //       'filekeywords': v.filekeywords,
    //       'isSet': false,
    //       '_temporary': true
    //     }
    //     this.master_user.data.push(j)
    //     this.master_user.sel = JSON.parse(JSON.stringify(j))
    //   }
    // })
  },
  methods: {
    filter (v) {
      // 对绑定数据赋值
      this.options = this.copy.filter((item) => {
        // 如果直接包含输入值直接返回true
        const val = v.toLowerCase()
        if (item.label.indexOf(val) !== -1) return true
        if (item.szm.substring(0, 1).indexOf(val) !== -1) return true
        if (item.szm.indexOf(val) !== -1) return true
      })
    },
    showOption () {
      let inputContent = document.getElementsByClassName('el-input__inner')[0].value
      console.log(inputContent.length)
      if (inputContent.length !== 0) {
        this.optionVisible = true
      }
    },
    showMessage (e) {
      console.log(e)
      this.$store.commit('setEtcdKey', e.label)
      this.$router.push({path: '/index/monitor/filelist'})
      // this.v_company = e.company;
      // this.v_label = e.label;
      // this.v_school = e.school
    },
    generateIdGet () {
      return ((+new Date()) + '_' + (this.counta++))
    },
    readMasterUser () {
      // 根据实际情况，自己改下啊
      this.master_user.data.map(i => {
        i.id = this.generateIdGet() // 模拟后台插入成功后有了id
        i.isSet = false // 给后台返回数据添加`isSet`标识
        return i
      })
    },
    // 添加账号
    addMasterUser () {
      for (let i of this.master_user.data) {
        if (i.isSet) return this.$message.warning('请先保存当前编辑项')
      }
      let j = {
        id: 0,
        'ID': '',
        'Key': '',
        'Value': '',
        'isSet': true,
        '_temporary': true
      }
      this.master_user.data.push(j)
      this.master_user.sel = JSON.parse(JSON.stringify(j))
    },
    // 修改
    pwdChange (row, index, cg) {
      // 点击修改 判断是否已经保存所有操作
      for (let i of this.master_user.data) {
        var idequa = (i.id !== row.id)
        if (i.isSet && idequa) {
          this.$message.warning('请先保存当前编辑项')
          return false
        }
      }
      // 是否是取消操作
      if (!cg) {
        if (!this.master_user.sel.id) {
          this.master_user.data.splice(index, 1)
        }
        var isa = (row.isSet = !row.isSet)
        return isa
      }
      // 提交数据
      if (row.isSet) {
        // 项目是模拟请求操作  自己修改下
        // (function () {
        let data = JSON.parse(JSON.stringify(this.master_user.sel))
        console.log('data:', data)
        axios.post(`http://localhost:8082/api/user/insertOrUpdate`, data).then(res => {
          for (let k in data) row[k] = data[k]
          if (res.data.status === true) {
            this.$message({
              type: 'success',
              message: '保存成功!'
            })
            // 然后这边重新读取表格数据
            this.readMasterUser()
            row.isSet = false
          } else {
            this.$message({
              type: 'fail',
              message: '保存异常!'
            })
          }
        })
      // })()
      } else {
        this.master_user.sel = JSON.parse(JSON.stringify(row))
        row.isSet = true
      }
    }
  }
}
</script>
<style>
  .rowStyle{
    background-color:#f0f9eb!important;
  }
  .el-select-dropdown__item span{
    width:200px;
    text-align:center;
  }
  .el-input--prefix .el-input__inner {
    padding-left: 110px;
  }
  .prefixSlot{
    height: 36px;
    width: 90px;
    display: block;
    line-height: 36px;
    border-right: 1px solid #f1f1f1;
  }
  .tableHeader{
    background:rgb(64, 158, 255);
    color:#fff;
    height: 40px;
    line-height: 40px;
    font-size:14px;
    font-family:HiraginoSansGB-W3;
    font-weight:600;
    padding: 0 20px;
  }
  .tableHeader span{
    width:200px;
    text-align: center;
  }
  .title{
    margin-left:20px;
    width:400px;
  }
  .title span{
    display:block;
    width:150px;
    margin-bottom: 20px;
    font-weight: 800;
  }
  .popper__arrow{
    display: none!important;
  }
  .el-select-dropdown{
    box-shadow: none!important;
    min-width: 0px;
    border:0!important;
  }
  .el-scrollbar__view{
    padding:0;
    background: #ebf3ff;
  }
</style>
