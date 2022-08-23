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
      <div class="爱好">
        <label for=""
          ><span>吃饭</span>
          <input type="checkbox" name="" id="" v-model="hobby" value="吃饭"
        /></label>
        <label for=""
          ><span>2</span>
          <input type="checkbox" name="" id="" v-model="hobby" value="2"
        /></label>
        <label for=""
          ><span>3</span>
          <input type="checkbox" name="" id="" v-model="hobby" value="3"
        /></label>
      </div>
      <label for="">
        <select name="" id="" v-model="city">
          <option value="bj">北京</option>
          <option value="sh">上海</option>
          <option value="hz">杭州</option>
        </select> </label
      ><br />

      <label for="">
        <textarea name="" id="" cols="30" rows="10" v-model="txt"></textarea>
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
      // msg: "hello world",
      account: "",
      password: "",
      gender: "",
      hobby: [],
      city: "bj",
      txt: "",
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
