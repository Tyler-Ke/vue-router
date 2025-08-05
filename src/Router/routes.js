import Homepage from "@/components/Home/Homepage.vue";
import Contact from "@/components/Home/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetails from "@/components/Product/ProductDetails.vue";
import NotFound from "@/components/Layout/NotFound.vue";
import Login from "@/components/Authentication/Login.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         component: Homepage,
         name: "home"
      },
      {
         path: "/contact-us",
         component: Contact,
         name: "contact",
      },
      {
         path: "/contact",
         redirect: { name: "contact" },
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
      {
         path: "/:catchAll(.*)",
         component: NotFound,
      },
      {
         path: "/login",
         component: Login,
         name: "login",
      },
   ],
});

router.beforeEach((to, from) => {
   console.log("Global Before Each");
   console.log(to, from);
   //check if user is auth, else redirect to login
   const isAuthenticated = false;
   
   if(to.name == "home") {
      return true;
   }

   if(!isAuthenticated && to.name !=="login") {
      return "/login"
   };

   return true;
});

export default router;
