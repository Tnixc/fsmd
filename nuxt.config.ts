// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/color-mode", "marked-footnote", "marked-alert"],
  css: ["@/css/main.css"],
  colorMode: {
    classSuffix: ''
  }
});
