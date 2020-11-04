<template>
  <div id="app">
      <h3>Vuex State Management</h3>
    <div class="container">
      <AddTodo/>
      <FilterTodos/>
      <Todos/>
    </div>
  </div>
</template>

<script>
import Todos from "./component/Todo.vue";
import AddTodo from "./component/AddTodo.vue";
import FilterTodos from "./component/FilterTodos.vue";

export default {
  name: "vuex-app",
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
