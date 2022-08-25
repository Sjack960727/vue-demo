<template>
  <div>
    <span>{{ msg | toUpper('aaa','bbb') }} </span>


    <span> {{ txt | toUpper('','cccc') |toLower }}</span>
  </div>
</template>

<script>
// 1局部过滤器 filter:{}
//2全局过滤器  在全局 Vue.filter
export default {
  data() {
    return {
      msg: "hello",
      txt: "world",
    };
  },
  filters: {
    toUpper(msg,a,b) {
      console.log(a,b);
      return msg.toUpperCase();
    },
  },
};
</script>

<style></style>
