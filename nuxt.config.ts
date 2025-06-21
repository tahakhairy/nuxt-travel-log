import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config

import "./lib/env";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode", "@pinia/nuxt", "@nuxt/ui"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    storage: "localStorage",
    storageKey: "theme",
    dataValue: "theme",
    classPrefix: "",
  },
});
