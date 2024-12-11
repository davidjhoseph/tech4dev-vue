<script>
export default {
  props: {
    msg: {
      type: String,
    },
    people: {
      type: String,
    },
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div>
    <h1>{{ msg }} Hey there {{people}}</h1>
  </div>
</template>