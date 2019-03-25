<template>
  <div class="todo-item">
    <p>
      {{todo.title | capitalize | readMore(50, '...')}}
      <button
        @click="$emit('delete-todo', todo.id)"
        class="del"
      >x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>