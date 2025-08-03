import Homepage from "@/components/Home/Homepage.vue";
import Contact from "@/components/Home/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: "/",
         component: Homepage,
      },
      {
         path: "/contact",
         component: Contact,
      },
   ]
});

export default router;