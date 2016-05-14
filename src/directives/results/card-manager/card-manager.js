import angular from 'angular';
require('./card-manager.scss');

function controller ($scope) {
  $scope.itineraries = [
    {
      departure: {lat: 100, long: 100, addr: '15 rue georges brassens, Nice'},
      arrival:  {lat: 100, long: 100, addr: '15 rue georges brassens, Nice'},
      date: new Date(),
      user: {id: 'juliealone'}
    },
    {
      departure: {lat: 100, long: 100, addr: '15 rue georges brassens, Nice'},
      arrival:  {lat: 100, long: 100, addr: '15 rue georges brassens, Nice'},
      date: new Date(),
      user: {id: 'juliealone'}
    },
    {
      departure: {lat: 100, long: 100, addr: '15 rue georges brassens, Nice'},
      arrival:  {lat: 100, long: 100, addr: '15 rue georges brassens, Nice'},
      date: new Date(),
      user: {id: 'juliealone'}
    }
  ]
}

const template = `
<results-card ng-repeat="itinerary in itineraries" 
                itinerary="itinerary">
</results-card>
`;

const CardManagerModule = angular.module('app.directives.results.cardManager', [])
    .component('resultsCardManager', {
      template,
      controller
    });

export default CardManagerModule.name;
