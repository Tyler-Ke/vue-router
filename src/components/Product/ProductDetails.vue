<template>
   <div>
      <h1>Product Details</h1>
      <div v-if="route.params.productId">
         <p>Product ID: {{ route.params.productId }}</p>
      </div>
      <div v-else>
         <p>No Product ID found</p>
      </div>
      <div v-if="route.params.productId">
         <p>Category ID ID: {{ route.params.categoryId }}</p>
      </div>
      <div v-else>
         <p>No Category ID found</p>
      </div>
   </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params);
</script>
