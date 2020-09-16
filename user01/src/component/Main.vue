<template>
  <div>
    <h2 v-if="firstView">输入用户姓名</h2>
    <h2 v-if="loading">loading....</h2>
    <h2 v-if="errMsg">{{errMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatarUrl" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Pubsub from '../../node_modules/pubsub-js'
  import Axios from '../../node_modules/axios'
export default {
  data() {
    return {
      firstView: true,
      loading: false,
      errMsg: '',
      users: null
    }
  },
  mounted() {
    //订阅搜索的消息
    Pubsub.subscribe("search",(msg,searchName) => { //需要发送 axios
      const url='https://api.github.com/search/users?q='+searchName
      console.log(url)
      //更新状态
      this.firstView=false
      this.loading=true
      this.users=null
      //发ajax请求
      Axios.get(url).then(response => {
         //成功后更新状态
        const result=response.data
        const users=result.items.map(item => ({
          url: item.html_url,
          avatarUrl: item.avatar_url,
          name: item.login
        }))
       
        this.loading=false
        this.users=users
        //失败后更新状态
      }).catch(error => {
        this.loading=false
        this.errMsg= '请求失败'
      })
      
    })
  },
  
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>