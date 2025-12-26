const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://analista-teste.seatecnologia.com.br",
    video: true,
    screenshotOnRunFailure: true,
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
});
