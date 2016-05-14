import angular from 'angular';
require('./header.scss');

const template = `
<div class="bar bar-header">
  <h1 class="title">Trouver un safe walk</h1>
</div>
`;

function Header() {
  return {
    template
  };
}

const HeaderModule = angular.module('app.directives.results.header', [])
    .directive('resultsHeader', Header);

export default HeaderModule.name;
