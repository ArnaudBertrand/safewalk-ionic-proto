import Card from './card/card';
import Header from './header/header';

import angular from 'angular';

const ResultsModule = angular.module('app.directives.results', [
  Card,
  Header
]);

export default ResultsModule.name;
