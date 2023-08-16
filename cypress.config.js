const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "9d6nz8",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
