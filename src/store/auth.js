import { defineStore } from "pinia";
import { useMe } from "@/store/me";
import axios from "axios";

export const useAuth = defineStore("auth", {
  state: () => ({}),

  actions: {
    sanctum() {
      return axios.get("/sanctum/csrf-cookie");
    },
    async login(email, password) {
      const meStore = useMe();
      return axios
        .post("/api/login", {
          email,
          password,
        })
        .then((data) => {
          meStore.user = data.data.data;
        });
    },
    async logout() {
      const meStore = useMe();
      return axios.post("/api/logout").then(() => {
        meStore.user = null;
      });
    },
  },
  getters: {
    isLoggedIn() {
      const meStore = useMe();
      return !!meStore.user;
    },
  },
});
