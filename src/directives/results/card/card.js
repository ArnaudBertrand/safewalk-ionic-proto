import angular from 'angular';
require('./card.scss');

const template = `
<h1>Card content</h1>
`;

function Card() {
  return {
    template
  };
}

const CardModule = angular.module('app.directives.results.card', [])
    .directive('resultsCard', Card);

export default CardModule.name;
