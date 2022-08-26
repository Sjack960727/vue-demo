<template>
  <div>
    <span>输入数字 </span><input type="number" name="" id="" v-model="txt" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: "",
    };
  },
  watch: {
    txt(a, b) {
      console.log("txt被改变", a, b);
    },
  },
};
</script>

<style></style>
