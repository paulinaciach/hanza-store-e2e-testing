const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://hanzastore.pl',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
