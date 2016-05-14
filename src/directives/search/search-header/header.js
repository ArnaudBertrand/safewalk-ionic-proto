import angular from 'angular';
require('./header.scss');

const template = `
<div class="bar bar-header">
   <div class="buttons">
    icon
  </div>
  <h1 class="title">Trouver un Safe Walk</h1>
  <div class="buttons">
    <img class="profile-picture" ng-src="http://graph.facebook.com/{{$root.authData.facebook.id}}/picture?type=square">
  </div>
</div>
`;

function Header() {
  return {
    template
  };
}

const HeaderModule = angular.module('app.directives.search.header', [])
    .directive('searchHeader', Header);

export default HeaderModule.name;
