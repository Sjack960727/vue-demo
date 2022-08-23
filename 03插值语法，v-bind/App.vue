<template>
  <div>
    <!-- <h1>hello,vue</h1>
    <span>数字{{ 1 }}</span>
    <br />
    <span> {{ new Date() }}</span>
    <br />
    <span>{{ [1, 2, 3] }}</span>
    <br />
    <span>{{ a }}</span>
    <br />
    <a :href="url" target="black"> 知乎 用:写</a>
    <br />
    <a v-bind:href="url" target="black"> 知乎 v-bind</a> -->

    <button @click="sayHi">点击sayhi</button>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "aaaaa",
      url: "http://www.zhihu.com/",
    };
  },
  methods: {
    sayHi: function () {
      alert("Hello");
    },
  },
};
</script>

<style scoped>
h1 {
  color: #77879a;
}
</style>
