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
    <!-- <button @click="sayHi('你好', $event)">点击sayhi</button>
    <br />
    <button v-on:click="num++">num++</button>
    <span> {{ num }}</span> -->
    <!-- 反转字符串 -->
    <h1>{{ msg }}</h1>
    <button @click="reversWorld">反转信息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "aaaaa",
      url: "http://www.zhihu.com/",
      num: 0,
      msg: "Hello, world!",
    };
  },
  methods: {
    sayHi(msg, e) {
      console.log(msg);
      console.log("e:", e);
    },
    reversWorld() {
      // console.log(111);
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>

<style scoped>
h1 {
  color: #77879a;
}
</style>
