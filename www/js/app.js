// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase'])


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

    .factory("Items", function ($firebaseArray) {
        var itemsRef = new Firebase("https://boiling-inferno-2417.firebaseio.com/items");
        return $firebaseArray(itemsRef);
    })

    .factory('Auth', function ($firebaseAuth, $rootScope) {
        var ref = new Firebase("https://boiling-inferno-2417.firebaseio.com");
        var Auth = $firebaseAuth(ref);
        Auth.$onAuth(function (authData) {
            $rootScope.authData = authData;
        });
        return Auth;
    })

    .controller("ListCtrl", function ($scope, Items, Auth, $ionicPopup) {
        $scope.items = Items;
        $scope.data = {};

        $scope.addItem = function () {
            if ($scope.authData) {
                var myPopup = $ionicPopup.show({
                    template: '<input type="text" ng-model="data.name">',
                    title: 'Enter Text',
                    scope: $scope,
                    buttons: [
                        {text: 'Cancel'},
                        {
                            text: '<b>Create</b>',
                            type: 'button-positive',
                            onTap: function (e) {
                                if (!$scope.data.name) {
                                    //don't allow the user to close unless he enters wifi password
                                    e.preventDefault();
                                } else {
                                    return $scope.data.name;
                                }
                            }
                        }
                    ]
                });

                myPopup.then(function (name) {
                    if (name) {
                        $scope.items.$add({
                            name: name,
                            checked: false,
                            userId: $scope.authData.uid
                        });
                    }
                });
            }
        };

        $scope.change = function (item) {
            if ($scope.authData && $scope.authData.uid === item.userId) {
                $scope.items.$save(item);
            } else {
                item.checked = !item.checked;
            }
        };

        $scope.login = function () {
            if ($scope.authData) {
                console.log('Already Logged in');
            } else {
                Auth.$authWithOAuthPopup("facebook").then(function (authData) {
                    console.log("Logged in as 2:", authData);
                }).catch(function (error) {
                    console.log("Authentication failed:", error);
                });
            }
        };

        $scope.logout = function () {
            Auth.$unauth();
        };

        $scope.mine = function (item) {
            return $scope.authData && item.userId == $scope.authData.uid;
        };

    });
