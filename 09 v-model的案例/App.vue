<template>
  <div>
    <!-- <input type="text" name="" id="" @keydown.enter="onIpt" /> -->

    <!-- <input type="text" v-model="msg" /> -->
    <!-- ？ v-model的案例 -->
    <form action="">
      <label for="">
        <span>账号</span>
        <input type="text" name="" id="" v-model="account" /></label
      ><br />
      <label for="">
        <span>密码</span>
        <input type="password" name="" id="" v-model="password" /></label
      ><br />
      <label for="">
        <span>男：</span>
        <input type="radio" name="gender" id="" value="男" v-model="gender" />
      </label>
      <label for="">
        <span>女：</span>
        <input type="radio" name="gender" id="" value="女" v-model="gender" />
      </label>
    </form>
  </div>
</template>

<script>
//事件修饰符   .stop .once .prevent
// 键盘修饰符  .esc  .enter

//v-model  双向数据绑定 基础
export default {
  data() {
    return {
      msg: "hello world",
      account: "",
      password: "",
      gender: "",
    };
  },
  methods: {
    // onIpt() {
    //   console.log("a");
    // },
  },
};
</script>

<style scoped></style>
