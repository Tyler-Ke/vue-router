<template>
   <div>Home Page</div>
   <button @click="goToContact()">Click</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToContact() {
   //router.push({name: 'contact'})
   router.push("/contact-us")
}
</script>