<template>
  <div id="app">
    <p class="teste">teste</p>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$btoast("aaaaa");
    this.$btoast("aaaaa", { isDark: false, duration: 100000000000 });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
