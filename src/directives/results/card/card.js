import angular from 'angular';
require('./card.scss');

const template = `
Date: {{ itinerary.date }}
`;

const CardModule = angular.module('app.directives.results.card', [])
    .component('resultsCard', {
      bindings: {
        itinerary: '<'
      },
      template
    });

export default CardModule.name;
