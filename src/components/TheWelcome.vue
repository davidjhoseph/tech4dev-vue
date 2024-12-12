<script>

export default {
  beforeDestroy() {
    console.log("BeforeDestroy TheWelcome");
  },
  destroy() {
    console.log("destroy TheWelcome");
  },
}
</script>

<template>
  <div>Welcome Here</div>
</template>
