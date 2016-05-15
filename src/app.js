import itineraries from './factory/itineraries.factory';
import messages from './factory/messages.factory';
import ratings from './factory/ratings.factory';
import users from './factory/users.factory';
import auth from './factory/auth.factory';
import ListCtrl from './controllers/list.ctrl';
import {chat, chatList, login, search, results, resultDetails} from './route';

require('./app.scss');
import moment from 'moment';
require('moment/locale/fr');

window.moment = moment;

/**
 * Directives
 */
import Chat from './directives/chat';
import ChatList from './directives/chat-list';
import Common from './directives/common';
import Results from './directives/results';
import ResultDetails from './directives/result-details';
import Search from './directives/search';
import LoginPage from './directives/login';
require('angular-ui-router');

const app = angular.module('safewalk', [
    'ionic',
    'firebase',
    'ui.router',
    'ngCordova',
    Chat,
    ChatList,
    Common,
    Results,
    ResultDetails,
    Search,
    LoginPage
]);

app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('chat', {
            url: '/chat/:userid',
            template: chat,
            resolve: {
              "currentAuth": ["Auth", function (Auth) {
                return Auth.$requireAuth();
              }]
            }
        });

        $stateProvider.state('chatlist', {
            url: '/chatlist',
            template: chatList,
            resolve: {
              "currentAuth": ["Auth", function (Auth) {
                return Auth.$requireAuth();
              }]
            }
        });

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
            },
            params: {
                searchData: {}
            }
        });

        $stateProvider.state('resultDetails', {
          url: '/resultDetails',
          cache: false,
          template: resultDetails,
          resolve: {
              "currentAuth": ["Auth", function (Auth) {
                  return Auth.$requireAuth();
              }]
          },
          params: {
            itinerary: {}
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
