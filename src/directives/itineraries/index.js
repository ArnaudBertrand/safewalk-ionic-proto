import angular from 'angular';
require('./itineraries.scss');

const template = `
<div class="container">
    <i class="ion icon ion-map"></i>
    <div>Vous n'avez aucun itineraire en cours...</div>
    <button class="button icon ion-plus"></button>
</div>
`;

const ItinerariesModule = angular.module('app.directives.itineraries', [])
    .component('itineraries', {
        template
    });

export default ItinerariesModule.name;
