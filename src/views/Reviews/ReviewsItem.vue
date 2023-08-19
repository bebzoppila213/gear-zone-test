<template>
    <li class="reviews-item">
        <div class="reviews-item__user user">
            <img class="reviews-item__logo user__logo" src="/images/icons/user.png" alt="Пользователь">
        </div>
        <div class="reviews-item__content">
            <div class="reviews-item__main">
                <div class="reviews-item__info">   
                    <span class="reviews-item__name">{{reviewsItem.userName}}</span>
                    <span class="reviews-item__product">{{reviewsItem.game}}, {{reviewsItem.price.toFixed(2)}} ₸</span>
                </div>
                <div class="reviews-item__raiting">
                    <span class="reviews-item__date">Этот месяц</span>
                    <img class="reviews-item__raiting__img" :src="`/images/icons/raiting/${reviewsItem.raiting}.svg`" alt="">
                </div>
            </div>
            <div class="reviews-item__descriptions">{{reviewsItem.descriptions}}</div>
        </div>
    </li>
</template>
<script setup>
const props = defineProps({
    reviewsItem: {
        type: Object,
        required: true,
    }
})
</script>