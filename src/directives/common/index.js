import angular from 'angular';
import Header from './header/header';

const CommonModule = angular.module('app.directives.common', [
  Header
]);

export default CommonModule.name;
