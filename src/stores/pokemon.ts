import { defineStore } from "pinia";
import { api } from "@/http/api";

export const usePokemonStore = defineStore({
  id: "pokemon",
  state: () => ({
    pokemons: [],
  }),
  getters: {},
  actions: {
    getPokemons() {
      return api
        .get("/pokemon?limit=10")
        .then((pokemons) => (this.pokemons = pokemons.data.results));
    },
  },
});
