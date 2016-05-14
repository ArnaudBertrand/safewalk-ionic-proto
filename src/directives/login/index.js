import angular from 'angular';
require('./login.scss');

const template = `
<div class="container">
    <div class="block">
        <img src="${require('./logo.png')}" />
        <label class="item">
            <button class="button button-block button-positive" ng-click="login()" ng-if="!$root.authData">
            <i class="icon ion-social-facebook placeholder-icon"></i>
            Login with Facebook
            </button>
        </label>
    </div>
</div>
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
