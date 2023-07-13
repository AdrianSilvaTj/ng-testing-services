// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require("karma-firefox-launcher"),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      // para mocha reporter
      require('karma-mocha-reporter')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/ng-testing-services'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ],
      check: {
        global:{
          statements: 80,
          branches: 80,
          funtions: 80,
          lines: 80,
        }
      }
    },
    // para mocha reporter
    reporters: ['mocha'],
    browsers: ["FirefoxHeadless"],
    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-new-tab'], // Opción para ejecutar Firefox en modo sin cabeza (headless)
        prefs: {
          'browser.link.open_newwindow': 3 // Configuración para abrir en una pestaña en lugar de una nueva ventana
        }
      },
    },
    restartOnFileChange: true,
  });
};
