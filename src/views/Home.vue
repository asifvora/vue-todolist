<template>
  <div class="home">
    <AddTodo v-on:add-todo="addTodo" ref="form"/>
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo"/>
    <FullPageLoader v-bind:isShow="isLoading"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from "@/components/Todos/Todos.vue";
import AddTodo from "@/components/Todos/AddTodo.vue";
import FullPageLoader from "@/components/FullPageLoader/FullPageLoader.vue";
import { Todo } from "@/utils/API";

export default {
  name: "home",
  components: {
    AddTodo,
    Todos,
    FullPageLoader
  },

  data() {
    return {
      todos: [],
      isLoading: false
    };
  },

  methods: {
    addTodo(newTodo) {
      this.isLoading = true;
      Todo.addTodo(newTodo)
        .then(res => {
          this.todos = [...this.todos, res];
          this.isLoading = false;
          this.$refs.form.resetForm();
        })
        .catch(err => (this.isLoading = false));
    },

    deleteTodo(id) {
      this.isLoading = true;
      Todo.deleteTodo(id)
        .then(res => {
          this.todos = this.todos.filter(todo => todo.id !== id);
          this.isLoading = false;
        })
        .catch(err => (this.isLoading = false));
    }
  },

  mounted() {
    this.isLoading = true;
    Todo.getTodos(5)
      .then(res => {
        this.todos = res ? res : [];
        this.isLoading = false;
      })
      .catch(err => (this.isLoading = false));
  }
};
</script>