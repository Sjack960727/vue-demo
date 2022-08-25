<template>
  <div>
    <span> {{ person }}</span>
    <button @click="changeName">修改名称</button>
    <button @click="delName">删除名称</button>
    <button @click="addSex">增加性别</button>
    <hr />
    <span> {{ arr }}</span>
    <button @click="reverseArr">翻转数组</button>
    <button @click="changeArr">改变数组</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: "zs",
        age: 18,
      },
      arr: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    changeName() {
      this.person.name = "55555";
    },
    // $set(数据源，修改数据名，修改数据值)
    delName() {
      console.log(111);
      // delete this.person.name;
      this.$delete(this.person, "name");
      // this.$set(this.person, "name", undefined);
    },
    addSex() {
      // this.person = {
      //   name: "zs",
      //   age: 18,
      //   sex: "男",
      // };
      this.$set(this.person, "sex", "男");
    },
    reverseArr() {
      this.arr.reverse();
    },
    changeArr() {
      this.arr = this.arr.map((item) => (item == 5 ? "666" : item));

      this.$set(this.arr, 2, 333);
    },
  },
};
</script>

<style></style>
