<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodosHead @addTodos='addTodos'/><!--@addTodo:自定义事件名，"addTodo" 回调函数-->
        <TodosList :todos="todos"/>
        <TodosFoot :todos="todos" :selectAllTodos="selectAllTodos" :deleteCompleteTodos="deleteCompleteTodos"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TodosHead from './components/TodosHead.vue'
  import TodosList from './components/TodosList.vue'
  import TodosFoot from './components/TodosFoot.vue'

  import storageUtil from './util/storageUtil.js'
  import PubSub from '../node_modules/pubsub-js'
  export default {
    data() {
      return {
        // todos: [
        //   {
        //     title: 'aaa',
        //     complete: false
        //   },
        //   {
        //     title: 'bbb',
        //     complete: false
        //   },
        //   {
        //     title: 'ccc',
        //     complete: false
        //   },
        // ]
        todos: storageUtil.readTodos()
      }
    },
    mounted() {
      
      //pubsub 订阅消息
      PubSub.subscribe('deleteTodo',(msg,index) => {
        this.deleteTodo(index)
      })
    },
    methods: {
      addTodos(todo) {
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      //全部选中/不选
      selectAllTodos(check){
        this.todos.forEach((todo) => todo.complete=check) //过滤todos中todo.complete为true的
      },
      //清除选中
      deleteCompleteTodos() {
        this.todos=this.todos.filter(todo => !todo.complete)
      }
    },
    
    components: {
      TodosHead,TodosList,TodosFoot
    },
    watch: { //监视
      deep: true, //深度监视
      handler: function(value){ //回调会在监听后立即调用
        storageUtil.saveTodos(value)
      }
    },

  }
</script>

<style>

</style>