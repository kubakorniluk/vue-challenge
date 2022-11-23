<script setup>
    import { RouterLink } from 'vue-router';
    import Heading from './Heading.vue';
</script>

<template>
    <div class="alert">
        <Heading children="Nie podano wymaganych wartości"/>
        <p class="alert__content">
            Sprawdź czy wprowadziłeś właściwe dane na stronie 
            <RouterLink to="/" class="heading--green">Config</RouterLink>
        </p>
    </div>
</template>

<style scoped>
    .alert {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: rgba(200, 10, 10, .2);
        border: 1px solid rgb(200, 10, 10);
        padding: 1rem 2rem;
        margin-bottom: 1rem;
        width: 90%;
    }
    .alert__content {
        margin: auto;
        font-size: 1rem;
        color: #34495E;
    }
    .alert .heading {
        font-size: 1rem;
        color: #34495E;
        margin: auto;
    }
</style>