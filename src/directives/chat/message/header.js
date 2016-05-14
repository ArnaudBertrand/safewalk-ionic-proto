import angular from 'angular';
require('./header.scss');

const template = `
<div class="bar bar-header"></div>
`;

export default angular.module('app.directives.common.header', [])
    .component('commonHeader', {
      template
    })
    .name;
