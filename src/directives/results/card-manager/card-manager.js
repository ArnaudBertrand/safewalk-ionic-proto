import angular from 'angular';
require('./card-manager.scss');

function controller($scope, $ionicHistory, $state) {
    const image = 'https://scontent.xx.fbcdn.net/v/t34.0-12/13236093_10208226135483744_1146075810_n.jpg?oh=06be224d895bd5dd9510374949d99b84&oe=573A364E';

    $scope.itineraries = [
        {
            name: 'Jean-Yves D.',
            age: '24 ans',
            percent: '61%',
            nbWalk: 3,
            certified: true,
            image,
            rating: 45,
            emoticon: require('./3.png')
        },
        {
            name: 'Jean-Yves D.',
            age: '56 ans',
            percent: '88%',
            nbWalk: 0,
            image,
            rating: 67,
            emoticon: require('./2.png')
        },
        {
            name: 'Jean-Yves D.',
            age: '56 ans',
            percent: '88%',
            nbWalk: 0,
            image,
            rating: 67,
            emoticon: require('./1.png')
        }
    ];

    $scope.next= () => {
        $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
        });
        $state.go('resultDetails', {});
    };
}

const template = `
<div class="itin">Nice Ville — Malaussenna</div>
<div class="datetime">18 Mai <span class="bullet">•</span> 20h45</div>
<results-card ng-repeat="itinerary in itineraries" 
                itinerary="itinerary" ng-click="next()">
</results-card>
`;

const CardManagerModule = angular.module('app.directives.results.cardManager', [])
    .component('resultsCardManager', {
        template,
        controller
    });

export default CardManagerModule.name;
