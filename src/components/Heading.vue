<script setup>
    const props = defineProps({
        children: String
    })
</script>

<template>
    <h1 class="heading" v-html="children"></h1>
</template>

<style>
    .heading {
        text-align: center;
        font-size: 1.25rem;
        margin: 0 0 1.5rem 0;
        color: #34495E;
    }
</style>