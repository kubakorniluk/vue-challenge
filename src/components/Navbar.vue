<script setup>
  import { RouterLink} from 'vue-router'
</script>

<template>
    <nav class="navbar">
        <img class="navbar__img" src="../../public/favicon.ico" alt="Logo">
        <RouterLink class="navbar__item" to="/">Config</RouterLink>
        <RouterLink class="navbar__item" to="/analize">Analize</RouterLink>
    </nav>
</template>

<style scoped>
  .navbar {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 100%;
    background-color: #34495E;
    padding: 1rem 1.5rem;
  }
  .navbar__item {
    margin: 0;
    font-size: 1rem;
    color: #ffffff;
    cursor: pointer;
  }
  .navbar__item:hover {
    color: #41B883;
  }

</style>
