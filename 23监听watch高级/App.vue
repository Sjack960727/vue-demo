<template>
  <div>
    <span>姓名</span>
    <input type="text" name="" id=" " v-model="person.name" /><br />
    <span>年龄</span> <input type="text" name="" id=" " v-model="person.age" />
    <button @click="change">改变person</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: "张三",
        age: "18",
      },
    };
  },
  watch: {
    // person: {
    //   immediate: true,
    //   deep: true,
    //   handler(a, b) {
    //     console.log("person被改变了", a.name);
    //   },
    person: "report",
  },
  methods: {
    report() {
      console.log(111);
    },
    change() {
      this.person = { name: "zs" };
    },
  },
};
</script>

<style></style>
