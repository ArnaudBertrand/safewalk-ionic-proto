import angular from 'angular';
require('./form.scss');

function controller($scope) {
  $scope.sendMess = message => {
    this.send({message: message});
    $scope.message = '';
  }
}

const template = `
<div class="container list">
  <label class="item item-input">
    <input type="text" placeholder="Ecrire un message..." 
        ng-model="message" ng-keyup="$event.keyCode == 13 && sendMess(message)">
    <i class="icon ion-paper-airplane placeholder-icon" ng-click="sendMess(message)"></i>
  </label>
</div>
`;

export default angular.module('app.directives.chat.form', [])
    .component('chatForm', {
      bindings: {
        send: '&'
      },
      template,
      controller
    })
    .name;
