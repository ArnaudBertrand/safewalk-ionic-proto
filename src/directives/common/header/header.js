import angular from 'angular';
require('./header.scss');

function controller($scope, $state) {

    $scope.state = $state.current;
    console.log($state.current.name);
}

const template = `
<div class="bar bar-header">
   <div class="buttons">
    icon
  </div>
  <h1 class="title">Trouver un Safe Walk</h1>
  <div class="buttons">
    <img class="profile-picture" ng-src="http://graph.facebook.com/{{$root.authData.facebook.id}}/picture?type=square">
  </div>
</div>

<div class="tabs-striped tabs-top">
  <div class="tabs">
    <a class="tab-item" ng-class="{active: state.name == 'search'}" ui-sref="search" nav-transition="none">
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
