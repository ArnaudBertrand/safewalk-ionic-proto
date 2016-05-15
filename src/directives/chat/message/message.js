import angular from 'angular';
require('./message.scss');

function controller($scope, Users, $rootScope){
  if (this.message.from) {
    $scope.from = Users.get(this.message.from);
  } else {
    $scope.user = {image: `http://graph.facebook.com/${$rootScope.authData.facebook.id}/picture?type=square`};
  }
}

const template = `
<div class="container end" ng-if="from">
  <div class="message right">
    <span class="arrow-left"></span>
    {{ $ctrl.message.content }}
  </div>

  <div class="imgContainer">
    <img ng-src="{{from.image}}" />
  </div>
</div>

<div class="container" ng-if="user">
  <div class="imgContainer">
    <img ng-src="{{user.image}}" />
  </div>

  <div class="message">
    <span class="arrow-right"></span>
    {{ $ctrl.message.content }}
  </div>
</div>
`;

export default angular.module('app.directives.chat.message', [])
    .component('chatMessage', {
      bindings: {
        message: '<'
      },
      template,
      controller
    })
    .name;
