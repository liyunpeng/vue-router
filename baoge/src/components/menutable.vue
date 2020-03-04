<template>
  <div>
    <!-- 因为template里面只能有一个根元素，官方这里拷过来以后在外面加了一层div标签包起来 -->
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <p>axios get : {{axiosget}}</p>
          <el-table :data="tableData">
            <el-table-column prop="ID" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="CreatedAt" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="UpdatedAt" label="地址">
            </el-table-column>
            <el-table-column prop="DeletedAt" label="地址">
            </el-table-column>
            <el-table-column prop="salt" label="地址">
            </el-table-column>
            <el-table-column prop="username" label="地址">
            </el-table-column>
            <el-table-column prop="languages" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    var item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(2).fill(item)
    }
  },
  methods: {
    initTotal () {
      this.$axios.get(`http://localhost:8082/api/user/2`, {
        // this.$axios.get(`/v1/admin/resps_json/'`, {
        params: {}
      }).then(res => {
        this.axiosget = res.data.data
        // var item = {
        //   date: '2016-05-02',
        //   name: '王小',
        //   address: res.data.msg
        // }
        // this.tableData = res.data.data
        this.tableData = Array(2).fill(res.data.data)
        // this.tableData = res.data
      })
    }
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
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
