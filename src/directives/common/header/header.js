import angular from 'angular';
require('./header.scss');

function controller($scope, $state, $ionicHistory) {

    $scope.state = $state.current;

    $scope.back = () => {
        if ($scope.state.name === 'results') {
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
            });
            $state.go('search');
        }
    };

    $scope.mustDisplayBack = () => {
         return $scope.state.name === 'results';
    };
}

const template = `
<div class="bar bar-header">
   <div class="buttons" ng-hide="mustDisplayBack()">
    <img src="img/logo.png" class="logo">
  </div>
  <button class="button button-icon icon ion-android-arrow-back" ng-show="mustDisplayBack()" ng-click="back()"></button>
  <h1 class="title">Trouver un Safe Walk</h1>
  <div class="buttons">
    <img class="profile-picture" ng-src="http://graph.facebook.com/{{$root.authData.facebook.id}}/picture?type=square">
  </div>
</div>

<div class="tabs-striped tabs-top">
  <div class="tabs">
    <a class="tab-item" ng-class="{active: state.name == 'search' || state.name == 'results'}" ui-sref="search" nav-transition="none">
      <i class="icon ion-search"></i>
      Recherche
    </a>
    <a class="tab-item" ng-class="{active: state.name == 'chat'}" ui-sref="chat" nav-transition="none">
      <i class="icon ion-chatbubble-working"></i>
      Chat
    </a>
    <a class="tab-item" ng-class="{active: state.name == 'itineraries'}" ui-sref="itineraries" nav-transition="none">
      <i class="icon ion-map"></i>
      Mes itineraires
    </a>
  </div>
</div>
`;

export default angular.module('app.directives.common.header', [])
    .component('commonHeader', {
        template,
        controller
    })
    .name;
