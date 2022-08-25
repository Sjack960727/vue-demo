<template>
  <div>
    <!-- 1 -->
    <div>
      <ul>
        <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
      </ul>
      <button @click="changeArr">点击变化</button>
    </div>
    <br />
    <hr />
    <!-- 2 -->
    <div>
      <ul>
        <li v-for="(item, index) in num" :key="index">
          {{ item }} <button @click="delNum(index)">删除</button>
        </li>
      </ul>
      <button @click="getRandom">生成随机数</button>
    </div>
    <hr />
    <!-- 3 -->
    <div id="app">
      <table class="tb">
        <tr>
          <th>编号</th>
          <th>品牌名称</th>
          <th>创立时间</th>
          <th>操作</th>
        </tr>
        <!-- 循环渲染的元素tr -->
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.time }}</td>
          <td>
            <button @click="delList(index)">删除</button>
          </td>
        </tr>
        <tr>
          <td colspan="4" v-show="list.length == 0">没有数据咯~</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["帅哥", "美女", "程序员"],
      num: [],
      list: [
        { id: 1, name: "奔驰", time: "2020-08-01" },
        { id: 2, name: "宝马", time: "2020-08-02" },
        { id: 3, name: "奥迪", time: "2020-08-03" },
      ],
    };
  },
  methods: {
    changeArr() {
      //要用数组方法，push、pop、shift、unshift、splice、sort、reverse
      this.arr = [this.arr[1], this.arr[2], this.arr[0]];
      // [this.arr[0], this.arr[1], this.arr[2]] = [
      //   this.arr[1],
      //   this.arr[2],
      //   this.arr[0],
      // ];
      // console.log(this.arr);

      // this.arr.push(this.arr[0]);
      // this.arr.shift();
    },
    getRandom() {
      this.num.push(Math.floor(Math.random() * 10));
      // console.log(this.num);
    },
    delNum(index) {
      // console.log(index)
      this.num.splice(index, 1);
    },
    delList(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>

<style scoped>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
