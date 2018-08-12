(function (app) {
  'use strict';
  app.registerModule('master-settings');
  app.registerModule('master-settings.routes', ['ui.router', 'core.routes']);
  app.registerModule('master-settings.services');
}(ApplicationConfiguration));