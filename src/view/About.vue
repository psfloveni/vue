<template>
  <div>
    <h1>about</h1>
    <hr>
    <p>{{msg}}</p>
    <input type="text" @keyup.enter="clickEnter">
  </div>
</template>

<script>
  import router from '../router'
export default {
  props: {
    msg: String
  },
  methods: {
    clickEnter(){
      const userId=1*1
      //router.push({path:`home/message/messageDetal/${userId}`})
      //router.push({ name: 'messageDetal', params: { id: `${userId}` }})
      this.$router.back()
    }
  },
}
</script>

<style>

</style>