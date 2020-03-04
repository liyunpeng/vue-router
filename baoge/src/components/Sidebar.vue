<template>
  <div>
    <el-container>
      <el-aside  style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>VUE基础</template>
              <el-menu-item index="/index/home">home</el-menu-item>
              <el-menu-item index="/index/input">行编辑</el-menu-item>
              <el-menu-item index="/index/slotparent">槽</el-menu-item>
              <el-menu-item index="/index/state">state用法</el-menu-item>
              <el-menu-item index="/index/swiper">滑动组件</el-menu-item>
              <el-menu-item index="/index/emitupper">emit向上级发送事件</el-menu-item>
              <el-menu-item index="/index/parent">父组件</el-menu-item>
            <el-menu-item index="/index/menutable">menutable</el-menu-item>
            <el-menu-item index="/index/mixindemo">mixindemo</el-menu-item>
            <el-menu-item index="/index/me">me</el-menu-item>
              <el-menu-item index="/index/scss">scss</el-menu-item>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  methods: {

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
