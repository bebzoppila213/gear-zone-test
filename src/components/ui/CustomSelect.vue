<template>
    <div class="custom-select">
        <div @click="isOpen = !isOpen" class="custom-select__result">
            <strong class="custom-select__help">Фильтр рейтинга</strong>
            <strong class="custom-select__text">{{getTextByActiveOption()}}</strong>
            <img class="custom-select__icon" src="/images/icons/arrow.png" alt="Иконка">
        </div>
        <ul :class="'custom-select__list bg-blur ' + (isOpen && 'custom-select__list--open')">
            <li  v-for="selectItem in selectItmes" 
                :key="selectItem.id" 
                @click="() => onChangeSeclect(selectItem.value)"
                class="custom-select__item">{{selectItem.text}}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
    selectItmes: Array,
    value: String | Number,
})
const emit = defineEmits(['updateSelectedValue'])

const isOpen = ref(false)

const onChangeSeclect = (newSelectValue) => {
    isOpen.value = false
    emit("updateSelectedValue", newSelectValue)
}

const getTextByActiveOption = () => {
    const activeSelectItem = props.selectItmes.find(selectItem => selectItem.value == props.value)
    if(activeSelectItem) {
        return activeSelectItem.text
    }
    return "Некорректное значение"
}

</script>