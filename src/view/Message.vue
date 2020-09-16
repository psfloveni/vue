<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- <router-link :to="`/home/message/messageDetal/${message.id}`">{{message.title}}</router-link> -->
        <router-link :to="{ name: 'messageDetal', params: { id: `${message.id}` }}">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push</button>
        <button @click="replaceShow(message.id)">replace</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data()
    {
      return {
        messages: []
      }
    },
    mounted()
    {
      window.setTimeout(() =>
      {
        const messages = [
          {
            id: 1,
            title: 'message01'
          },
          {
            id: 2,
            title: 'message02'
          },
          {
            id: 3,
            title: 'message03'
          }
        ]
        this.messages = messages
      }, 1000)
    },
    methods: {
      pushShow(id)
      {
        this.$router.push(`/home/message/messageDetal/${id}`)
      },
      replaceShow(id)
      {
        this.$router.replace(`/home/message/messageDetal/${id}`)
        
      },
    },
  }
</script>

<style>

</style>