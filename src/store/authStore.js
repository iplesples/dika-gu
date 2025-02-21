// src/store/authStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || "",
  login: (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData, token });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: "" });
  },
}));
