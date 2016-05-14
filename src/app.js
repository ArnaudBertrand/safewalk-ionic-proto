import items from './factory/items.factory';
import auth from './factory/auth.factory';
import ListCtrl from './controllers/list.ctrl';
import {login, search, results} from './route';

require('./app.scss');

/**
 * Directives
 */
import Results from './directives/results';
import Search from './directives/search';
require('angular-ui-router');
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
const app = angular.module('safewalk', [
  'ionic',
  'firebase',
  'ui.router',
  Results,
  Search
]);

app.config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('login', {
        url: '/',
        template: login
      });

      $stateProvider.state('search', {
        url: '/search',
        template: search
      });

      $stateProvider.state('results', {
        url: '/results',
        template: results
      });
    })
    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

          // Don't remove this line unless you know what you are doing. It stops the viewport
          // from snapping when text inputs are focused. Ionic handles this internally for
          // a much nicer keyboard experience.
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })
    .factory("Items", items)
    .factory('Auth', auth)
    .controller("ListCtrl", ListCtrl);
