import angular from 'angular';
require('./itineraries.scss');

const template = `
<div class="container">Vous n'avez aucun itineraire en cours...</div>
`;

const ItinerariesModule = angular.module('app.directives.itineraries', [])
    .component('itineraries', {
        template
    });

export default ItinerariesModule.name;
