import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import { nameRouters } from "./config";

const routes = [{
        path: "/deals",
        name: nameRouters.deals,
        component: () =>
            import ("../views/Deals.vue"),
    },
    {
        path: "/reviews",
        name: nameRouters.reviews,
        component: () =>
            import ("../views/Reviews/Reviews.vue"),
    },
    {
        path: "/ads",
        name: nameRouters.ads,
        component: () =>
            import ("../views/Ads.vue"),
    },
    {
        path: "/edit-profile",
        name: nameRouters.editProfile,
        component: () =>
            import ("../views/EditProfile.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;