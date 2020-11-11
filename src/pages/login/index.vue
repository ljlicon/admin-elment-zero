<template>
  <div class="login_page">
    <div class="title">从零到一后台管理框架</div>
    <div>
      <el-form ref="ruleForm" :model="form" :rules="rules">
        <img class="pic" src="../../assets/images/mylogo.jpg" alt />
        <!-- <img class="pic" :src="headPic" alt /> -->
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" plain style="width:100%" @click="login">登录</el-button>
      </el-form>
    </div>
    <div class="foot">从零到一 一手硬撸 By LJL 版权所有 Time 2020-04-19</div>
  </div>
</template>

<script>
import { getToken, getUserInfo } from "../../api/login";
export default {
  name: "login",
  data() {
    return {
      headPic: "",
      form: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 7, message: "名称在 3 到 7 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 7, message: "密码在 3 到 7 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    login() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          getToken(this.form).then(res => {
            if (res.status == 200) {
              getUserInfo({ token: res.result.token }).then(res => {
                console.log(res);
              });
            } else {
              this.$message({
                message: res.message,
                type: "warning"
              });
            }
          });
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.login_page {
  height: 100%;
  width: 100%;
  background: url("../../assets/images/stress.jpg") no-repeat;
  background-size: cover;
  box-sizing: border-box;
  .title {
    font-size: 45px;
    font-weight: 300;
    color: #0bdee6;
    text-align: center;
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
  }
  .foot {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 16px;
  }
}
.el-form {
  padding: 70px 20px 20px 20px;
  width: 400px;
  background: linear-gradient(to top, #088, rgb(11, 222, 230));
  margin: auto;
  top: 300px;
  position: relative;
  .pic {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    // border: 5px solid rgb(124, 124, 121);
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
