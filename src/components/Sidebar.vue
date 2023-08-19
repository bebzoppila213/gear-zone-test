<template>
  <div class="sidebar">
    <div @click="() => sidebarIsOpen = !sidebarIsOpen" :class="'sidebar-content bg-blur ' + ( sidebarIsOpen && ' sidebar-content--open')">
      <div class="user sidebar-user">
        <div  class="user__logo sidebar-user__logo">
          <img  src="/images/icons/user.png" alt="Пользователь" />
        </div>
        <div class="user-info">
          <h3 class="user__name">Ivan_Mazepa</h3>
          <div class="user-info__status user-info__status--online">Онлайн</div>
        </div>
      </div>
      <span class="sidebar__info"> Продажа голды в вов 24/7 </span>
      <div class="sidebar__register">
        <span class="sidebar__register-text"> Регистрация: Месяц назад</span>
        <span class="sidebar__register-time"> 25 ноября 2022, в 11:33</span>
      </div>
      <ul class="sidebar-menu sidebar__menu">
        <li
          v-for="routerItem in routerData"
          :key="routerItem"
          role="button"
          class="sidebar-menu__item"
        >
          <router-link
            class="sidebar-menu__link"
            active-class="sidebar-menu__link--active"
            :to="{ name: routerItem.name }"
          >
            <img
              class="sidebar-menu__icon"
              :src="routerItem.icon"
              alt="Картинка"
            />
            <span class="sidebar-menu__text">{{ routerItem.text }}</span>
          </router-link>
        </li>
      </ul>
      <div class="sidebar__extit">
        <img src="/images/icons/exit.svg" alt="Выход" />
        <span class="sidebar__extit-text">Выйти</span>
      </div>
      <div class="sidebar-content__btn">
        <img src="/images/icons/arrow.png" alt="Иконка вниз">
      </div>
    </div>
  </div>
</template>

<script setup>
import { nameRouters } from "@/router/config";
import { ref } from "vue";
const routerData = [
  {
    name: nameRouters.deals,
    icon: "/images/icons/menu/trade.svg",
    text: "Сделки",
  },
  {
    name: nameRouters.ads,
    icon: "/images/icons/menu/ads.svg",
    text: "Объявления",
  },
  {
    name: nameRouters.reviews,
    icon: "/images/icons/menu/reviews.svg",
    text: "Отзывы",
  },
  {
    name: nameRouters.editProfile,
    icon: "/images/icons/menu/user.svg",
    text: "Редактировать профиль",
  },
];
const sidebarIsOpen = ref(false)
</script>