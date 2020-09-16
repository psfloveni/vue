<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="onSearch">Search</button>
    </div>
  </section>
</template>

<script>
  import Pubsub from '../../node_modules/pubsub-js'
export default {
  data() {
    return {
      searchName: ''
    }
  },
  methods: {
    onSearch(){
      const searchName=this.searchName.trim()
      if (searchName) {
        //发布搜索消息
        Pubsub.publish("search",searchName)
      }
      
    }
  },
}
</script>

<style>

</style>