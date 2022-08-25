<template>
  <div>
    <input type="text" name="" id="" v-model.number="msg1" />
    <br />
    <input type="text" name="" id="" v-model.trim="msg2" />
    <br />
    <input type="text" name="" id="" v-model.lazy="msg3" />
  </div>
</template>

<script>
//v-model  双向数据绑定 基础
// v-model的修饰服
// .trim  .lazy 相当于change  .number

// v-text 不识别表情  v-html 识别标签
export default {
  data() {
    return {
      msg1: "",
      msg2: "",
      msg3: "",
    };
  },
  methods: {},
};
</script>

<style scoped></style>
