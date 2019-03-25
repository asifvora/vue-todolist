<template>
  <div>
    <form @submit.prevent="addTodo">
      <input
        :class="{ 'hasError': $v.form.title.$error }"
        type="text"
        v-model="form.title"
        placeholder="Add Todo..."
        v-focus
      >
      <input type="submit" value="Submit" class="btn" :disabled="$v.form.$error">
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "AddTodo",
  data() {
    return {
      form: {
        title: null
      }
    };
  },

  validations: {
    form: {
      title: { required }
    }
  },

  methods: {
    addTodo() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      const { title } = this.form;
      const newTodo = { title: title, completed: false };
      // Send up to parent
      this.$emit("add-todo", newTodo);
    },

    resetForm() {
      this.form.title = null;
      this.$v.form.$reset();
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
}
.hasError {
  border: 1px solid rgb(199, 199, 199);
  padding: 0.3rem 0.5rem;
  border-color: red;
}
input[type="submit"] {
  flex: 2;
}
</style>
