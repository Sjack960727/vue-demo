<template>
  <div>
    <!-- class={类名：布尔值} -->
    <span :class="{ active: flag }">hello world</span>
    <br />
    <button @click="flag = !falg">切换状态</button>

    <!-- style={样式名：样式值} -->
    <span :style="{ 'background-color': color }">style</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true, 
      color:'#357985'
    };
  },
  methods: {},
};
</script>

<style scoped>
.active {
  background-color: rgb(52, 233, 52);
  color: red;
}
</style>
