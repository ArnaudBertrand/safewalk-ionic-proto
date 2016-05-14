import angular from 'angular';
require('./message.scss');

const template = `
<div class="container" ng-if="!$ctrl.message.left">
  <div class="message">
    <span class="arrow-left"></span>
    {{ $ctrl.message.content }}
  </div>

  <div class="imgContainer">
    <img ng-src="{{$ctrl.message.img}}" />
  </div>
</div>

<div class="container" ng-if="$ctrl.message.left">
  <div class="imgContainer">
    <img ng-src="{{$ctrl.message.img}}" />
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
      template
    })
    .name;
