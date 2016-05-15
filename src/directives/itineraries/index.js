import angular from 'angular';
require('./itineraries.scss');

const template = `
<div class="container">Not implemented yet...</div>
`;

const ItinerariesModule = angular.module('app.directives.itineraries', [])
    .component('itineraries', {
        template
    });

export default ItinerariesModule.name;
