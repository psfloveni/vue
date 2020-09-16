<template>
  <div class="todo-footer">
    <label>
       <input type="checkbox" v-model="checkAll"/> 
      <!-- <slot name="check"></slot>  -->
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props:{
    todos: Array,
    selectAllTodos: Function,
    deleteCompleteTodos: Function
  },
  computed: {
    completeSize (){
      //reduce()方法，前一个获取的值+complete(true==1)的值，从0开始计算
      return this.todos.reduce((total,todo) => total+(todo.complete?1:0),0) 
    },
    checkAll: {
      get () {
        // 决定是否勾选
        return this.completeSize===this.todos.length && this.completeSize>0
      },
      // 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
      set (value) {
        this.selectAllTodos(value)
      }
    }
  },
  methods: {
    deleteAllCompleted (){
      if(window.confirm('确定清除已完成的吗?')) {
          this.deleteCompleteTodos()
        }
    }
  },
}
</script>

<style>
  
</style>