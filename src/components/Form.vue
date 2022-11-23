<script setup>
  import { useRouter } from 'vue-router';
  import { updateStore } from '../store';
  import Input from './Input.vue';
  import Button from './Button.vue';

  // temporary variables that store input values
  let a = '', b = '', c = '';

  const resetModelValue = () => {
    a = '';
    b = '';
    c = '';
    updateStore(a, b, c)
  }

  const router = useRouter();

  const handleClick = () => {
    updateStore(a, b, c);
    if (a && b && c) {
      router.push('/analize');
    }
  }
</script>

<template>
  <form @submit.prevent>
    <div class="wrapper">
      <Input v-model="a" input-name="a"/>
      <Input v-model="b" input-name="b"/>
      <Input v-model="c" input-name="c"/>
    </div>
    <div class="wrapper">
      <Button 
        children="Resetuj" 
        class="button--reset"
        type="reset"
        @click="resetModelValue"
      />
      <Button 
          children="OK" 
          type="submit"
          @click="handleClick"
        >
      </Button>
    </div>
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  .button--reset {
    border-color: #34495E;
    color: #34495E;
  }
  .button--reset:hover {
    background-color: #34495E;
    color: #ffffff;
  }
</style>
