const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://analista-teste.seatecnologia.com.br",
  },

  // Evidências
  video: true, // vídeo só é gerado no `cypress run`
  screenshotOnRunFailure: true,

  // Pastas de saída (dentro do seu projeto)
  screenshotsFolder: "3.Evidencias/5.Automatização/screenshots",
  videosFolder: "3.Evidencias/5.Automatização/videos",
  downloadsFolder: "3.Evidencias/5.Automatização/downloads",

  // opcional (limpa assets antigos a cada run)
  trashAssetsBeforeRuns: true,

  viewportWidth: 4000,
  viewportHeight: 2000,
});
