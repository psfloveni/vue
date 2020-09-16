<template>
  <div>
    <h1>ID: {{$route.params.id}}</h1>
    <ul>
      <li>id:{{messageDetail.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        messageDetail: {}
      }
    },
    mounted(){
      window.setTimeout(() => {
        const seleteMessages=[
        {
          id: 1,
          title: 'message01',
          content: 'message01'
        },
        {
          id: 2,
          title: 'message02',
          content: 'message02'
        },
        {
          id: 3,
          title: 'message03',
          content: 'message03'
        }
      ]
      this.seleteMessages=seleteMessages
      const id=this.$route.params.id*1
      this.messageDetail=seleteMessages.find(message => message.id===id)
      },1000)
    },
    watch: {
      //监视￥route当前的value值，一调用说明改了
      $route: function(value){
        const id=value.params.id*1
        this.messageDetail=this.seleteMessages.find(message => message.id===id)
      }
    },

  }
</script>

<style>

</style>