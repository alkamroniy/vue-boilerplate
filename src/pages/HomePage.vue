<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { usePokemonStore } from "@/stores/pokemon";

const store = usePokemonStore();
const { pokemons } = storeToRefs(store);

onMounted(() => {
  store.getPokemons();
});
</script>

<template>
  <pre>{{ pokemons }}</pre>
</template>
