<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addItem"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addItem() {
      //1.检查合法性
      const title=this.title.trim();
      if (!title) {
        alert("请输入值")
        return
      }
      //2.根据输入生成对象
      const todo={
        title,
        complete: false
      }
      //3.添加进集合
      this.$emit('addTodos',todo)
      //4.清空
      this.title=''
    }
  },
}
</script>

<style>

</style>