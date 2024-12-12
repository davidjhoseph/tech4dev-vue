<template>
  <main>
  </main>
</template>
<script>
import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '../components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: { TheWelcome, HelloWorld },
  data() {
    return {
      products: [],
      product: null,
      isLoading: false,
    }
  },
  mounted(){
    this.fetchProducts();
  },
 
  methods: {
    async fetchProducts(){
      this.isLoading = true;
      try {
        const res = await this.axios.get('https://fakestoreapi.com/products');
        this.products = res.data;
        // await setTimeout(async () => {
        //   const res = await this.axios.get('https://fakestoreapi.com/products');
        //   this.products = res.data;
        // }, 2000);
      }catch(e) {
        console.log(e)
      } finally {
        this.isLoading = false;
      }
    }
  },
}
</script>