import Card from './card/card';
import CardManager from './card-manager/card-manager';
import Header from './header/header';

import angular from 'angular';

const ResultsModule = angular.module('app.directives.results', [
  Card,
  CardManager,
  Header
]);

export default ResultsModule.name;
