import { reactive } from 'vue';

export const store = reactive({
    a: null,
    b: null,
    c: null
})

export const updateStore = (a, b, c) => {
    store.a = a;
    store.b = b;
    store.c = c;
}