import angular from 'angular';
require('./result-details.scss');

function controller($scope, $stateParams, $ionicHistory, $state) {
  $scope.chat = () => {
    $ionicHistory.nextViewOptions({
      disableAnimate: true,
      disableBack: true
    });
    $state.go('chat', {user: 'hello'});
  };

  $scope.itinerary = $stateParams.itinerary;
}

const template = `
<div class="container">
    <div class="card">
        <img class="certified" src="${require('../certification.png')}" ng-if="itinerary.certified" />

        <!-- Header -->
        <div class="header">
            <div class="profile">
                <div class="profile-image"><img ng-src="{{ itinerary.image }}" /></div>
    
                <div class="profile-name">
                    <div class="name">{{ itinerary.name }}</div>
                    <div class="age">
                        {{ itinerary.age }}
                        <span class="rating">
                            <img ng-src="{{ itinerary.emoticon }}" />
                            {{ itinerary.rating }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="info">
                <span class="see-profile">VOIR PROFIL</span>
                <span class="walk-nb" ng-if="itinerary.nbWalk ">Vous avez deja marche <strong>{{ itinerary.nbWalk }}</strong> fois ensemble</span>
                <span class="walk-nb" ng-if="!itinerary.nbWalk ">Vous n'avez jamais marche ensemble</span>
            </div>
        </div>

        <!-- Check layer -->
        <div class="matching">
            <div class="percent">61%</div>
            <div class="text">de trajet en commun</div>
            <div class="action"><button ng-click="chat()">Chat et match !</button></div>
        </div>

        <!-- Map-->
        <div class="map">
            <img src="${require('./plan.png')}" />    
        </div>
    </div>
</div>

`;

const ResultDetailsModule = angular.module('app.directives.resultDetails', [])
    .component('resultDetails', {
      template,
      controller
    });

export default ResultDetailsModule.name;
