const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://analista-teste.seatecnologia.com.br",
  },

  video: true,
  screenshotOnRunFailure: true,

  screenshotsFolder: "3.Evidencias/5.Automatização/screenshots",
  videosFolder: "3.Evidencias/5.Automatização/videos",
  downloadsFolder: "3.Evidencias/5.Automatização/downloads",

  trashAssetsBeforeRuns: true,

  viewportWidth: 4000,
  viewportHeight: 2000,
});
