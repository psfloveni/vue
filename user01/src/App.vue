<template>
  <div class="container">
    <Search/>
    <UsersMain/>
  </div>
</template>

<script>
  import Search from './component/Search.vue'
  import Main from './component/Main.vue'
export default {
components: {
  Search,
  UsersMain: Main
}
}

</script>

<style>

</style>