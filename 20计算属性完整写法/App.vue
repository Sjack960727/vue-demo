<template>
  <div>
    <span>{{ fullName }}</span>
    <br />
    <button @click="fullName = '李四'">改变名字</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "zhang",
      lastName: "san",
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + this.lastName;
      },
      set(msg) {
        this.firstName = msg[0];
        this.lastName = msg[1];
      },
    },
  },
};
</script>

<style></style>
