<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/fruits">水果</router-link> 
      </li>
      <li>
        <router-link to="/vegetables">蔬菜</router-link> 
      </li>
    </ul>
    <div class="show-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin: 0;
  padding: 0;
  }
li {
  list-style: none;
  display: inline-block;
}
</style>
