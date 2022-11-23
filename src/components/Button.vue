<script setup>
    const props = defineProps({
        children: String,
        type: String
    })
</script>

<template>
    <button class="button" :type="type" >{{ children }}</button>
</template>

<style scoped>
    .button {
        border: 1px solid #41B883;
        padding: .5rem 1rem;
        color: #41B883;
        background-color: transparent;
        cursor: pointer;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
    }
    .button:hover {
        background-color: #41B883;
        color: #ffffff;
    }
</style>