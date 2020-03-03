<template>
  <div class="main">
    <div class="register" v-else key="register">
      <el-form :model="register_form" status-icon :rules="rules" ref="ruleForm" label-width="70px">
        <el-form-item label="用户名" prop="username" style="margin-top:70px">
          <el-input type="text" v-model="register_form.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" style="margin-top:40px">
          <el-input type="text" v-model="register_form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="margin-top:40px">
          <el-input type="password" v-model="register_form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" style="margin-top:40px">
          <el-input type="password" v-model="register_form.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin-top:40px;">
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
