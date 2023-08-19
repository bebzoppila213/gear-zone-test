<template>
    <div class="reviews-filter bg-blur ">
        <div class="reviews-user user">
            <div class="user__logo">
                <img src="/images/icons/user.png" alt="Пользователь">
            </div>
            <div class="user-info">
                <h3 class="user__name">Ivan_Mazepa</h3>
                <img class="user__raiting" src="/images/icons/raiting/5.svg" alt="">
            </div>
            <h4 class="user-review">50 отзывов за 1 месяц</h4>
        </div>
        <CustomSelect @updateSelectedValue="(newValue) => $emit('updateActiveRaiting', newValue)" :value="activeValueRaiting" :selectItmes="selectData" />
    </div>
</template>

<script setup>
import CustomSelect from "@/components/ui/CustomSelect.vue";

const props = defineProps({
    activeValueRaiting: String | Number
})

const emits = defineEmits(['updateActiveRaiting'])

const selectData = [
  {
    id: 1,
    text: "Ужасные отзывы",
    value: 1,
  },
  {
    id: 2,
    text: "Плохие отзывы",
    value: 2,
  },
  {
    id: 3,
    text: "Нормальные отзывы",
    value: 3,
  },
  {
    id: 4,
    text: "Хорошие отзывы",
    value: 4,
  },
  {
    id: 5,
    text: "Отличные отзывы",
    value: 5,
  },
  {
    id: 6,
    text: "Все отзывы или от 1 до 5",
    value: "all",
  },
];
</script>