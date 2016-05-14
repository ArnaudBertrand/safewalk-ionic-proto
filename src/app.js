import itineraries from './factory/itineraries.factory';
import messages from './factory/messages.factory';
import ratings from './factory/ratings.factory';
import users from './factory/users.factory';
import auth from './factory/auth.factory';
import ListCtrl from './controllers/list.ctrl';
import {login, search, results} from './route';

require('./app.scss');
import moment from 'moment';
require('moment/locale/fr');

window.moment = moment;

/**
 * Directives
 */
import Results from './directives/results';
import Search from './directives/search';
import LoginPage from './directives/login';
require('angular-ui-router');
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
const app = angular.module('safewalk', [
    'ionic',
    'firebase',
    'ui.router',
    "ngCordova",
    Results,
    Search,
    LoginPage
]);

app
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('login', {
            url: '/',
            template: login,
            resolve: {
                "currentAuth": ["Auth", '$q', function (Auth, $q) {
                    return $q(function (resolve, reject) {
                        Auth.$requireAuth().then(reject).catch(resolve);
                    })
                }]
            }
        });

        $stateProvider.state('search', {
            url: '/search',
            template: search,
            resolve: {
                "currentAuth": ["Auth", function (Auth) {
                    return Auth.$requireAuth();
                }]
            }
        });

        $stateProvider.state('results', {
            url: '/results',
            template: results,
            resolve: {
                "currentAuth": ["Auth", function (Auth) {
                    return Auth.$requireAuth();
                }]
            }
        });

    })
    .run(function ($ionicPlatform, Auth) {
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

        window.logout = Auth.$unauth;
        // To use it when we need to logout
    })
    .factory('Auth', auth)
    .factory('Itineraries', itineraries)
    .factory('Users', users)
    .factory('Messages', messages)
    .factory('Ratings', ratings)
    .controller("ListCtrl", ListCtrl);
