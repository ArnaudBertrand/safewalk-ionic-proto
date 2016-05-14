import angular from 'angular';
require('./result-details.scss');

const template = `
<div class="container">Hello world res</div>
`;

const ResultDetailsModule = angular.module('app.directives.resultDetails', [])
    .component('resultDetails', {
      template
    });

export default ResultDetailsModule.name;
