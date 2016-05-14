import angular from 'angular';
require('./form.scss');

function controller ($scope, $http) {
  $scope.itinerary = {
    departure: '',
    arrival: '',
    day: '',
    time: '',
    user: ''
  };

  $scope.send = () => {
    console.log($scope.itinerary);
  };
}

const template = `
<div class="list override floating">
  <label class="item item-input item-floating-label">
    <i class="icon ion-flag placeholder-icon"></i>
    <span class="input-label">Depart</span>
    <input type="text" placeholder="Depart" ng-model="itinerary.departure">
  </label>
  <label class="item item-input item-floating-label">
    <i class="icon ion-pinpoint placeholder-icon"></i>
    <span class="input-label">Arrive</span>
    <input type="text" placeholder="Arrivee" ng-model="itinerary.arrival">
  </label>
  <label class="item item-input item-floating-label">
    <i class="icon ion-calendar placeholder-icon"></i>
    <span class="input-label">Date</span>
    <input type="text" placeholder="Date" ng-model="itinerary.day">
  </label>
  <label class="item item-input item-floating-label">
    <i class="icon ion-clock placeholder-icon"></i>
    <span class="input-label">Time</span>
    <input type="text" placeholder="Time" ng-model="itinerary.time">
  </label>
</div>

<button class="button button-block button-positive" ng-click="send()">All itinieraries</button>
`;

function Form() {
  return {
    controller,
    template
  };
}

const FormModule = angular.module('app.directives.search.form', [])
    .directive('searchForm', Form);

export default FormModule.name;
