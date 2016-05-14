import angular from 'angular';
require('./login.scss');

const template = `
<h1>Login</h1>
<button class="button" ng-click="login()" ng-if="!$root.authData">Login</button>
<button class="button" ng-click="logout()" ng-if="$root.authData">Logout</button>
`;

function controller($scope, Auth) {

    $scope.login = function () {
        if ($scope.authData) {
            console.info('Already Logged in');
        } else {
            Auth.$authWithOAuthPopup("facebook").then(function (authData) {
                console.log("Sucess Login", authData);
            }).catch(function (error) {
                console.log("Login failed :", error);
            });
        }
    };

    $scope.logout = function () {
        Auth.$unauth();
    };

}

const LoginPageModule = angular.module('app.directives.results.loginpage', [])
    .component('loginPage', {
        template,
        controller
    });

export default LoginPageModule.name;
