import angular from 'angular';
require('./card.scss');

function controller($scope) {
  console.log($scope)
}

const template = `
<div class="card">
  <div class="item item-text-wrap">
     Date: {{ $ctrl.itinerary.date }}
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
