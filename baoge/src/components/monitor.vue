<template>
  <div id='app'>
    <el-row>
      <el-col span='24'>
        <el-table size='mini' :data='master_user.data' border style='width: 100%' highlight-current-row>
          <el-table-column type='index'></el-table-column>
          <el-table-column v-for='(v,i) in master_user.columns' :prop='v.field' :label='v.title' :width='v.width'>
            <template slot-scope='scope'>
              <span v-if='scope.row.isSet'>
                  <el-input size='mini' placeholder='请输入内容' v-model='master_user.sel[v.field]'>
                  </el-input>
              </span>
              <span v-else>{{scope.row[v.field]}}</span>
            </template>
          </el-table-column>
          <el-table-column label='操作' width='100'>
            <template slot-scope='scope'>
              <span class='el-tag el-tag--info el-tag--mini' style='cursor: pointer'
                    @click='pwdChange(scope.row,scope.$index,true)'>
                {{scope.row.isSet?'保存':'修改'}}
              </span>
              <span v-if='!scope.row.isSet' class='el-tag el-tag--danger el-tag--mini' style='cursor: pointer'>
                删除
              </span>
              <span v-else class='el-tag  el-tag--mini' style='cursor: pointer'
                    @click='pwdChange(scope.row,scope.$index,false)'>
                取消
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col span='24'>
        <div class='el-table-add-row' style='width: 99.2%' @click='addMasterUser()'><span>+ 添加</span></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import axios from 'axios'
import { mapState } from 'vuex'
import axios from './axios.js'
export default {
  data () {
    return {
      counta: 1,
      master_user: {
        sel: null,
        columns: [
          {field: 'filename', title: '文件名', width: 120},
          {field: 'filesize', title: '大小', width: 150},
          {field: 'filekeywords', title: '关键字', width: 150},
        ],
        data: []
      }
    }
  },
  mounted () {
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
    //     alert("错误的传参", 'fail')
    //     return Promise.reject(error)
    // })

    // var logAddress = `/logagent/192.168.0.142/logconfig`
    var logAddress = `a`
    var fileAddress = `http://localhost:8082/api/etcd/` + logAddress
    axios.get(fileAddress).then(res => {
      for (let k in res.data.data) {
        var v = res.data.data[k]
        let j = {
          'filename': v.filename,
          'filesize': v.filesize,
          'filekeywords': v.filekeywords,
          'isSet': false,
          '_temporary': true
        }
        this.master_user.data.push(j)
        this.master_user.sel = JSON.parse(JSON.stringify(j))
      }
    })
  },
  methods: {
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
        var idequa = (i.id != row.id)
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
  .el-table-add-row {
    margin-top:      10px;
    width:           100%;
    height:          34px;
    border:          1px dashed #c1c1cd;
    border-radius:   3px;
    cursor:          pointer;
    justify-content: center;
    display:         flex;
    line-height:     34px;
  }
</style>
