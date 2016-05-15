import angular from 'angular';
require('./card.scss');

function controller($scope) {

}

const template = `
<div class="container">
  <img class="certified" src="${require('../../certification_small.png')}" ng-if="$ctrl.itinerary.user.certified" />
  <div class="left">
    <div class="score"><strong>{{ $ctrl.itinerary.percent }}%</strong></div>
    <div class="text-score">de trajet commun</div>
  </div>

  <div class="right">    
    <div class="content">
      <div class="profile">
        <div class="profile-image"><img ng-src="{{ $ctrl.itinerary.user.image }}" /></div>

        <div class="profile-name">
          <div class="name">{{ $ctrl.itinerary.user.name }}</div>
          <div class="age">
            {{ $ctrl.itinerary.user.age }} ans
            <span class="rating">
              <img ng-src="{{ $ctrl.itinerary.user.emoticon }}" />
              {{ $ctrl.itinerary.user.rating }}
            </span>
          </div>
        </div>
      </div>

      <div class="walk-nb" ng-if="$ctrl.itinerary.nbWalk ">Vous avez deja marche <strong>{{ $ctrl.itinerary.nbWalk }}</strong> fois ensemble</div>
      <div class="walk-nb" ng-if="!$ctrl.itinerary.nbWalk ">Vous n'avez jamais marche ensemble</div>
    </div>
    
  </div>    
</div>
`;

const CardModule = angular.module('app.directives.results.card', [])
    .component('resultsCard', {
      bindings: {
        itinerary: '<'
      },
      controller,
      template
    });

export default CardModule.name;
