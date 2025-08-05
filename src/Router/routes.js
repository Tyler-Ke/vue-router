import Homepage from "@/components/Home/Homepage.vue";
import Contact from "@/components/Home/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetails from "@/components/Product/ProductDetails.vue";
import NotFound from "@/components/Layout/NotFound.vue";
import Login from "@/components/Authentication/Login.vue";
import NoAccess from "@/components/Layout/NoAccess.vue";

function isAdmin() {
   const isAdmin = true;

   if (!isAdmin) {
      return { name: "noaccess" };
   }

   return true;
}

function isAuthenticated() {
   const isAuthenticated = true;

   return isAuthenticated;
}

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         component: Homepage,
         name: "home",
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
         name: "productlist",
         beforeEnter: [isAdmin, isAuthenticated],
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
      {
         path: "/noaccess",
         component: NoAccess,
         name: "noaccess",
      },
   ],
   linkActiveClass: "active btn btn-primary",
});

router.beforeEach((to, from) => {
   return isAuthenticated;
});

export default router;
