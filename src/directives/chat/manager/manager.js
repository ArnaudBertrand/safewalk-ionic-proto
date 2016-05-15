import angular from 'angular';
require('./manager.scss');

function controller($scope, Messages, $stateParams) {
  $scope.messages = [];

  $scope.$watchCollection(
      () => Messages.getAllFrom($stateParams.userid),
      messages => {
        $scope.messages = messages;
      }
  );

  $scope.send = message => Messages.send(message, $stateParams.userid);
}

const template = `
<chat-message ng-repeat="message in messages" message="message"></chat-message>
<chat-form send="send(message)"></chat-form>
`;

export default angular.module('app.directives.chat.manager', [])
    .component('chatManager', {
      template,
      controller
    })
    .name;
