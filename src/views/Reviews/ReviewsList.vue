<template>
    <ul class="reviews-list">
        <ReviewsItem :reviewsItem="rItem" v-for="rItem in reviews" :key="rItem.id" />
    </ul>
</template>

<script setup>
import ReviewsItem from './ReviewsItem.vue';
const porps = defineProps({
    reviews: {
        type: Array,
        required: true,
    },
   
})
</script>