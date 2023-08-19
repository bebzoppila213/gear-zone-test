
<template>
  <div class="reviews">
    <h2 class="reviews-title">Отзывы</h2>

    <ReviewsFilter @updateActiveRaiting="(newRaitingValue) => activeValueRaiting = newRaitingValue" :activeValueRaiting="activeValueRaiting" />
        
    <ReviewsList 
    v-if="getFoundReviewsLength > 0"
    :reviews="reviewsStore.getReviewsByRaiting(activeValueRaiting).slice(0, numberReviewsShow)" />

    <h3 v-else class="reviews-subtitle">Ещё не было отзывов ...</h3>

    <button 
    v-if="getFoundReviewsLength > 0" 
    @click="numberReviewsShow += 10" 
    class="btn main__btn btn-orange">Показать больше отзывов</button>

  </div>
</template>

<script setup>

import ReviewsList from "./ReviewsList.vue";
import ReviewsFilter from "./ReviewsFilter.vue";
import { ref, computed, watch  } from "vue";
import { useReviewsStore } from "@/stores/ReviewsStore"

const activeValueRaiting = ref("all");
const reviewsStore = useReviewsStore()
const numberReviewsShow = ref(10);

const getFoundReviewsLength = computed(() => reviewsStore.getReviewsByRaiting(activeValueRaiting.value).length)
watch(activeValueRaiting, () => {
    numberReviewsShow.value = 10
})

</script>