import angular from 'angular';
require('./card.scss');

function controller($scope) {

}

const template = `
<div class="container">
  <div class="left">
    <div class="score"><strong>{{ $ctrl.itinerary.percent }}</strong></div>
    <div class="text-score">de trajet commun</div>
  </div>

  <div class="right">    
    <div class="content">
      <div class="profile">
        <div class="profile-image"><img ng-src="{{ $ctrl.itinerary.image }}" /></div>

        <div class="profile-name">
          <div class="name">{{ $ctrl.itinerary.name }}</div>
          <div class="age">{{ $ctrl.itinerary.age }}</div>
        </div>

        <div class="rating">
            <div>
              <img ng-src="{{ $ctrl.itinerary.emoticon }}" />{{ $ctrl.itinerary.rating }}        
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
