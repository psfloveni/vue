<template>
  <!--
    onmouseenter 鼠标移动进来事件
    onmouseleave 鼠标移动出去事件
  -->
  <li @mouseenter='todoShow(true)' @mouseleave='todoShow(false)' :style="{background: bgclour}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteItem" v-show="isShow">删除</button>
  </li>
</template>

<script>
  import PubSub from '../../node_modules/pubsub-js'
export default {
  props: {
    todo: Object,
    index: Number
  },
  data() {
    return {
      bgclour: 'white',
      isShow: false
    }
  },
  methods: {
    deleteItem() {
      const {todo,index}=this
      const title=todo.title
      if(window.confirm("确定删除"+title+"吗")){
        PubSub.publish('deleteTodo',index)
      }
    },
    todoShow(value) {
      if(value){
        this.bgclour= '#aaaaaa'
        this.isShow= true
      }
      else{
        this.bgclour= 'white',
        this.isShow= false
      }
    }
  },
  
}
</script>

<style>
  
</style>