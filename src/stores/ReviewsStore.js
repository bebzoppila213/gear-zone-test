import { defineStore } from "pinia";
import { data } from "./reviewsData";
export const useReviewsStore = defineStore("reviewsStore", {
    state: () => ({
        reviews: data
    }),

    getters: {
        getReviewsByRaiting: (state) => {
            return (raiting) =>
                raiting === "all" ?
                state.reviews :
                state.reviews.filter(
                    (reviewsItem) => reviewsItem.raiting === raiting
                );
        },
    },
});