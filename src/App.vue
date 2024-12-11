<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
export default {
  data(){
    return {
      routeName: 'about',
      helloMessage: "Hello World",
      youtube: "https://www.youtube.com/",
      users: [
       
      ]
    }
  },
  components: { HelloWorld },
  methods: {
    loopSomething() {
      
    },
    deleteItem(index) {
      this.users.splice(index, 1);
    }
  }
}
</script>

<template>
  <div>
    <RouterLink :to="{name: 'home'}">Home</RouterLink>
    <br />
    <RouterLink :to="{ name: routeName }">About</RouterLink>
    <ul>
      <li v-for="(user, index) in users" @click="deleteItem(index)" :key="index">{{user.name}} {{ index }}</li>
    </ul>
    <RouterView />
  </div>
</template>

