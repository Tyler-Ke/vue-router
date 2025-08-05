import Homepage from "@/components/Home/Homepage.vue";
import Contact from "@/components/Home/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetails from "@/components/Product/ProductDetails.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         component: Homepage,
      },
      {
         path: "/contact-us",
         component: Contact,
         name: "contact"
      },
      {
         path: "/contact",
         redirect: {name: "contact"},
      },
      {
         path: "/productlist",
         component: ProductList,
      },
      {
         path: "/product/:productId/:categoryId?",
         component: ProductDetails,
         name: "productDetails",
         props: true,
      },
      {
         path: "/product",
         component: ProductDetails,
      },
   ],
});

export default router;
