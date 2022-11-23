<script setup>
    const props = defineProps({
        modelValue: String,
        inputName: String
    });

    defineEmits(['update:modelValue'])

    const convertInputName = (name) => {
        return name.toUpperCase()
    }
</script>

<template>
    <fieldset>
        <label :for="inputName">Wpisz wartość {{ convertInputName(inputName) }}</label>
        <input 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            type="number" 
            :id="inputName"
            :placeholder="convertInputName(inputName)" 
            required
        />
    </fieldset>
</template>

<style scoped>
    fieldset {
        border: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;
        gap: 1rem;
        width: auto;
        color: #34495E;
    }
    input {
        border: 1px solid #41B883;
        padding: .5rem 1rem;
        color: #34495E;
        font-family: 'Poppins', sans-serif;
    }
</style>