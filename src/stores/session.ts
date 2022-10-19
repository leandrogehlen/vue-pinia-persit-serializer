import { defineStore } from "pinia";
import { stringify, parse } from "zipson";

export const useSessionStore = defineStore("session", {
  state: () => ({
    data: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.data,
  },
  actions: {
    start(data: any) {
      this.data = data;
    },
    clear() {
      this.data = null;
    },
  },
  persist: {
    serializer: {
      deserialize: parse,
      serialize: stringify,
    },
  },
});
