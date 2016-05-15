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
  <div class="buttons left" ng-hide="mustDisplayBack()">
    <img src="img/logo.png" class="logo">
  </div>
  <h1 class="title">{{ $ctrl.text }}</h1>
  <div class="buttons">
    <img class="profile-picture" ng-src="http://graph.facebook.com/{{$root.authData.facebook.id}}/picture?type=square">
  </div>
</div>

<div class="tabs-striped tabs-top">
  <div class="tabs">
    <a class="tab-item" ng-class="{active: state.name == 'search' || state.name == 'results'}" ui-sref="search" nav-transition="none">
      <i class="icon ion-ios-search-strong"></i>
      Recherche
    </a>
    <a class="tab-item" ng-class="{active: state.name == 'itineraries'}" ui-sref="itineraries" nav-transition="none">
      <i class="icon ion-map"></i>
      Mes itineraires
    </a>
    <a class="tab-item" ng-class="{active: state.name == 'chatlist' || state.name == 'chat'}" ui-sref="chatlist" nav-transition="none">
      <i class="icon ion-chatbubble-working"></i>
      Chat
    </a>
  </div>
</div>
`;

export default angular.module('app.directives.common.header', [])
    .component('commonHeader', {
        bindings: {
            text: '<'
        },
        template,
        controller
    })
    .name;
