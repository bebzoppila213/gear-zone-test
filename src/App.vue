<template>
  <div class="wrapper">
    <div class="container">
      <div class="wrapper-inner">
        <header class="header">
          <h1 class="header-title">Мой профиль</h1>
          <div class="header__raiting raiting bg-blur info-block">
            <span class="raiting__text info-block__text">Рейтинг:</span>
            <span class="raiting__result info-block__res">5</span>
            <img
              class="raiting__img"
              src="/images/icons/raiting/5.svg"
              alt="Рейтинг"
            />
          </div>
          <div class="header__reviews bg-blur info-block">
            <span class="reviews__text info-block__text">Отзывов:</span>
            <strong class="reviews__result info-block__res">50</strong>
          </div>
          <div class="header__trade bg-blur info-block">
            <div class="trade-item">
              <span class="info-block__text">Сделок:</span>
              <strong class="info-block__res"></strong>
            </div>
            <div class="trade-item">
              <span class="info-block__text">Продаж:</span>
              <strong class="info-block__res">20</strong>
            </div>
            <div class="trade-item">
              <span class="info-block__text">Покупок:</span>
              <strong class="info-block__res">30</strong>
            </div>
          </div>
        </header>
        <div class="wrapper-content">
          <Sidebar />
          <main class="main">
            <hr class="main__hr" />
            <router-view />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

