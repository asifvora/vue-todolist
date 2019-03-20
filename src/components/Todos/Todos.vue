<template>
  <div>
    <div v-for="todo in todos" v-bind:key="todo.id">
      <TodoItem v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)"/>
    </div>
    <div class="no-record" v-if="todos && todos.length === 0">No todos yet</div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
};
</script>

<style>
.loading,
.no-record {
  text-align: center;
  padding: 10px;
}
</style>
