import angular from 'angular';
require('./form.scss');

function controller($scope, $cordovaDatePicker, $state, $ionicHistory) {
    $scope.itinerary = {
        departure: '',
        arrival: ''
    };

    $scope.send = () => {
        $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
        });
        $state.go('results', {
            searchData: $scope.itinerary
        });
    };

    $scope.pickADate = () => {
        try {
            $cordovaDatePicker.show({
                date: $scope.itinerary.day,
                mode: 'date', // or 'time'
                minDate: new Date(),
                allowOldDates: false,
                allowFutureDates: true,
                doneButtonLabel: 'Valider',
                doneButtonColor: '#F2F3F4',
                cancelButtonLabel: 'Annuler',
                cancelButtonColor: '#000000'
            }).then(function(date){
                $scope.itinerary.day = moment(date);
                console.log('selected date :', date);
            })
        } catch(err) {
            console.warn('Try native call in browser');
        }
    };
    $scope.pickATime = () => {
        try {
            $cordovaDatePicker.show({
                date: $scope.itinerary.time,
                mode: 'time',
                doneButtonLabel: 'Valider',
                doneButtonColor: '#F2F3F4',
                cancelButtonLabel: 'Annuler',
                cancelButtonColor: '#000000'
            }).then(function(date){
                $scope.itinerary.time = moment(date);
                console.log('selected time :', date);
            })
        } catch(err) {
            console.warn('Try native call in browser');
        }
    };
}

const template = `
<div class="list override floating">
  <label class="item item-input item-floating-label">
    <i class="icon ion-pas placeholder-icon"><div class="line"></div></i>
    <span class="input-label">Depart</span>
    <input type="text" placeholder="Départ" ng-model="itinerary.departure">
  </label>
  <label class="item item-input item-floating-label">
    <i class="icon ion-pas placeholder-icon"></i>
    <span class="input-label">Arrive</span>
    <input type="text" placeholder="Arrivée" ng-model="itinerary.arrival">
  </label>
  <label class="item item-input item-floating-label">
    <i class="icon ion-calendar placeholder-icon"></i>
    <span class="input-label">Date</span>
    <input type="text" placeholder="Date" ng-value="itinerary.day.format('dddd Do MMMM YYYY')" ng-readonly="true" ng-click="pickADate()">
  </label>
  <label class="item item-input item-floating-label">
    <i class="icon ion-clock placeholder-icon"></i>
    <span class="input-label">Time</span>
    <input type="text" placeholder="Heure de départ" ng-value="itinerary.time.format('HH:mm')" ng-readonly="true" ng-click="pickATime()">
  </label>
  <button class="button send" ng-click="send()">Trouver un Co-walker</button>
</div>


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
