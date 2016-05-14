import Card from './card/card';
import CardManager from './card-manager/card-manager';

import angular from 'angular';

const ResultsModule = angular.module('app.directives.results', [
  Card,
  CardManager
]);

export default ResultsModule.name;
