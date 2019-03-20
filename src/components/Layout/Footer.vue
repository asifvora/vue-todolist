<template>
  <footer class="footer">
    <span>&copy; {{ year.getFullYear() }}</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date()
    };
  }
};
</script>

<style scoped>
.footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.footer span {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>

