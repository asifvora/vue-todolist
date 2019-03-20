<template>
  <header class="header">
    <h1 class="logo-text">TodoList</h1>
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  background: #333;
  color: #fff;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
.logo-text {
  display: inline-block;
  float: left;
}
.nav {
  display: inline-block;
  float: right;
  padding: 10px;
}
</style>

