import angular from 'angular';
require('./login.scss');

const template = `
<h1>Login</h1>
<button class="button" ng-click="login()" ng-if="!$root.authData">Login</button>
`;

function LoginPage() {
    return {
        template
    };
}

const LoginPageModule = angular.module('app.directives.results.loginpage', [])
    .directive('loginPage', LoginPage);

export default LoginPageModule.name;
