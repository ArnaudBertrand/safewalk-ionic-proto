import angular from 'angular';
require('./result-details.scss');

function controller($scope, $stateParams, $ionicHistory, $state) {
  $scope.itinerary = $stateParams.itinerary;

  $scope.chat = () => {
    $ionicHistory.nextViewOptions({
      disableAnimate: true,
      disableBack: true
    });
    $state.go('chat', {userid: $scope.itinerary.user.id});
  };
}

const template = `
<ion-slide>
<div class="container">
    <div class="card">
        <img class="certified" src="${require('../certification.png')}" ng-if="itinerary.user.certified" />

        <!-- Header -->
        <div class="header">
            <div class="profile">
                <div class="profile-image"><img ng-src="{{ itinerary.user.image }}" /></div>
    
                <div class="profile-name">
                    <div class="name">{{ itinerary.user.name }}</div>
                    <div class="age">
                        {{ itinerary.user.age }} ans
                        <span class="rating">
                            <img ng-src="{{ itinerary.user.emoticon }}" />
                            {{ itinerary.user.rating }}
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
            <div class="percent">{{ itinerary.percent }}%</div>
            <div class="text">de trajet en commun</div>
            <div class="action"><button ng-click="chat()">Chat et match !</button></div>
        </div>

        <!-- Map-->
        <div class="map">
            <img src="${require('./plan.png')}" />    
        </div>
    </div>
</div>
<!-- Advertisement -->
<div class="ads">
    <div class="image"><img src="${require('./patisserie.jpg')}" /></div>
        <div class="info">
            <div class="title">Patisserie Margaux</div>
            <div class="address">150, rue Trachel, 06000 Nice</div>
            <div>Patisseries maisons. Mariage, evenements etc.</div>
        </div>
    </div>
</div>
</ion-slide>
`;

const ResultDetailsModule = angular.module('app.directives.resultDetails', [])
    .component('resultDetails', {
      template,
      controller
    });

export default ResultDetailsModule.name;
