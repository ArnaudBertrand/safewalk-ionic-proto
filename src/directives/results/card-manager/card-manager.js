import angular from 'angular';
require('./card-manager.scss');

function controller($scope, $ionicHistory, $state, Itineraries, Users) {
    const image = 'https://scontent.xx.fbcdn.net/v/t34.0-12/13236093_10208226135483744_1146075810_n.jpg?oh=06be224d895bd5dd9510374949d99b84&oe=573A364E';

    $scope.itineraries = Itineraries.getAll()
        .map(itineraries => ({
            ...itineraries,
            user: Users.get(itineraries.user)
        }));

    $scope.next = itinerary => {
        $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
        });
        $state.go('resultDetails', {itinerary}, {reload: true});
    };
}

const template = `
<div class="itin">Nice Ville — Malaussenna</div>
<div class="datetime">18 Mai <span class="bullet">•</span> 20h45</div>
<results-card ng-repeat="itinerary in itineraries" 
                itinerary="itinerary" ng-click="next(itinerary)">
</results-card>
`;

const CardManagerModule = angular.module('app.directives.results.cardManager', [])
    .component('resultsCardManager', {
        template,
        controller
    });

export default CardManagerModule.name;
