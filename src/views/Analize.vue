<script setup>
  import { store } from '../store';
  import Alert from '../components/Alert.vue';
  import Heading from '../components/Heading.vue';
  import { checkValues } from '../helpers/checkValues';

  // destructure state values
  const { a, b, c } = store;

  // save original values for comparison in checkValues()
  const compA = a;
  const compB = b;
  const compC = c;

  // string to int for calculateDelta()
  Number(a);
  Number(b);
  Number(c);

  // calculations
  const delta = Math.pow(b, 2) - (4 * a * c);

  const x1 = ( -b - Math.sqrt(delta) ) / ( 2 * a );

  const x2 = ( -b + Math.sqrt(delta) ) / ( 2 * a );

  const xIfDeltaEqualToZero = -b / ( 2 * a )

  const calculateDelta = (delta) => {
    if ( delta > 0 ) {
      return `x1 = ${ x1 }<br/><br/> x2 = ${ x2 }`;
    } else if ( delta === 0 ) {
      return `x = ${ xIfDeltaEqualToZero}`;
    } else {
      return "Równanie kwadratowe nie ma rozwiązań";
    }
}
</script>

<template>
  <Alert v-if="!checkValues(compA, compB, compC)"/>
  <main>
    <Heading children="Wprowadzone wartości:"/>
    <div class="wrapper">
      <h2 class="heading">A = <span class="heading--green">{{ a ? a : '?' }}</span></h2>
      <h2 class="heading">B = <span class="heading--green">{{ b ? b : '?' }}</span></h2>
      <h2 class="heading">C = <span class="heading--green">{{ c ? c : '?'}}</span></h2>
    </div>
    <Heading children="Wynik funkcji kwadratowej <span class='heading--green'>ax^2 + bx + c</span> to:"/>
    <h1 class="heading heading--green" v-html="calculateDelta(delta)"></h1>
  </main>
</template>

<style>
  .heading--green {
    color: #41B883;
  }
</style>