<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    updateCounter(type = 'add') {
      if (type === 'add') {
        this.counter++
      } else {
        this.counter--
      }
    }
  },
  beforeDestroy() {
    console.log("BeforeDestroy HelloWorld");
  },
  destroy() {
    console.log("destroy HelloWorld");
  },
}
</script>

<template>
  <div>
    <div>Hello World</div>
    <div>{{ counter }}</div>
    <button @click="updateCounter('subtract')">-</button>
    <button @click="updateCounter('add')">+</button>
  </div>
</template>