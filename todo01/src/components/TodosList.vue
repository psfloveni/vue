<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
  </ul>
</template>

<script>
  import TodoItem from './TodoItem.vue'
  export default {
    props: {
      todos: Array
    },
    components: {
      TodoItem
    }
  }
</script>

<style>

</style>